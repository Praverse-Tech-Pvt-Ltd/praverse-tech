
import { HealthMateHero } from "@/components/healthmate/HealthMateHero";
import { ValueProps } from "@/components/healthmate/ValueProps";
import { Timeline } from "@/components/healthmate/Timeline";
import { PressCTA } from "@/components/healthmate/PressCTA";
import { FAQ } from "@/components/healthmate/FAQ";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";
import { MENNIE_FULL_NAME, MENNIE_NAME } from "@/lib/mennie";

export const metadata: Metadata = createPageMetadata({
  title: MENNIE_NAME,
  description:
    `${MENNIE_NAME} (${MENNIE_FULL_NAME}) is Praverse Tech's in-development care intelligence program for healthcare and institutional environments.`,
  path: "/healthmate",
  noIndex: true,
});

export const dynamic = 'force-dynamic';


export default function HealthmatePage() {
  return (
    <div className="bg-background text-foreground">
      <HealthMateHero />
      <ValueProps />
      <Timeline />
      <PressCTA />
      <FAQ />
    </div>
  );
}
