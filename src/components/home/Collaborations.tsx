'use client';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Lightbulb, Handshake, BrainCircuit, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { ProximityText } from '@/components/ui/ProximityText';
import { Badge } from '../ui/badge';

const collaborationItems = [
    {
        icon: Lightbulb,
        title: 'Pitch Your Concept',
        description: 'Turn your idea into a structured proposal. We review every high-potential pitch personally.',
        buttonText: 'Submit Your Idea',
        href: '/innovate'
    },
    {
        icon: Handshake,
        title: 'Co-build & Innovate',
        description: 'Partner with Praverse Tech to co-develop AI/ML models, software tools, or healthcare innovations.',
        buttonText: 'Collaborate',
        href: '/innovate'
    },
    {
        icon: BrainCircuit,
        title: 'Technical Direction',
        description: 'Get direction, prototype support, architectural guidance, and help in taking your idea to market.',
        buttonText: 'Get Mentored',
        href: '/innovate'
    }
];

export function Collaborations() {
    return (
        <AnimatedSection className="relative py-24 md:py-32 overflow-hidden border-t border-border/10" staggerChildren={0.14}>
            {/* Minimal Background Gradients for depth */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
            <div className="absolute top-1/4 right-0 -z-10 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen opacity-50" />

            <div className="container relative z-10">
                <AnimatedItem className="mx-auto mb-20 max-w-4xl text-center">
                    <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary tracking-widest uppercase">
                        Innovate With Us
                    </Badge>
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-8">
                        <span className="text-foreground">Pitch Your Idea.</span><br/>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary">Build With Us.</span><br/>
                        <span className="text-muted-foreground/80">Change the Future.</span>
                    </h2>
                    <p className="mt-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
                        <ProximityText>We collaborate with innovators, students, researchers, and early-stage founders to turn breakthrough concepts into real-world products. If you have an idea in AI, healthcare, robotics, software, or emerging tech — let’s make it happen together.</ProximityText>
                    </p>
                </AnimatedItem>

                <div className="grid gap-8 md:grid-cols-3 relative mt-12">
                    {/* Connecting line behind cards on desktop */}
                    <div className="hidden md:block absolute top-[15%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />

                    {collaborationItems.map((item, index) => (
                        <AnimatedItem
                            key={item.title}
                            delay={index * 0.15}
                            className="h-full"
                        >
                            <Card className="group relative flex h-full flex-col border-border/40 bg-background/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                
                                <CardHeader className="relative z-10 text-center pb-2 pt-10">
                                    <div className="mx-auto mb-6 relative group-hover:scale-110 transition-transform duration-500">
                                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 shadow-inner">
                                            <item.icon className="h-10 w-10 text-primary transition-colors duration-500" />
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{item.title}</CardTitle>
                                </CardHeader>
                                
                                <CardContent className="relative z-10 flex-grow text-center px-6 pb-8">
                                    <p className="text-muted-foreground text-base leading-relaxed">
                                        <ProximityText>{item.description}</ProximityText>
                                    </p>
                                </CardContent>
                                
                                <div className="relative z-10 p-6 pt-0 mt-auto">
                                    <Button asChild variant="ghost" className="w-full group/btn border border-border/40 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-300">
                                        <Link href={item.href}>
                                            {item.buttonText}
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </Card>
                        </AnimatedItem>
                    ))}
                </div>

                <AnimatedItem className="mt-24 max-w-5xl mx-auto">
                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 dark:bg-black/60 backdrop-blur-2xl p-10 md:p-16 text-center shadow-2xl">
                        {/* Animated Glow Effect */}
                        <div className="absolute -inset-[100%] z-0 rounded-full bg-gradient-to-r from-primary/30 via-cyan-500/20 to-violet-500/30 opacity-40 blur-[100px] animate-[spin_20s_linear_infinite]" style={{ pointerEvents: 'none' }} />
                        
                        {/* Inner Bezel */}
                        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl" style={{ pointerEvents: 'none' }} />
                        
                        <div className="relative z-10 flex flex-col items-center">
                            <Sparkles className="h-12 w-12 text-primary mb-6 drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
                                Have a game-changing idea?<br/>
                                <span className="text-white/70">Let’s bring it to life.</span>
                            </h3>
                            <Button asChild size="lg" className="mt-4 rounded-full px-8 py-6 text-lg shadow-[0_0_40px_-10px_rgba(var(--primary),0.8)] hover:shadow-[0_0_60px_-15px_rgba(var(--primary),1)] transition-all duration-500 hover:-translate-y-1">
                                <Link href="/innovate">
                                    Start Your Pitch 
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </AnimatedItem>
            </div>
        </AnimatedSection>
    );
}
