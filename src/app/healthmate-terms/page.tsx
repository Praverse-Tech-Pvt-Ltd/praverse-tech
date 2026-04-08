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
  title: MENNIE_LEGAL_LABEL,
  description:
    `Terms covering ${MENNIE_NAME} access requests, pre-release materials, and pilot-stage interactions.`,
  path: "/healthmate-terms",
  noIndex: true,
});

export default function HealthmateTermsPage() {
  return (
    <LegalPage
      title={MENNIE_LEGAL_LABEL}
      description={`These terms apply to access requests, pilot-stage materials, and pre-release interactions relating to ${MENNIE_NAME}.`}
      lastUpdated={LEGAL_LAST_UPDATED}
      eyebrow={`${MENNIE_NAME} Terms`}
      sections={[
        { id: "intro", label: "Pre-Release Status" },
        { id: "access", label: "Access Requests" },
        { id: "confidentiality", label: "Confidential Materials" },
        { id: "ip", label: "Intellectual Property" },
        { id: "disclaimer", label: "No Warranty" },
        { id: "contact", label: "Contact" },
      ]}
      relatedLinks={[
        { href: "/healthmate-privacy", label: `${MENNIE_NAME} Privacy Policy` },
        { href: "/healthmate", label: MENNIE_NAME },
      ]}
    >
      <h2 id="intro">1. Pre-Release Status</h2>
      <p>
        {MENNIE_NAME} is currently presented for evaluation, waitlist, and
        limited-access briefing purposes. Public availability, product scope,
        and deployment timelines may change.
      </p>

      <h2 id="access">2. Access Requests</h2>
      <p>
        Submission of a waitlist or briefing form does not guarantee product
        access, partnership status, or pilot participation. Praverse Tech may
        accept, defer, or decline requests at its discretion.
      </p>

      <h2 id="confidentiality">3. Confidential Materials</h2>
      <p>
        Any pre-release or briefing material shared by Praverse Tech may be
        confidential and may be subject to additional non-disclosure terms
        before detailed discussions proceed.
      </p>

      <h2 id="ip">4. Intellectual Property</h2>
      <p>
        {MENNIE_NAME} and related materials remain the property of Praverse Tech
        Pvt Ltd unless otherwise agreed in writing.
      </p>

      <h2 id="disclaimer">5. No Warranty</h2>
      <p>
        {MENNIE_NAME} pre-release materials and demonstrations are provided
        without warranty and may evolve materially before any broader launch or
        deployment.
      </p>

      <h2 id="contact">6. Contact</h2>
      <p>
        Questions about {MENNIE_NAME} terms can be sent to{" "}
        <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a> or by phone at{" "}
        <a href={COMPANY_PHONE_TEL}>{COMPANY_PHONE_DISPLAY}</a>. You can also
        review the main <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
