import { getBlogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => {
    const parsedDate = post.metadata?.date ? new Date(post.metadata.date) : null;
    const lastModified =
      parsedDate && !Number.isNaN(parsedDate.getTime()) ? parsedDate : new Date();

    return {
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified,
      changeFrequency: "monthly",
    };
  });

  const staticPages = [
    "/",
    "/about",
    "/blog",
    "/contact",
    "/domains",
    "/enterprise",
    "/healthmate",
    "/healthmate-privacy",
    "/healthmate-terms",
    "/industrial-robotics",
    "/industries/finance-management",
    "/innovate",
    "/machine-learning",
    "/pharma-ai",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
  }));

  return [...staticPages, ...postEntries];
}
