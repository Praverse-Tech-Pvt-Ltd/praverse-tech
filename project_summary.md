# Praverse Tech - Project Functionalities & Architecture Brief

This document provides a comprehensive breakdown of the functionalities implemented in the Praverse Tech Next.js project and details the contents and inner workings of every major page.

## 1. Global Functionalities & Architecture
The project is built using **Next.js (App Router)** with **TypeScript**, **Tailwind CSS**, and **framer-motion** (via `AnimatedSection`/`AnimatedItem` components for scroll animations). 

**Key Implementations:**
*   **Server Actions ([src/app/actions.ts](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts)):** Handles all form submissions securely across the application. It uses `zod` for input validation before processing.
    *   [subscribeToNewsletter](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts#18-35)
    *   [submitContactForm](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts#44-61)
    *   [submitInnovationPitch](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts#79-99)
    *   [submitHealthMateWaitlist](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts#113-130)
    *   [submitNdaBriefingRequest](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts#148-165)
    *   [submitMediaKitRequest](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts#176-193)
    *   [saveBlogIdeasGeneration](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts#199-216)
*   **Component Composition:** Heavy use of reusable UI components (e.g., shadcn/ui components like cards, badges, buttons) for a consistent and premium design language.
*   **Animations:** Pages use `AnimatedSection` and `AnimatedItem` components that leverage `framer-motion` for smooth, staggered load animations when users scroll components into view.

---

## 2. Page-by-Page Breakdown

### Root Layout ([/layout.tsx](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/layout.tsx))
*   **Contains:** The foundational HTML structure including custom fonts (Alegreya, Inter, JetBrains Mono, Ranga), global CSS ([globals.css](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/globals.css)), global `Header` & `Footer`, a toast notification provider (`Toaster`), and a custom `PravProvider` (likely an AI assistant context provider). 
*   **How it Works:** Wraps all pages to enforce a persistent layout (header/footer always visible) and ensures UI states like the dark mode and hydration work correctly smoothly across routes.

### Home Page (`/`)
*   **Contains:** Marketing and introduction sections organized via custom components: `Hero`, `Vision`, [Domains](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/domains/page.tsx#9-73), `MachineLearningShowcase`, `AILabsShowcase`, `Insights`, `InnovationTimeline`, `ResearchPublications`, `Collaborations`, and `Cta`.
*   **How it Works:** Fetches blog posts to feature the founder's post inside the `Insights` section. The page is heavily componentized to keep [page.tsx](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/page.tsx) clean, stacking various visual sections to create a long-scrolling landing experience.

### About Page (`/about`)
*   **Contains:** A "Mission" and "Values" breakdown ("Customer Obsession", "Expertise & Trust", "India-First", "Visionary Pragmatism"). 
*   **How it Works:** Staggers animated text and imagery alongside value cards. Uses `PlaceHolderImages` utility for dynamic image binding to visually represent the company's ethos.

### Contact Page (`/contact`)
*   **Contains:** Contact information (office location, email, phone) and a [ContactForm](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts#44-61) component.
*   **How it Works:** The contact form takes in text inputs. When submitted, the form connects to [actions.ts](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts) ([submitContactForm](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts#44-61)) to securely parse the submission via `zod` and save it to the database (`lib/forms-db`).

### Innovate Page (`/innovate`)
*   **Contains:** A pitch form for potential partners/founders, the "Why Collaborate" value proposition, and a visual process timeline (Submit Idea -> Review -> Collaborate -> Prototype -> Launch). Includes confidentiality assurances.
*   **How it Works:** Utilizes the `InnovateForm` component connecting to [submitInnovationPitch](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts#79-99) server action. Visuals are managed via staggered card animations and a responsive grid layout.

### Enterprise Solutions Page (`/enterprise`)
*   **Contains:** Features highlighting secure, validation-ready AI systems for regulated industries.
*   **How it Works:** Uses `application/ld+json` for injecting SEO-friendly `FAQPage` schema data dynamically into the page header, and mounts an `EnterpriseSolutions` component that drives the actual visual content.

### Domains Overview Page (`/domains`)
*   **Contains:** A grid representing the company's various domains (Pharma AI, Humanoid Robotics, Federated Learning, Vision, Finance Management, etc.).
*   **How it Works:** Iterates over a hardcoded `DOMAINS` array from [src/lib/data.ts](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/lib/data.ts). Renders a grid of cards providing either interactive links (if the domain page exists) or static informational cards (for confidential/upcoming research domains).

### Blog Page (`/blog`)
*   **Contains:** "Founder's Corner" highlighted post, a grid mapping for other posts, and a `BlogIdeasGenerator`.
*   **How it Works:** Calls `getBlogPosts()` to fetch local blog data/markdown files. Maps over posts calculating reading times & metadata tags, and renders blog cards. Includes an interactive `BlogIdeasGenerator` component tied to [saveBlogIdeasGeneration](file:///c:/Users/DEV/Desktop/Nex/PraverseTech/src/app/actions.ts#199-216).

### Careers Page (`/careers`)
*   **Contains:** Why work with us section and mapped job openings (from `JOB_OPENINGS` in `src/lib/careers-data`).
*   **How it Works:** Job cards present the location, type, and brief description, with a CTA that routes prospective applicants to the contact page to submit an application.

---

## 3. Specialized Service & Product Pages

### Machine Learning (`/machine-learning`)
*   **Contains:** Breakdowns of ML Use Cases (Healthcare, Generative AI, Federated, Industrial) and Core ML Principles. Highlights "Trustworthy AI by Design".
*   **How it Works:** Uses a combination of predefined arrays containing lucide-react icons and descriptive metadata mapped to grid-styled Cards, driving home their data-centric, scalable MLOps approach.

### Pharma AI (`/pharma-ai`)
*   **Contains:** Regulatory compliance automation tools (FDA 483 Response Assist, SOP Automation), workflow timeline, and an interactive `FdaResponseGenerator` demo.
*   **How it Works:** Presents the company's GxP workflow features while displaying a disclaimer regarding regulatory environments. The demo component likely interacts with a backend AI service to showcase draft response generation.

### Humanoid Robotics (`/humanoid-robotics`)
*   **Contains:** Introduction to virtual-first robotics methodologies. Features simulation value props and target assistive applications (Manufacturing, Logistics, Healthcare Support).
*   **How it Works:** A heavily visual page blending staggered UI components that highlight edge-tech methodologies like "Physics-Based Simulation". 

### Industrial Robotics (`/industrial-robotics`)
*   **Contains:** Information regarding precision automation, target applications (Pharma Manufacturing, Chemical Processing), and engineering approaches.
*   **How it Works:** Uses static data arrays (`capabilities`, `applications`, `engineeringSteps`) mapped to animated cards to explain their hardware/software integration and precision control expertise.

### HealthMate Beta (`/healthmate`)
*   **Contains:** Custom components indicating a "New Kind of Care" (`HealthMateHero`, `ValueProps`, `Timeline`, `PressCTA`, `FAQ`).
*   **How it Works:** Actively disables search engine indexing (`robots: { index: false }`) via Next.js Metadata configuration as it is a private beta teaser page, while utilizing dynamic rendering (`force-dynamic`).

### Finance Management (`/industries/finance-management`)
*   **Contains:** Focuses on audit-ready finance automation.
*   **How it Works:** Wraps a singular domain-specific component `FinanceManagementIndustry` keeping the page route file ultra-lean. Used to target specific industrial searches.
