import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Vision } from '@/components/home/Vision';
import { Domains } from '@/components/home/Domains';
import { getBlogPosts, getFounderPost, type Post } from '@/lib/blog';
import { InnovationTimeline } from '@/components/home/InnovationTimeline';
import { ResearchPublications } from '@/components/home/ResearchPublications';
import { Collaborations } from '@/components/home/Collaborations';
import { AILabsShowcase } from '@/components/home/AILabsShowcase';
import { MachineLearningShowcase } from '@/components/home/MachineLearningShowcase';
import { Insights } from '@/components/home/Insights';
import { WhyPraverse } from '@/components/home/WhyPraverse';
import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
  title: "AI Products for Healthcare, Pharma, and Industrial Intelligence",
  description:
    "Praverse Tech builds AI products and applied intelligent systems for healthcare, pharma, and industrial intelligence teams.",
  path: "/",
});

export default function Home() {
  const posts = getBlogPosts();
  const founderPost = getFounderPost();
  const otherPosts: Post[] = posts
    .filter((post) => post.slug !== founderPost?.slug)
    .slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <Hero />
        <Vision />
        <WhyPraverse />
        <Domains />
        <MachineLearningShowcase />
        <AILabsShowcase />
        <Insights founderPost={founderPost} otherPosts={otherPosts} />
        <ResearchPublications />
        <InnovationTimeline />
        <Collaborations />
      </main>
    </div>
  );
}
