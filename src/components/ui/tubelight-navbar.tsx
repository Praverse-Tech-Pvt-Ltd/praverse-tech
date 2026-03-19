
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

interface NavSubItem {
    name: string;
    url: string;
}

interface NavItem {
    name: string
    url: string
    icon?: LucideIcon
    subItems?: NavSubItem[]
}

interface NavBarProps {
    items: NavItem[]
    className?: string
}

export function NavBar({ items, className }: NavBarProps) {
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState(() => {
        if (pathname) {
            for (const item of items) {
                if (item.url === pathname || (item.subItems && item.subItems.some(sub => sub.url === pathname))) {
                    return item.name;
                }
            }
        }
        return items[0].name;
    })
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (!pathname) return;
        for (const item of items) {
            if (item.url === pathname || (item.subItems && item.subItems.some(sub => sub.url === pathname))) {
                setActiveTab(item.name);
                break;
            }
        }
    }, [pathname, items]);

    return (
        <>
            {/* Desktop Navbar */}
            <div
                className={cn(
                    "hidden md:block fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6",
                    className,
                )}
            >
                <div className="flex items-center gap-3 bg-background/5 border border-border/40 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
                    {items.map((item) => {
                        const isActive = activeTab === item.name

                        const content = (
                            <>
                                <span className="inline">{item.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="lamp"
                                        className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    >
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                                            <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                                            <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                                            <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                                        </div>
                                    </motion.div>
                                )}
                            </>
                        );

                        const itemClasses = cn(
                            "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors flex items-center justify-center",
                            "text-foreground/80 hover:text-primary",
                            isActive && "bg-muted text-primary"
                        );

                        if (item.subItems && item.subItems.length > 0) {
                            return (
                                <DropdownMenu key={item.name}>
                                    <DropdownMenuTrigger
                                        onClick={() => setActiveTab(item.name)}
                                        className={itemClasses}
                                    >
                                        {content}
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center" className="w-48 z-[60] bg-background/90 backdrop-blur-lg border-border/50">
                                        {item.subItems.map(sub => (
                                            <DropdownMenuItem key={sub.name} asChild>
                                                <Link href={sub.url} className="w-full cursor-pointer">{sub.name}</Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )
                        }

                        return (
                            <Link
                                key={item.name}
                                href={item.url}
                                onClick={() => setActiveTab(item.name)}
                                className={itemClasses}
                            >
                                {content}
                            </Link>
                        )
                    })}
                </div>
            </div>

            {/* Mobile Sidebar Navbar */}
            <div className="block md:hidden fixed top-4 right-4 z-[100]">
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full bg-background/60 backdrop-blur-md border-border/50 text-foreground hover:bg-background/80 hover:text-primary z-[100]">
                            <HamburgerIcon isOpen={isMobileMenuOpen} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background/95 backdrop-blur-xl border-l-border/30 z-[110]">
                        <SheetHeader className="mb-8">
                            <SheetTitle className="text-left">Navigation</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-6 mt-4">
                            {items.map(item => {
                                if (item.subItems && item.subItems.length > 0) {
                                    return (
                                        <Accordion type="single" collapsible key={item.name} className="w-full">
                                            <AccordionItem value={item.name} className="border-b-0">
                                                <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline py-0">
                                                    {item.name}
                                                </AccordionTrigger>
                                                <AccordionContent className="pb-0 pt-4">
                                                    <div className="flex flex-col gap-3 pl-4 border-l border-border/40">
                                                        {item.subItems.map(sub => (
                                                            <SheetClose asChild key={sub.name}>
                                                                <Link 
                                                                    href={sub.url} 
                                                                    className={cn("text-base transition-colors block py-1", activeTab === item.name && pathname === sub.url ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary")}
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            </SheetClose>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    )
                                }

                                return (
                                    <SheetClose asChild key={item.name}>
                                        <Link 
                                            href={item.url} 
                                            onClick={() => setActiveTab(item.name)}
                                            className={cn(
                                                "text-lg font-bold transition-colors",
                                                activeTab === item.name ? "text-primary" : "text-foreground hover:text-primary"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </SheetClose>
                                )
                            })}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .hamburger-svg {
          height: 1.5rem;
          width: 1.5rem;
          transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hamburger-line {
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 3;
          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .line-top-bottom {
          stroke-dasharray: 12 63;
        }
        .hamburger-svg.open {
          transform: rotate(-45deg);
        }
        .hamburger-svg.open .line-top-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32.42;
        }
      `}} />
      <svg viewBox="0 0 32 32" className={`hamburger-svg ${isOpen ? "open" : ""}`}>
        <path className="hamburger-line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
        <path className="hamburger-line" d="M7 16 27 16" />
      </svg>
    </>
  );
}
