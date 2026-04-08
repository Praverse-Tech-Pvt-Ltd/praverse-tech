import Image from "next/image";
import Link from "next/link";
import { getBlogPosts, getFounderPost } from "@/lib/blog";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogIdeasGenerator } from "@/components/blog/BlogIdeasGenerator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/common/AnimatedSection";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Insights",
  description:
    "Founder's notes, product insights, and applied AI perspectives from Praverse Tech.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getBlogPosts();
  const founderPost = getFounderPost();
  const otherPosts = posts.filter((post) => post.slug !== founderPost?.slug);
  const founderAvatar = PlaceHolderImages.find((p) => p.id === "avatar-2");
  const founderImage = founderPost
    ? PlaceHolderImages.find((p) => p.id === founderPost.metadata.image)
    : undefined;

  return (
    <div>
      <AnimatedSection
        className="relative overflow-hidden bg-muted/35 pt-24 pb-16 md:pt-32 md:pb-24"
        amount={0.5}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(57,187,166,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),transparent_34%)]" />
        <div className="container relative z-10 text-center">
          <AnimatedItem className="inline-flex justify-center">
            <Badge className="mb-5 bg-primary/15 text-primary ring-1 ring-primary/25">
              Founder insights & research notes
            </Badge>
          </AnimatedItem>
          <AnimatedItem>
            <h1 className="prose-heading">Insights from Praverse Tech</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
            <p className="mt-6 mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Founder perspectives, deployment notes, and applied AI thinking
              across healthcare, pharma, and industrial intelligence.
            </p>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild className="rounded-full px-6">
                <Link href="/contact">Discuss a Project</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-border/60 bg-background/40 px-6">
                <Link href="/about">Learn about Praverse</Link>
              </Button>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      {founderPost && (
        <AnimatedSection className="py-20 md:pt-0 md:pb-28" amount={0.35}>
          <div className="container">
            <AnimatedItem className="mx-auto mb-10 max-w-2xl text-center">
              <Badge className="mb-4 bg-primary/15 text-primary ring-1 ring-primary/25">
                Featured founder note
              </Badge>
              <h2 className="prose-heading text-3xl md:text-4xl">
                Founder&apos;s corner
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                Perspective pieces from the founder on applied AI, healthcare,
                and product strategy.
              </p>
            </AnimatedItem>
            <Link href={`/blog/${founderPost.slug}`} className="block group">
              <Card className="overflow-hidden rounded-[32px] border-border/60 bg-card/60 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl md:flex">
                <div className="relative h-72 w-full md:h-auto md:w-[48%]">
                  {founderImage && (
                    <Image
                      src={founderImage.imageUrl}
                      alt={founderPost.metadata.title}
                      fill
                      loading="eager"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-8 md:w-[52%] md:p-10">
                  <Badge className="mb-4 w-fit bg-primary/15 text-primary ring-1 ring-primary/25">
                    Founder Insight
                  </Badge>
                  <h3 className="text-2xl font-semibold leading-tight transition-colors group-hover:text-primary md:text-3xl">
                    {founderPost.metadata.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
                    {founderPost.metadata.excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <Avatar className="h-12 w-12 ring-1 ring-border/60">
                      <AvatarImage src={founderAvatar?.imageUrl} />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">
                        {founderPost.metadata.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Founder, Praverse Tech
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection className="pb-20 md:pb-28" staggerChildren={0.12}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {otherPosts.length > 0 ? (
                otherPosts.map((post) => {
                  const image = PlaceHolderImages.find(
                    (p) => p.id === post.metadata.image,
                  );
                  return (
                    <AnimatedItem key={post.slug}>
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <Card className="flex flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl md:flex-row">
                          {image && (
                            <div className="relative h-48 w-full md:h-auto md:w-1/3">
                              <Image
                                src={image.imageUrl}
                                alt={post.metadata.title}
                                fill
                                loading="eager"
                                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                data-ai-hint={image.imageHint}
                              />
                            </div>
                          )}
                          <div className="md:w-2/3">
                            <CardHeader className="pb-4">
                              <div className="mb-2 flex gap-2">
                                {post.metadata.tags &&
                                  post.metadata.tags.map((tag) => (
                                    <Badge
                                      key={tag}
                                      className="bg-primary/10 text-primary ring-1 ring-primary/20"
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                              </div>
                              <CardTitle className="text-xl leading-tight transition-colors group-hover:text-primary">
                                {post.metadata.title}
                              </CardTitle>
                              <CardDescription className="text-sm leading-7 md:text-base">
                                {post.metadata.excerpt}
                              </CardDescription>
                            </CardHeader>
                            <CardFooter className="flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
                              <div className="flex flex-wrap items-center gap-4">
                                <span className="flex items-center gap-1.5">
                                  <Calendar className="h-3.5 w-3.5" />
                                  {new Date(
                                    post.metadata.date,
                                  ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <Clock className="h-3.5 w-3.5" />
                                  {post.readingTime}
                                </span>
                              </div>
                              <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                                Read More{" "}
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                              </span>
                            </CardFooter>
                          </div>
                        </Card>
                      </Link>
                    </AnimatedItem>
                  );
                })
              ) : (
                <AnimatedItem>
                  <Card className="rounded-[28px] border-border/60 bg-muted/30">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        More insights are on the way
                      </CardTitle>
                      <CardDescription>
                        Founder notes are live now. Additional articles on
                        healthcare AI, pharma workflows, and industrial
                        intelligence will appear here as they are published.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </AnimatedItem>
              )}
            </div>
            <AnimatedItem className="lg:col-span-1 space-y-8">
              <BlogIdeasGenerator />
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
