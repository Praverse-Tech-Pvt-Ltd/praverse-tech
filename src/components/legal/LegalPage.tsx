import Link from "next/link";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Badge } from "@/components/ui/badge";

type RelatedLink = {
  href: string;
  label: string;
};

type LegalSection = {
  id: string;
  label: string;
};

type LegalPageProps = {
  title: string;
  description: string;
  lastUpdated: string;
  relatedLinks: RelatedLink[];
  sections?: LegalSection[];
  eyebrow?: string;
  children: React.ReactNode;
};

export function LegalPage({
  title,
  description,
  lastUpdated,
  relatedLinks,
  sections = [],
  eyebrow = "Legal & Policy",
  children,
}: LegalPageProps) {
  return (
    <AnimatedSection className="relative overflow-hidden bg-background section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(57,187,166,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),transparent_32%)]" />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <header className="overflow-hidden rounded-[32px] border border-border/60 bg-card/55 p-8 shadow-2xl backdrop-blur-xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
            <div>
              <Badge className="mb-4 bg-primary/15 text-primary ring-1 ring-primary/25">
                {eyebrow}
              </Badge>
              <h1 className="prose-heading max-w-4xl">{title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                {description}
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/55 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/85">
                Last updated
              </p>
              <p className="mt-3 text-sm text-foreground/90">{lastUpdated}</p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/85">
                  Related pages
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-border/60 bg-muted/45 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/35 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-[28px] border border-border/60 bg-muted/35 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/85">
                On this page
              </p>
              {sections.length > 0 ? (
                <nav className="mt-5 space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block rounded-2xl border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-border/60 hover:bg-background/40 hover:text-foreground"
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              ) : (
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Review the sections below for the policy details, contact
                  routes, and applicable terms.
                </p>
              )}
            </div>
          </aside>

          <main className="rounded-[32px] border border-border/60 bg-card/45 p-6 shadow-xl backdrop-blur-sm md:p-10">
            <div className="prose prose-invert max-w-none prose-headings:font-headline prose-headings:tracking-tight prose-headings:text-foreground prose-h2:mt-12 prose-h2:border-b prose-h2:border-border/45 prose-h2:pb-4 prose-h3:mt-8 prose-p:max-w-none prose-p:text-foreground/82 prose-p:leading-8 prose-a:text-primary prose-a:no-underline prose-a:transition-colors hover:prose-a:text-primary/80 prose-strong:text-foreground prose-ul:pl-5 prose-ul:text-foreground/80 prose-ol:pl-5 prose-ol:text-foreground/80 prose-li:my-2 prose-li:marker:text-primary prose-blockquote:border-l-primary prose-blockquote:bg-muted/40 prose-blockquote:px-5 prose-blockquote:py-4 prose-blockquote:text-foreground/78">
              {children}
            </div>
          </main>
        </div>
      </div>
    </AnimatedSection>
  );
}
