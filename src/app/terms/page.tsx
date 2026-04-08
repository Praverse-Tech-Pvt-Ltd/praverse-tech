import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import {
  COMPANY_EMAIL,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  LEGAL_LAST_UPDATED,
  createPageMetadata,
} from "@/lib/site";
import { MENNIE_NAME } from "@/lib/mennie";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Terms governing access to the Praverse Tech website, submissions, and related services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="These Terms govern access to the Praverse Tech website, form submissions, and related interactions with our public-facing services."
      lastUpdated={LEGAL_LAST_UPDATED}
      eyebrow="Website Terms"
      sections={[
        { id: "agreement", label: "Acceptance of Terms" },
        { id: "services", label: "Website Purpose" },
        { id: "submissions", label: "Submissions and Communications" },
        { id: "ip", label: "Intellectual Property" },
        { id: "acceptable-use", label: "Acceptable Use" },
        { id: "disclaimer", label: "No Warranties" },
        { id: "liability", label: "Limitation of Liability" },
        { id: "law", label: "Governing Law" },
        { id: "contact", label: "Contact Us" },
      ]}
      relatedLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/contact", label: "Contact Us" },
      ]}
    >
      <h2 id="agreement">1. Acceptance of Terms</h2>
      <p>
        By accessing or using this website, you agree to these Terms of
        Service. If you do not agree, please do not use the site.
      </p>

      <h2 id="services">2. Website Purpose</h2>
      <p>
        The website provides information about Praverse Tech, its offerings,
        research programs, insights, and product interest workflows. Certain
        forms allow you to submit inquiries, innovation concepts, or {MENNIE_NAME}
        requests for review by our team.
      </p>

      <h2 id="submissions">3. Submissions and Communications</h2>
      <p>
        When you submit information through the website, you agree that the
        information is accurate and that we may contact you in relation to your
        inquiry, request, or submission. Submission of a form does not create a
        partnership, fiduciary relationship, or guarantee of acceptance.
      </p>

      <h2 id="ip">4. Intellectual Property</h2>
      <p>
        Unless otherwise stated, the content, branding, product materials,
        design assets, and software-related materials on this site are owned by
        or licensed to Praverse Tech Pvt Ltd and are protected by applicable
        intellectual property laws.
      </p>

      <h2 id="acceptable-use">5. Acceptable Use</h2>
      <ul>
        <li>You may not misuse the site or attempt unauthorized access.</li>
        <li>You may not submit unlawful, infringing, or deceptive material.</li>
        <li>
          You may not interfere with the operation, security, or availability
          of the website.
        </li>
      </ul>

      <h2 id="disclaimer">6. No Warranties</h2>
      <p>
        The website and its contents are provided on an "as is" and "as
        available" basis. We make reasonable efforts to keep information
        current, but we do not guarantee uninterrupted availability, absolute
        accuracy, or fitness for a particular purpose.
      </p>

      <h2 id="liability">7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Praverse Tech Pvt Ltd is not
        liable for indirect, incidental, or consequential damages arising from
        your use of the site or reliance on its content.
      </p>

      <h2 id="law">8. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India, without regard to
        conflict of law principles.
      </p>

      <h2 id="contact">9. Contact Us</h2>
      <p>
        Questions about these Terms can be sent to{" "}
        <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a> or by phone at{" "}
        <a href={COMPANY_PHONE_TEL}>{COMPANY_PHONE_DISPLAY}</a>. You can also
        use our <Link href="/contact">contact page</Link>.
      </p>
    </LegalPage>
  );
}
