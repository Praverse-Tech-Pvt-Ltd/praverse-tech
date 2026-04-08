import type { Metadata } from "next";
import { FinanceManagementIndustry } from "@/components/industries/FinanceManagementIndustry";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Finance Management Solutions",
  description:
    "Secure, audit-ready finance automation for budgeting, invoicing, reconciliation, and MIS reporting.",
  path: "/industries/finance-management",
});

export default function FinanceManagementPage() {
  return <FinanceManagementIndustry />;
}
