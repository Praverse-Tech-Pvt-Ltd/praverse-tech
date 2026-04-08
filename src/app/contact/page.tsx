import { ContactForm } from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import {
  AnimatedItem,
  AnimatedSection,
} from "@/components/common/AnimatedSection";
import {
  COMPANY_CITY,
  COMPANY_EMAIL,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  createPageMetadata,
} from "@/lib/site";

const heroImage = PlaceHolderImages.find((p) => p.id === "contact-hero");

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Discuss an AI product, applied intelligence program, or partnership opportunity with Praverse Tech.",
  path: "/contact",
  image: "/placeholders/contact-hero.png",
});

export default function ContactPage() {
  return (
    <div>
      <AnimatedSection
        className="relative overflow-hidden bg-muted/35 section-padding-sm"
        amount={0.55}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(57,187,166,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_34%)]" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover opacity-14"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <AnimatedItem direction="up" className="inline-flex justify-center">
              <Badge className="mb-5 bg-primary/15 text-primary ring-1 ring-primary/25">
                Contact Praverse Tech
              </Badge>
            </AnimatedItem>
            <AnimatedItem>
              <h1 className="prose-heading">
              Contact Praverse Tech
              </h1>
            </AnimatedItem>
            <AnimatedItem delay={0.1}>
              <p className="mt-6 mx-auto max-w-3xl text-base text-muted-foreground md:text-lg leading-relaxed">
                Discuss an AI product, request a strategic conversation, or
                reach out about healthcare, pharma, and industrial intelligence
                initiatives. We keep the process direct, credible, and easy to
                act on.
              </p>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding" staggerChildren={0.15}>
        <div className="container">
          <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:gap-12">
            <AnimatedItem className="space-y-6">
              <Card className="rounded-[28px] border-border/60 bg-card/60 p-8 shadow-2xl backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/10 p-3 ring-1 ring-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                      Direct line
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">Contact details</h2>
                  </div>
                </div>
                <p className="text-sm leading-7 text-muted-foreground md:text-base">
                  Reach us for project scoping, partnership discussions, product
                  briefings, or a focused conversation about where Praverse Tech
                  can help.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-border/60 bg-background/45 p-4">
                    <div className="flex items-start gap-4">
                      <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/90">
                          Email
                        </h3>
                        <a
                          href={`mailto:${COMPANY_EMAIL}`}
                          className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-primary md:text-base"
                        >
                          {COMPANY_EMAIL}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-background/45 p-4">
                    <div className="flex items-start gap-4">
                      <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/90">
                          Phone
                        </h3>
                        <a
                          href={COMPANY_PHONE_TEL}
                          className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-primary md:text-base"
                        >
                          {COMPANY_PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-background/45 p-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/90">
                          Location
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                          {COMPANY_CITY}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="rounded-[28px] border-border/60 bg-muted/40 p-6 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                  What to expect
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-3 xl:grid-cols-1">
                  {[
                    "Share your project scope, team context, or current challenge.",
                    "We review submissions directly and follow up using your preferred contact details.",
                    "For sensitive engagements, we can move into a more structured discussion quickly.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border/50 bg-background/40 p-4 text-sm leading-7 text-muted-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedItem>

            <AnimatedItem className="lg:col-span-2">
              <Card className="rounded-[32px] border-border/60 bg-card/65 shadow-2xl backdrop-blur-sm">
                <CardHeader className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="bg-primary/15 text-primary ring-1 ring-primary/25">
                      Discuss a project
                    </Badge>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Secure inquiry channel
                    </span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">
                    Send us a message
                  </CardTitle>
                  <CardDescription className="max-w-2xl text-sm leading-7 md:text-base">
                    Share what you are building or the challenge you want to
                    solve. We will follow up using the details you provide and
                    route it directly to the Praverse inquiry team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
