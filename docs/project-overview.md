# GST Toolkit - Project Overview

This document provides a comprehensive understanding of the current codebase, feature status, routing structure, component inventories, and architecture of the GST Toolkit application. It serves as the primary onboarding and reference document for future development.

---

## 1. Repository Analysis

The GST Toolkit is a web application built using the Next.js App Router, Tailwind CSS 4, and TypeScript. Its primary focus is facilitating GST (Goods and Services Tax) calculations, generating invoice breakdowns, and offering guides for Indian taxpayers, freelancers, and businesses.

### Visual and Styling Audit
- **Theme**: Forced Dark Mode. The application uses Next.js `next-themes` with a locked theme attribute (`forcedTheme="dark"`).
- **Core Colors**: Dark theme background (`#020617`), Slate foregrounds (`#f8fafc`), and Indigo/Cyan gradients/accents (`#6366f1` / `#22d3ee`).
- **CSS Architecture**: Managed via Tailwind CSS v4 directives inside [globals.css](file:///f:/Y.files/vsnexos/free-gst-calculator/src/app/globals.css).

---

## 2. Product Description

### Purpose of the Website
GST Toolkit (operating under the branding **VSNEXOS**) provides businesses, freelancers, and accountants in India with high-quality, professional, and completely free tax utility tools. It aims to demystify complex GST calculations and provide standard compliance templates.

### Target Audience
- **Small Business Owners & Retailers**: Who need quick tax invoice breakdowns and calculators for products.
- **Freelancers & Consultants**: Who need to calculate tax for domestic services or zero-rated export structures.
- **Accountants & Bookkeepers**: Who want standard tables to compute multi-item tax summaries.

### Problems It Solves
- **Friction in Manual Calculations**: Provides real-time math for standard Indian tax slabs (3%, 5%, 12%, 18%, 28%).
- **Flashes of Unstyled Content (FOUC)**: Solved through a optimized SSR theme configuration.
- **Accessibility & Contrast Barriers**: High-contrast dark interface tailored for low-light workspaces.
- **Tax Breakdown Exports**: Permits copying summaries to the clipboard or downloading a structured PDF receipt directly.

### Current Core Functionality
- **GST Calculator**: Standard online calculator to compute GST-inclusive and GST-exclusive prices.
- **Advanced GST Table**: A multi-item calculation worksheet with dynamic rows, bounds validation, CSV export, and clean print styling.
- **Educational Guides**: Explains tax formulas, slabs, HSN/SAC codes, and registration procedures.

---

## 3. Feature Inventory

| Feature | Status | Notes |
| :--- | :--- | :--- |
| **GST Calculator** | **Complete** | Standard calculator with input field, CGST/SGST/IGST breakdown, share, copy, and PDF download support. |
| **Reverse GST Calculator** | **Complete** | Integrated directly into the main GST Calculator page as the "GST Inclusive (Remove GST)" mode. |
| **Advanced GST Calculator** | **Complete** | Multi-item interactive table with dynamic rows, non-negative validation, CSV export, and print template styles. |
| **Invoice Generator** | **Missing** | Stated in `AGENTS.md` and `docs/invoice-generator.md`, but no dedicated page or buyer/seller fields implementation exists. |
| **Blog System** | **Missing** | Guide pages are statically hardcoded under their own routes. No dynamic indexing, category filters, metadata loops, or articles engine is present. |

---

## 4. Route Inventory

| Route | Purpose | SEO Status | Missing Content / Gaps |
| :--- | :--- | :--- | :--- |
| `/` | Application landing page hosting standard GST Calculator. | Fully Optimized | None. |
| `/about` | Overview of VSNEXOS mission, core values, and stats. | Fully Optimized | None. |
| `/contact` | Form for feedback or general email inquiries. | Fully Optimized | None. |
| `/disclaimer` | Legal liability exemptions regarding calculations. | Fully Optimized | None. |
| `/privacy-policy` | Standard legal privacy and tracking policy. | Fully Optimized | None. |
| `/terms-and-conditions` | Standard terms of service agreements. | Fully Optimized | None. |
| `/cookie-policy` | Discloses use of performance & preference cookies. | Fully Optimized | None. |
| `/indexing-status` | Mock page summarizing search console index data. | Not Indexed (Robots.txt) | None. |
| `/gst-calculator` | Dedicated landing page for standard GST calculator. | Fully Optimized | None. |
| `/advanced-gst-calculator` | Page hosting the multi-item calculation worksheet. | Fully Optimized | None. |
| `/gst-guide` | Broad resource page introducing GST concepts. | Fully Optimized | None. |
| `/gst-faq` | FAQ layout with answers to 11 common tax questions. | Title Adjusted | Meta claims "50+ questions", actual page answers 11. |
| `/gst-slabs-india` | Educational guide detailing active Indian tax brackets. | Fully Optimized | None. |
| `/gst-inclusive-formula` | Explains the mathematics of reverse tax calculation. | Fully Optimized | None. |
| `/gst-exclusive-formula` | Explains the math of adding GST to a base price. | Fully Optimized | None. |
| `/gst-business-guide` | Target guide outlining GST compliance for businesses. | Fully Optimized | None. |
| `/gst-freelancer-guide` | Compliance details specifically for sole proprietors. | Fully Optimized | None. |
| `/gst-registration-guide` | Step-by-step tutorial on filing for a GSTIN online. | Fully Optimized | None. |
| `/gst-invoice-examples` | Guidelines outlining rules for valid GST invoices. | Fully Optimized | None. |
| `/redirect/[platform]` | Dynamic platform redirects (Instagram, LinkedIn, etc.) | Exempt | None. |

---

## 5. Component Inventory

### Reusable Layout Components
- **Navbar** (`src/components/navbar.tsx`): Main navigation header. Custom-styled with clean desktop links, sliding mobile drawer, and scrolling border states.
- **Footer** (`src/components/footer.tsx`): Standard multi-column link list containing social tags, legal notices, and copy protections.
- **Breadcrumbs** (`src/components/breadcrumbs.tsx`): Dynamically builds standard hierarchy routes (e.g. `Home > GST FAQ`) for visual UX and SEO canonicals.
- **LegalLayout** (`src/components/legal-layout.tsx`): Container page wrapper that provides uniform column margins and margins for legal/policy templates.
- **ThemeProvider** (`src/components/theme-provider.tsx`): Configures NextThemes compatibility, blocking console.error script hydration warnings.

### Utility and Calculator Components
- **GSTCalculator** (`src/components/gst-calculator.tsx`): Handles logic for standard tax computations. Includes confetti events, state triggers for PDF generation via `html2canvas-pro`, and copy controls.
- **AdvancedGSTCalculator** (`src/components/advanced-gst-calculator.tsx`): Form table mapping out a list of line items. Allows adding rows, validating quantities/pricing, calculations, CSV export, and high-quality print stylesheets.
- **SEOContent** (`src/components/seo-content.tsx`): Large static informational text section containing guides and tables rendered below the home calculator to maximize SEO keyword relevancy.
- **CookieConsent** (`src/components/cookie-consent.tsx`): Modal pop-up managing cookie tracking preferences, integrated with Google Consent Mode v2 triggers.

---

## 6. Architecture Summary

```
src/
├── app/                  # Next.js App Router routes & custom error boundaries
│   ├── error.tsx         # Page-level runtime error boundary fallback
│   ├── global-error.tsx  # Root-level layout crash fallback
│   ├── layout.tsx        # Base layout setting up fonts and forced dark ThemeProvider
│   └── page.tsx          # Landing page routing & main JSON-LD scripts
├── components/           # UI elements & calculators
├── data/                 # Static content configuration data
└── lib/                  # Pure math functions, formats, and Tailwind styles
    ├── gst-logic.ts      # Tax math functions (calculateGST, formatCurrency)
    └── utils.ts          # Tailwind CSS style merger utility (clsx + tailwind-merge)
```

### Key Framework Behaviors
1. **State Management**: Built on local component state (`useState`, `useEffect`) and local browser cache (`localStorage`) for cookie consents.
2. **SEO Strategy**: Leverages Next.js metadata system (defined in layout and pages) and inline JSON-LD structured data generated dynamically for crawler indexing.
3. **Build Strategy**: Fully pre-renders static HTML tags for SEO crawlers (`next build` generates an optimized build).

---

## 7. Gap Analysis

The application satisfies the priorities of the baseline calculator website but has gaps relative to the planned **GST Toolkit** roadmap:

1. **Invoice Generator (Missing)**:
   - *Current State*: The `AdvancedGSTCalculator` has an invoice-style print layout but lacks custom seller/buyer details, invoice number/date fields, and input forms.
   - *Requirement*: Needs a separate route (e.g. `/invoice-generator`) wrapping a form layout where users can specify customized invoicing details and compile them into a PDF.
2. **Blog System (Missing)**:
   - *Current State*: Static documentation pages. No list feed, tag filters, author metadata, or article indexes.
   - *Requirement*: A dynamic article catalog (using MDX or local structure configuration) to list all tax guides.
3. **FAQ Count Mismatch (Low)**:
   - *Current State*: The metadata description claims "50+ questions", but the layout only displays 11.

---

## 8. Recommended Next Steps

### Priority 1: Launch and Compliance
*   **Dedicated Invoice Generator**: Create `/invoice-generator` containing a dynamic form using `react-hook-form` to capture seller/buyer fields (Name, Address, GSTIN), invoice metadata, and compile them into a PDF template using `jspdf` or `pdf-lib`.
*   **Clean Up FAQ Metadata**: Sync metadata descriptions on the FAQ page with actual page content count.

### Priority 2: SEO & Content Depth
*   **Centralize Blog Data**: Define a structured articles index (e.g. `src/data/blog.ts` or markdown files) to dynamically list, route, and link all guides under `/blog/[slug]` rather than keeping them as flat folders.
*   **Add Structured Breadcrumbs on Guides**: Ensure all guides properly resolve breadcrumb hierarchies to help search crawlers map categories.

### Priority 3: Enhancements
*   **Composition Scheme Helper**: Add a feature/tab in the advanced calculator for composition taxpayers (fixed 1% / 5% flat rates).
*   **Offline Support (PWA)**: Ensure `next-pwa` configuration is fully cached for offline utility access.
