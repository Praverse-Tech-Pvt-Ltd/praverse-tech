import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "src", "content", "blog");

export interface PostMetadata {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  tags: string[];
  category?: string;
  metaDescription?: string;
  readingTime?: string;
  legacySlugs?: string[];
  slug?: string;
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
  readingTime: string;
}

function normalizeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\.mdx?$/, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function buildPostFromFile(fileName: string): Post | null {
  try {
    const fileSlug = normalizeSlug(fileName);
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const metadata = data as PostMetadata;
    const slug = normalizeSlug(metadata.slug ?? fileSlug);

    return {
      slug,
      metadata: {
        ...metadata,
        slug,
      },
      content,
      readingTime: metadata.readingTime?.trim() || readingTime(content).text,
    };
  } catch {
    return null;
  }
}

export function getBlogPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"));

  return fileNames
    .map(buildPostFromFile)
    .filter((post): post is Post => post !== null)
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
    );
}

export function getPostBySlug(slug: string): Post | undefined {
  const normalizedSlug = normalizeSlug(slug);
  return getBlogPosts().find((post) => {
    if (post.slug === normalizedSlug) {
      return true;
    }

    return post.metadata.legacySlugs?.some(
      (legacySlug) => normalizeSlug(legacySlug) === normalizedSlug,
    );
  });
}

export function getFounderPost(): Post | undefined {
  return getBlogPosts().find((post) =>
    post.metadata.tags?.some(
      (tag) =>
        typeof tag === "string" &&
        tag.toLowerCase() === "founder insights",
    ),
  );
}
