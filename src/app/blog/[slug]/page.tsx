import { notFound } from "next/navigation";
import { getBlogPosts, getPostBySlug } from "@/lib/blog";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { absoluteUrl } from "@/lib/site";
import { renderBlogMarkdown } from "@/lib/blog-renderer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const ogImageUrl = absoluteUrl("/placeholders/home-hero-bg.png");
  const description = post.metadata.metaDescription || post.metadata.excerpt;

  return {
    title: `${post.metadata.title} | Praverse Tech`,
    description,
    openGraph: {
      title: post.metadata.title,
      description,
      type: "article",
      publishedTime: post.metadata.date,
      authors: [post.metadata.author],
      url: absoluteUrl(`/blog/${post.slug}`),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
    },
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postTags = post.metadata.tags ?? [];
  const isFounderPost = postTags.includes("Founder Insights");

  const authorAvatar = PlaceHolderImages.find((p) => p.id === "avatar-2");
  const image = PlaceHolderImages.find((p) => p.id === post.metadata.image);

  return (
    <article>
      <header className="relative overflow-hidden bg-muted/35 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(57,187,166,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),transparent_32%)]" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-border/60 bg-card/45 px-6 py-8 text-center shadow-2xl backdrop-blur-xl md:px-10 md:py-10">
            <div className="mb-8 flex justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/55 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to insights
              </Link>
            </div>
            {isFounderPost && (
              <div>
                <Badge className="mb-4 bg-primary/15 text-primary ring-1 ring-primary/25">
                  Founder Insight
                </Badge>
              </div>
            )}
            <div className="mb-4 flex flex-wrap justify-center gap-2">
              {postTags
                .filter((t) => t !== "Founder Insights")
                .map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full border-border/50 bg-background/35 px-3 py-1 text-sm text-foreground/90 backdrop-blur-sm"
                  >
                    {tag}
                  </Badge>
                ))}
            </div>
            <div>
              <h1 className="prose-heading mx-auto max-w-4xl text-4xl md:text-5xl">
                {post.metadata.title}
              </h1>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-3 rounded-full border border-border/45 bg-background/30 px-3 py-2">
                <Avatar className="h-9 w-9 ring-1 ring-border/60">
                  {authorAvatar && (
                    <AvatarImage
                      src={authorAvatar.imageUrl}
                      alt={post.metadata.author}
                    />
                  )}
                  <AvatarFallback>
                    {post.metadata.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="font-semibold">{post.metadata.author}</p>
                  {isFounderPost && (
                    <p className="text-xs text-muted-foreground">
                      Founder, Praverse Tech Pvt Ltd
                    </p>
                  )}
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-border/45 bg-background/30 px-4 py-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.metadata.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-border/45 bg-background/30 px-4 py-2">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="container pb-20 pt-10 md:pt-14">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[28px] border border-border/50 bg-card/55 p-6 shadow-xl backdrop-blur-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                Article overview
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                {post.metadata.excerpt}
              </p>
            </div>
            {image && (
              <div className="overflow-hidden rounded-[28px] border border-border/50 bg-card/40 shadow-xl backdrop-blur-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image.imageUrl}
                    alt={post.metadata.title}
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
                </div>
              </div>
            )}
          </div>
          <div className="rounded-[32px] border border-border/60 bg-card/50 px-6 py-8 shadow-2xl backdrop-blur-sm md:px-10 md:py-10">
            <div className="prose prose-invert mx-auto max-w-none prose-headings:font-headline prose-headings:tracking-tight prose-headings:text-foreground prose-h2:mt-14 prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-4 prose-h3:mt-8 prose-p:max-w-none prose-p:text-foreground/82 prose-p:leading-8 prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80 prose-strong:text-foreground prose-ul:pl-5 prose-ul:text-foreground/80 prose-ol:pl-5 prose-ol:text-foreground/80 prose-li:my-2 prose-li:marker:text-primary prose-blockquote:border-l-primary prose-blockquote:bg-muted/35 prose-blockquote:px-5 prose-blockquote:py-4 prose-blockquote:text-foreground/78">
              {renderBlogMarkdown(post.content)}
            </div>
          </div>
        </div>
      </div>

      {isFounderPost && (
        <section className="bg-muted/40 py-20">
          <div className="container text-center">
            <Badge className="mb-4 bg-primary/15 text-primary ring-1 ring-primary/25">
              Continue the conversation
            </Badge>
            <h2 className="text-2xl font-bold">
              Want to collaborate on the future of AI in healthcare?
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild className="rounded-full px-6">
                <Link href="/contact">Discuss a Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-border/60 bg-background/35 px-6"
              >
                <Link href="/pharma-ai">Explore Our Healthcare AI Work</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
