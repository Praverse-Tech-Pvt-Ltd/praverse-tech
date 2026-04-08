'use client';

import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowRight, Lightbulb, Microscope, Rocket } from 'lucide-react';
import { Card } from '../ui/card';
import { ProximityText } from '@/components/ui/ProximityText';

const collaborationTracks = [
  {
    icon: Lightbulb,
    title: 'Founder and startup concepts',
    description: 'Early product ideas that need sharper technical direction and a credible path to deployment.',
  },
  {
    icon: Microscope,
    title: 'Research and healthcare innovation',
    description: 'Programs that benefit from applied AI productization, clinical context, or translational R&D thinking.',
  },
  {
    icon: Rocket,
    title: 'Pilot-stage deep-tech builds',
    description: 'Ambitious systems that need a partner comfortable with both experimentation and shipping discipline.',
  },
];

export function Collaborations() {
  return (
    <AnimatedSection className="relative overflow-hidden border-t border-border/10 py-24 md:py-32" staggerChildren={0.14}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 opacity-50 blur-[120px] mix-blend-screen" />

      <div className="container relative z-10">
        <AnimatedItem className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary tracking-widest uppercase">
            Innovate With Us
          </Badge>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            A place for the ideas that need more than a generic software vendor.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            <ProximityText>
              We keep this path secondary on purpose. If you are exploring a
              serious deep-tech concept, use our innovation track and we will
              review whether there is a strong fit to build together.
            </ProximityText>
          </p>
        </AnimatedItem>

        <div className="grid gap-6 lg:grid-cols-3">
          {collaborationTracks.map((item, index) => (
            <AnimatedItem key={item.title} delay={index * 0.1}>
              <Card className="h-full border-border/40 bg-background/50 p-6 backdrop-blur-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/10 bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </Card>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedItem className="mt-14 text-center">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="focus-ring rounded-full px-8">
              <Link href="/innovate">
                Innovate With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full border border-border/40 px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
