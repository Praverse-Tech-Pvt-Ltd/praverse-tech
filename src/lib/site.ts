import type { Metadata } from "next";

export const SITE_NAME = "Praverse Tech";
export const COMPANY_LEGAL_NAME = "Praverse Tech Pvt Ltd";
export const SITE_URL = "https://www.praversetech.com";
export const CANONICAL_HOST = "www.praversetech.com";
export const NON_CANONICAL_HOST = "praversetech.com";

export const INQUIRY_EMAIL = "inquiry@praversetech.com";
export const COMPANY_EMAIL = INQUIRY_EMAIL;
export const COMPANY_PHONE_DISPLAY = "+91 9313247264";
export const COMPANY_PHONE_E164 = "+919313247264";
export const COMPANY_PHONE_TEL = `tel:${COMPANY_PHONE_E164}`;
export const COMPANY_CITY = "Vadodara, Gujarat, India";
export const COMPANY_ADDRESS = "Tower 2 - 413 & 420, Prince Cube, Nayaran Garden, Gotri, Vadodara, Gujarat, India";

export const LEGAL_LAST_UPDATED = "April 8, 2026";
export const DEFAULT_OG_IMAGE = "/placeholders/home-hero-bg.png";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          noimageindex: true,
        }
      : undefined,
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_LEGAL_NAME,
  url: SITE_URL,
  email: INQUIRY_EMAIL,
  telephone: COMPANY_PHONE_E164,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tower 2 - 413 & 420, Prince Cube, Nayaran Garden, Gotri",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/in/pratham-shrivastav-b81180251/"],
};
