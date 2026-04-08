import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BrainCircuit, Factory, FlaskConical, HeartPulse, ShieldCheck, Workflow } from "lucide-react";
import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/common/AnimatedSection";
import { createPageMetadata } from "@/lib/site";

const heroImage = PlaceHolderImages.find((p) => p.id === "about-mission");

const focusAreas = [
  {
    icon: <HeartPulse className="h-7 w-7 text-primary" />,
    title: "Healthcare AI Products",
    description:
      "Clinical support, care workflows, and intelligent systems designed for high-context healthcare environments.",
  },
  {
    icon: <FlaskConical className="h-7 w-7 text-primary" />,
    title: "Pharma & Regulatory Intelligence",
    description:
      "Applied AI for regulatory operations, quality workflows, document intelligence, and compliance-oriented decision support.",
  },
  {
    icon: <Factory className="h-7 w-7 text-primary" />,
    title: "Industrial Intelligence",
    description:
      "Edge-aware sensing, computer vision, and operational AI programs for monitored, real-world deployment settings.",
  },
];

const differentiators = [
  {
    icon: <Workflow className="h-7 w-7 text-primary" />,
    title: "Product Thinking, Not Just Models",
    description:
      "We scope around the full workflow: the operator, the data, the governance layer, and the deployment path.",
  },
  {
    icon: <BrainCircuit className="h-7 w-7 text-primary" />,
    title: "Research-Backed Execution",
    description:
      "Our work is informed by hands-on research, experimentation, and real product constraints rather than slideware alone.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-primary" />,
    title: "Trustworthy by Design",
    description:
      "Explainability, privacy, traceability, and operational accountability are built into the way we design systems.",
  },
];

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn how Praverse Tech builds applied AI products for healthcare, pharma, and industrial intelligence programs.",
  path: "/about",
  image: "/placeholders/about-mission.png",
});

export default function AboutPage() {
  return (
    <div>
      <AnimatedSection
        className="relative bg-muted section-padding-sm"
        amount={0.5}
      >
        <div className="container text-center">
          <AnimatedItem direction="up" className="inline-flex justify-center">
            <Badge className="mb-4">About Praverse Tech</Badge>
          </AnimatedItem>
          <AnimatedItem direction="up" delay={0.1}>
            <h1 className="prose-heading">
              Applied intelligence for teams working in complex environments.
            </h1>
          </AnimatedItem>
          <AnimatedItem direction="up" delay={0.2}>
            <p className="mt-6 mx-auto max-w-3xl text-base text-muted-foreground md:text-lg leading-relaxed">
              Praverse Tech is a founder-led deep-tech company building AI
              products and applied intelligent systems for healthcare, pharma,
              and industrial intelligence.
            </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding" staggerChildren={0.2}>
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
            <AnimatedItem direction="left" className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h2 className="prose-heading">Who We Are</h2>
                <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
                  We work at the intersection of AI product design, domain
                  understanding, and deployment readiness. Our focus is on
                  building systems that can move from concept to real operating
                  environments without losing rigor.
                </p>
                <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
                  Founder-led by Pratham Shrivastav, Praverse Tech brings
                  together applied AI thinking, healthcare innovation, and a
                  long-horizon R&D mindset while staying grounded in what teams
                  can use today.
                </p>
              </div>
              <Card className="border-border/60 bg-card/60 p-6 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  What We Build
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Decision-support products, regulated AI workflows, healthcare
                  intelligence programs, and industrial systems designed for
                  trust, traceability, and measurable adoption.
                </p>
              </Card>
            </AnimatedItem>
            <AnimatedItem
              direction="right"
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/60 shadow-2xl"
            >
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 90vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-muted section-padding" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="prose-heading">Our Focus</h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              We prioritize sectors where accuracy, trust, and deployment
              discipline matter as much as technical ambition.
            </p>
          </AnimatedItem>
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <AnimatedItem key={area.title}>
                <Card className="h-full border-border/60 bg-background/80 p-6 shadow-sm card-hover-lift">
                  <div className="mb-4 w-fit rounded-lg bg-primary/10 p-3 ring-1 ring-primary/20">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {area.description}
                  </p>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="prose-heading">What Differentiates Praverse</h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              We balance premium R&D ambition with the practical needs of
              organizations that need systems to work in production.
            </p>
          </AnimatedItem>
          <div className="grid gap-6 lg:grid-cols-3">
            {differentiators.map((item) => (
              <AnimatedItem key={item.title}>
                <Card className="h-full border-border/60 bg-card/70 p-6 backdrop-blur-sm">
                  <div className="mb-4 w-fit rounded-lg bg-primary/10 p-3 ring-1 ring-primary/20">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.description}
                  </p>
                </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
