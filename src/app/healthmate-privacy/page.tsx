import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import {
  COMPANY_EMAIL,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  LEGAL_LAST_UPDATED,
  createPageMetadata,
} from "@/lib/site";
import {
  MENNIE_LEGAL_LABEL,
  MENNIE_NAME,
} from "@/lib/mennie";

export const metadata = createPageMetadata({
  title: `${MENNIE_NAME} Privacy Policy`,
  description:
    `Privacy terms covering ${MENNIE_NAME} waitlist, briefing, and media request submissions.`,
  path: "/healthmate-privacy",
  noIndex: true,
});

export default function HealthmatePrivacyPage() {
  return (
    <LegalPage
      title={`${MENNIE_NAME} Privacy Policy`}
      description={`This policy applies to information submitted through ${MENNIE_NAME} waitlist, briefing, and media request workflows during pre-release and pilot phases.`}
      lastUpdated={LEGAL_LAST_UPDATED}
      eyebrow={`${MENNIE_NAME} Privacy`}
      sections={[
        { id: "intro", label: "Scope" },
        { id: "collection", label: "Data We Collect" },
        { id: "use", label: "How We Use Information" },
        { id: "sharing", label: "Sharing and Confidentiality" },
        { id: "retention", label: "Retention" },
        { id: "contact", label: "Contact" },
      ]}
      relatedLinks={[
        { href: "/healthmate-terms", label: MENNIE_LEGAL_LABEL },
        { href: "/healthmate", label: MENNIE_NAME },
      ]}
    >
      <h2 id="intro">1. Scope</h2>
      <p>
        {MENNIE_NAME} is a Praverse Tech initiative currently operating in
        pre-release and evaluation phases. This policy covers information
        submitted through {MENNIE_NAME}-specific website forms.
      </p>

      <h2 id="collection">2. Data We Collect</h2>
      <ul>
        <li>Waitlist details such as name, email, organization, role, and use case.</li>
        <li>Briefing requests including organizational and website information.</li>
        <li>Media or press requests related to {MENNIE_NAME} communications.</li>
      </ul>

      <h2 id="use">3. How We Use Information</h2>
      <ul>
        <li>To manage launch communications and product interest.</li>
        <li>To evaluate pilot, research, partnership, or press requests.</li>
        <li>To coordinate pre-release discussions with approved parties.</li>
      </ul>

      <h2 id="sharing">4. Sharing and Confidentiality</h2>
      <p>
        We do not sell {MENNIE_NAME} inquiry data. Access is limited to personnel
        and service providers supporting pre-release operations, review, and
        communication.
      </p>

      <h2 id="retention">5. Retention</h2>
      <p>
        We retain {MENNIE_NAME} request data for as long as reasonably necessary to
        manage pre-release communications, evaluations, and legal or
        operational obligations.
      </p>

      <h2 id="contact">6. Contact</h2>
      <p>
        For {MENNIE_NAME} privacy questions, contact{" "}
        <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a> or call{" "}
        <a href={COMPANY_PHONE_TEL}>{COMPANY_PHONE_DISPLAY}</a>. You can also
        review the main <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
