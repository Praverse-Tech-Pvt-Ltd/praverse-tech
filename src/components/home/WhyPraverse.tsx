
'use client'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WHY_PRAVERSE } from '@/lib/data';
import { BrainCircuit, FlaskConical, HeartPulse, ShieldCheck, Workflow } from 'lucide-react';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

const icons = [Workflow, FlaskConical, BrainCircuit, ShieldCheck, HeartPulse];

export function WhyPraverse() {
  return (
    <AnimatedSection className="py-20 md:py-28 bg-muted" staggerChildren={0.12}>
      <div className="container">
        <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Praverse?</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
                Why teams work with us when the problem demands product thinking, research depth, and deployment realism.
            </p>
        </AnimatedItem>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {WHY_PRAVERSE.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <AnimatedItem key={item.title}>
                <Card className="h-full text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                            <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardDescription className="px-6 pb-6 text-sm text-muted-foreground md:text-base">
                        {item.description}
                    </CardDescription>
                </Card>
              </AnimatedItem>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
