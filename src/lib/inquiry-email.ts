import nodemailer from "nodemailer";
import {
  COMPANY_LEGAL_NAME,
  INQUIRY_EMAIL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export type InquiryPayload = {
  name: string;
  email: string;
  company?: string;
  interest?: string;
  message: string;
};

let cachedTransporter: nodemailer.Transporter | null = null;

function parseBoolean(value: string | undefined, fallback: boolean) {
  if (value == null) return fallback;
  return value.toLowerCase() === "true";
}

function getInquiryTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT
    ? Number.parseInt(process.env.SMTP_PORT, 10)
    : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass || Number.isNaN(port)) {
    return null;
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: parseBoolean(process.env.SMTP_SECURE, port === 465),
    auth: {
      user,
      pass,
    },
  });

  return cachedTransporter;
}

export function isInquiryEmailConfigured() {
  return Boolean(getInquiryTransporter() && process.env.SMTP_FROM);
}

function formatField(label: string, value?: string) {
  return `${label}: ${value?.trim() ? value.trim() : "Not provided"}`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendInquiryEmail(payload: InquiryPayload) {
  const transporter = getInquiryTransporter();
  const from = process.env.SMTP_FROM;

  if (!transporter || !from) {
    throw new Error("Inquiry email transport is not configured.");
  }

  const normalizedCompany = payload.company?.trim() || undefined;
  const normalizedInterest = payload.interest?.trim() || undefined;
  const normalizedMessage = payload.message.trim();
  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeCompany = escapeHtml(normalizedCompany ?? "Not provided");
  const safeInterest = escapeHtml(normalizedInterest ?? "Not provided");
  const safeMessage = escapeHtml(normalizedMessage);

  const text = [
    `New website inquiry submitted on ${SITE_NAME}.`,
    "",
    formatField("Name", payload.name),
    formatField("Email", payload.email),
    formatField("Company", normalizedCompany),
    formatField("Interested In", normalizedInterest),
    "",
    "Message:",
    normalizedMessage,
    "",
    `Sent from ${SITE_URL}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
      <h2 style="margin-bottom:16px;">New Website Inquiry</h2>
      <p>A new inquiry was submitted on ${SITE_NAME}.</p>
      <table style="border-collapse:collapse;margin:16px 0;">
        <tbody>
          <tr><td style="padding:6px 12px 6px 0;font-weight:700;">Name</td><td>${safeName}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:700;">Email</td><td>${safeEmail}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:700;">Company</td><td>${safeCompany}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:700;">Interested In</td><td>${safeInterest}</td></tr>
        </tbody>
      </table>
      <div style="margin-top:20px;">
        <p style="font-weight:700;margin-bottom:8px;">Message</p>
        <p style="white-space:pre-wrap;margin:0;">${safeMessage}</p>
      </div>
      <p style="margin-top:24px;color:#6b7280;">Sent from ${SITE_URL}</p>
    </div>
  `;

  return transporter.sendMail({
    from,
    to: INQUIRY_EMAIL,
    replyTo: payload.email,
    subject: `New Website Inquiry - ${payload.name}`,
    text,
    html,
    headers: {
      "X-Entity-Ref-ID": `${COMPANY_LEGAL_NAME.replace(/\s+/g, "-").toLowerCase()}-website-inquiry`,
    },
  });
}
