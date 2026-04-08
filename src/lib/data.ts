import {
  Atom,
  Cpu,
  FlaskConical,
  Landmark,
  Microscope,
  Orbit,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { MENNIE_NAME } from "@/lib/mennie";

export type DomainItem = {
  title: string;
  description: string;
  href: string | null;
  icon: typeof Atom;
  color: string;
  status: "Available Now" | "In Development" | "Research / Exploratory";
  category: "current" | "research";
};

export const DOMAINS: DomainItem[] = [
  {
    title: "AI for Pharma & Regulatory Operations",
    description:
      "Compliance automation, document intelligence, and response workflows for regulated pharma teams.",
    href: "/pharma-ai",
    icon: FlaskConical,
    color: "text-violet-400",
    status: "Available Now",
    category: "current",
  },
  {
    title: "Healthcare AI Products & Care Intelligence",
    description:
      "Applied AI systems for healthcare workflows, clinical support, and care innovation programs.",
    href: "/healthmate",
    icon: Stethoscope,
    color: "text-cyan-400",
    status: "In Development",
    category: "current",
  },
  {
    title: "Industrial Intelligence & AIoT",
    description:
      "Smart sensing, monitoring, and decision-support systems for industrial operations.",
    href: "/enterprise",
    icon: Cpu,
    color: "text-orange-400",
    status: "Available Now",
    category: "current",
  },
  {
    title: "Computer Vision & Medical Imaging",
    description:
      "High-accuracy vision models and imaging workflows for healthcare and precision inspection use cases.",
    href: "/machine-learning",
    icon: Microscope,
    color: "text-teal-400",
    status: "Available Now",
    category: "current",
  },
  {
    title: "Finance Management Automation",
    description:
      "Audit-ready automation for finance operations, reporting, and trustworthy decision support.",
    href: "/industries/finance-management",
    icon: Landmark,
    color: "text-emerald-400",
    status: "Available Now",
    category: "current",
  },
  {
    title: "Federated & Privacy-Preserving AI",
    description:
      "Deployment patterns for sensitive data environments where privacy, access control, and edge execution matter.",
    href: "/enterprise",
    icon: ShieldCheck,
    color: "text-pink-400",
    status: "In Development",
    category: "current",
  },
  {
    title: "Biochip 2027",
    description:
      "Long-horizon research into bio-inspired sensing, diagnostics, and intelligent biochip platforms.",
    href: null,
    icon: Atom,
    color: "text-blue-400",
    status: "Research / Exploratory",
    category: "research",
  },
  {
    title: "Photonics 2027",
    description:
      "Exploratory work on integrated photonic sensing and optical computing for advanced intelligence systems.",
    href: null,
    icon: Orbit,
    color: "text-indigo-400",
    status: "Research / Exploratory",
    category: "research",
  },
  {
    title: "Cognitive Ecosystem Programs",
    description:
      "Future-facing research into interoperable AI systems for sensing, coordination, and adaptive decision-making.",
    href: null,
    icon: Cpu,
    color: "text-sky-400",
    status: "Research / Exploratory",
    category: "research",
  },
];

export const CURRENT_OFFERINGS = DOMAINS.filter(
  (domain) => domain.category === "current",
);

export const RESEARCH_PROGRAMS = DOMAINS.filter(
  (domain) => domain.category === "research",
);

export const FEATURED_PROJECTS = [
  {
    title: MENNIE_NAME,
    description: "Private beta product program",
    imageId: "project-healthmate",
  },
  {
    title: "FDA 483 Response Automation",
    description: "Applied workflow for regulated teams",
    imageId: "project-fda",
  },
  {
    title: "Cognitive Robot Simulation",
    description: "Digital twin and training environment",
    imageId: "project-robotics",
  },
  {
    title: "Federated Learning for Wearables",
    description: "Privacy-preserving research collaboration",
    imageId: "project-federated",
  },
  {
    title: "Smart EHR Assistant",
    description: "Clinical workflow prototype",
    imageId: "project-ehr",
  },
];

export const TIMELINE = [
  {
    year: "2023",
    event: "Netra Sakhi Virtual Assistant",
    description:
      "Launched an NLP-assisted screening workflow focused on ophthalmic outreach and triage support.",
  },
  {
    year: "2024",
    event: "PCOS Detection Pipeline",
    description:
      "Developed multimodal computer vision and health-data workflows for earlier clinical signal detection research.",
  },
  {
    year: "2025",
    event: `${MENNIE_NAME} and Intel Collaboration`,
    description:
      "Advanced our assistive robotics roadmap and strategic collaboration efforts around AI-enabled care systems.",
  },
  {
    year: "2026",
    event: "Biochip Intelligence Research",
    description:
      "Expanded into exploratory R&D on smart sensing and diagnostic intelligence platforms.",
  },
  {
    year: "2027",
    event: "Cognitive Ecosystem Exploration",
    description:
      "Projected focus on broader connected intelligence programs spanning industrial and healthcare settings.",
  },
];

export const PUBLICATIONS = [
  {
    title:
      "Deep Learning for Diabetic Macular Edema (DME) Detection from Fundus Images",
    venue: "IEEE Transactions on Medical Imaging",
    year: "2023",
    abstract:
      "Research on automated DME detection using convolutional neural networks, reporting strong controlled-study performance on fundus images.",
    badge: "IEEE",
  },
  {
    title:
      "Netra Sakhi: An Edge AI System for Ophthalmic Screening in Low-Resource Settings",
    venue: "Scopus Indexed Conference",
    year: "2023",
    abstract:
      "A deployable edge AI screening system designed for ophthalmic use in low-resource settings and outreach environments.",
    badge: "Scopus",
  },
  {
    title:
      "Autonomous Driving Simulation using Neuroevolution of Augmenting Topologies (NEAT)",
    venue: "International Journal of Robotics & Automation",
    year: "2024",
    abstract:
      "Simulation research exploring NEAT-based training approaches for complex autonomous driving environments.",
    badge: "Journal",
  },
];

export const TECH_STACK = [
  "Generative AI x Regulatory Operations",
  "Federated Learning",
  "Robotics Simulation",
  "Synthetic Data Generation",
  "Multimodal AI Pipelines",
  "Explainable AI",
  "Cloud and Edge Orchestration",
  "Biomedical Signal Processing",
  "Digital Twin Systems",
  "Long-horizon R&D",
];

export const WHY_PRAVERSE = [
  {
    title: "Applied AI with Product Discipline",
    description:
      "We design around user workflows, operational constraints, and deployment reality, not just model outputs.",
  },
  {
    title: "Healthcare and Pharma Context",
    description:
      "We focus on sectors where compliance, traceability, and responsible decision support matter from day one.",
  },
  {
    title: "Research-Backed Innovation",
    description:
      "Our work draws from practical experimentation, publications, and long-horizon R&D without losing commercial focus.",
  },
  {
    title: "Deployment Mindset",
    description:
      "We think through integration, validation, monitoring, and governance so systems can move toward production with confidence.",
  },
  {
    title: "Trustworthy Systems",
    description:
      "Explainability, privacy, and human oversight are part of the design brief for every serious implementation.",
  },
];
