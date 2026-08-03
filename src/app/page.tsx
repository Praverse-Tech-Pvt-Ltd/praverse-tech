
import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Vision } from '@/components/home/Vision';
import { Domains } from '@/components/home/Domains';
import { getBlogPosts, type Post } from '@/lib/blog';
import { InnovationTimeline } from '@/components/home/InnovationTimeline';
import { ResearchPublications } from '@/components/home/ResearchPublications';
import { Collaborations } from '@/components/home/Collaborations';
import { AILabsShowcase } from '@/components/home/AILabsShowcase';
import { MachineLearningShowcase } from '@/components/home/MachineLearningShowcase';
import { Insights } from '@/components/home/Insights';
import { SpaceTour } from '@/components/home/SpaceTour';
import { NovaGuide } from '@/components/home/NovaGuide';
import { FutureTechEcosystem } from '@/components/home/FutureTechEcosystem';
import { FloatingNova } from '@/components/home/FloatingNova';

export default function Home() {
  const posts = getBlogPosts();
  const founderPost = posts.find(p => p.slug === 'future-of-ai-in-healthcare');
  const otherPosts: Post[] = [];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <Hero />
        <section className="relative bg-slate-950 py-0">
          <div className="container -mt-8 pb-12 md:-mt-14 md:pb-16">
            <NovaGuide
              title="Welcome to the Praverse Universe."
              message="Nova will guide you through the existing Praverse ecosystem: AI, HealthMate, healthcare intelligence, pharma automation, robotics, research, infrastructure, and venture collaboration."
              align="center"
              className="relative z-20 max-w-4xl"
            />
          </div>
        </section>
        <Vision />
        <SpaceTour />
        <FutureTechEcosystem />
        <Domains />
        <MachineLearningShowcase />
        <AILabsShowcase />
        <Insights founderPost={founderPost} otherPosts={otherPosts} />
        <InnovationTimeline />
        <ResearchPublications />
        <Collaborations />
      </main>
      <FloatingNova />
    </div>
  );
}
