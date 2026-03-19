
'use client';
import * as React from 'react';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PUBLICATIONS } from '@/lib/data';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ProximityText } from '@/components/ui/ProximityText';
import { BookOpen, ArrowRight } from 'lucide-react';

export function ResearchPublications() {

  return (
    <AnimatedSection className="relative py-24 md:py-32 overflow-hidden" staggerChildren={0.12}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute top-1/2 left-1/4 -z-10 w-96 h-96 bg-primary/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50" />

      <div className="container relative z-10">
        <AnimatedItem className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 text-primary">
            Publications
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Research & Publications
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            <ProximityText>We are committed to advancing the field through peer-reviewed research and rigorous innovation.</ProximityText>
          </p>
        </AnimatedItem>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {PUBLICATIONS.map((pub, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <AnimatedItem delay={index * 0.1} className="h-full">
                  <Card className="group relative flex h-full flex-col overflow-hidden border-border/40 bg-background/40 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute -right-20 -top-20 z-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-transform duration-500 group-hover:scale-150" />
                    
                    <CardHeader className="relative z-10 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-secondary/50 backdrop-blur-sm border-white/10">{pub.badge}</Badge>
                        <span className="flex items-center text-sm font-medium text-muted-foreground">
                          {pub.year}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-primary line-clamp-2">
                        {pub.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-3 text-sm font-medium text-primary/80">
                        <BookOpen className="h-4 w-4 shrink-0" />
                        <span className="truncate">{pub.venue}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 flex-grow pt-0">
                      <CardDescription className="line-clamp-4 text-base leading-relaxed">
                        {pub.abstract}
                      </CardDescription>
                    </CardContent>
                    
                    <CardFooter className="relative z-10 pt-4 border-t border-border/10 mt-auto">
                      <Button variant="ghost" className="w-full group/btn justify-between hover:bg-primary/5 hover:text-primary px-4">
                        <span>Read Abstract</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedItem>
              </CarouselItem>
            )
            )}
          </CarouselContent>
          
          <div className="flex items-center justify-center gap-4 mt-12 lg:mt-16">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 border-border/40 bg-background/50 hover:bg-primary hover:text-primary-foreground backdrop-blur-sm transition-colors" />
            <CarouselNext className="static translate-y-0 h-12 w-12 border-border/40 bg-background/50 hover:bg-primary hover:text-primary-foreground backdrop-blur-sm transition-colors" />
          </div>
        </Carousel>
      </div>
    </AnimatedSection>
  );
}
