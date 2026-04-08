"use client";

import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/common/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { RESEARCH_PROGRAMS } from "@/lib/data";
import { ProximityText } from "@/components/ui/ProximityText";

export function AILabsShowcase() {
  return (
    <AnimatedSection
      className="section-padding bg-muted"
      staggerChildren={0.16}
      amount={0.3}
    >
      <div className="container">
        <AnimatedItem className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/20 bg-primary/5 text-primary"
          >
            Research and Future Programs
          </Badge>
          <h2 className="prose-heading">R&amp;D and exploratory initiatives</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <ProximityText>
              These programs reflect our longer-horizon deep-tech direction.
              They are intentionally separated from current commercial offerings
              so first-time visitors can distinguish active work from
              exploratory research.
            </ProximityText>
          </p>
        </AnimatedItem>

        <div className="grid gap-6 lg:grid-cols-3">
          {RESEARCH_PROGRAMS.map((program) => (
            <AnimatedItem key={program.title} className="h-full">
              <Card className="h-full border-border/60 bg-background/80 shadow-lg backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded-lg bg-primary/10 p-3 ring-1 ring-primary/20">
                      <program.icon className={`h-6 w-6 ${program.color}`} />
                    </div>
                    <Badge variant="secondary">{program.status}</Badge>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
