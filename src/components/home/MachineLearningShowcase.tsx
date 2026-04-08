'use client';

import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { CheckCircle, Database, Layers, BrainCircuit, Bot, Network } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { ProximityText } from '@/components/ui/ProximityText';

const pipelineSteps = [
  { name: 'Data', icon: <Database className="w-8 h-8" /> },
  { name: 'Feature Eng.', icon: <Layers className="w-8 h-8" /> },
  { name: 'Training', icon: <BrainCircuit className="w-8 h-8" /> },
  { name: 'Evaluation', icon: <Bot className="w-8 h-8" /> },
  { name: 'Deployment', icon: <Network className="w-8 h-8" /> },
];

export function MachineLearningShowcase() {
  return (
    <AnimatedSection className="section-padding bg-background" staggerChildren={0.2}>
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <AnimatedItem direction="left" className="space-y-6 lg:space-y-8">
            <h2 className="prose-heading">Applied AI Systems</h2>
            <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
              <ProximityText>
                From clinical support to regulated automation and industrial
                intelligence, we design AI systems with a path toward
                production use, governance, and measurable outcomes.
              </ProximityText>
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm md:text-base leading-relaxed">
                  <ProximityText>
                    End-to-end lifecycle coverage from data pipelines and
                    modeling to validation and deployment planning.
                  </ProximityText>
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm md:text-base leading-relaxed">
                  <ProximityText>
                    Computer vision and multimodal workflows for healthcare,
                    imaging, and precision monitoring use cases.
                  </ProximityText>
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm md:text-base leading-relaxed">
                  <ProximityText>
                    Language systems for regulatory documents, assistants,
                    triage workflows, and guided decisions.
                  </ProximityText>
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm md:text-base leading-relaxed">
                  <ProximityText>
                    Deployment-minded engineering with monitoring, change
                    control, and performance oversight for live systems.
                  </ProximityText>
                </span>
              </li>
            </ul>
          </AnimatedItem>
          <AnimatedItem direction="right">
            <Card className="border-border/60 bg-card/50 p-8 shadow-lg backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="mb-6 text-center text-lg font-semibold">
                  Production AI Delivery Flow
                </h3>
                <div className="relative flex flex-wrap items-center justify-between gap-6">
                  {pipelineSteps.map((step, index) => (
                    <AnimatedItem
                      key={step.name}
                      className="group z-10 flex flex-col items-center gap-3"
                      delay={index * 0.1}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary shadow-sm ring-1 ring-primary/10">
                        {step.icon}
                      </div>
                      <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        {step.name}
                      </span>
                    </AnimatedItem>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    Healthcare
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    Pharma
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    Industrial
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    Explainable AI
                  </span>
                </div>
              </CardContent>
            </Card>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
