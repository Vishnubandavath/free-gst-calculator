# Future Architecture & Scalability Blueprint

This document defines the architectural guidelines and design patterns required to scale the GST Toolkit as new tools, articles, and calculators are introduced.

---

## 1. Unified Calculation Engine

To prevent calculation code duplication, all mathematical formulas must be separated from UI logic. The engine should provide standard inputs and outputs:

```typescript
// src/lib/types/calculator.ts
export interface BaseCalculatorInput {
  baseAmount: number;
  taxRate: number;
}

export interface CalculatorBreakdown {
  taxableAmount: number;
  totalTaxAmount: number;
  split: {
    cgst: number;
    sgst: number;
    igst: number;
  };
  grandTotal: number;
}
```

New utilities (e.g. Composition Scheme, Income Tax, SIP, EMI) must implement standard interfaces and live inside `src/lib/logic/`.

---

## 2. Reusable Component Extraction

To speed up the creation of future calculators, core UI elements should be extracted into a reusable design library in `src/components/ui/`:

### A. NumberInputField
A customized number input wrapper containing:
*   Standard focus and dark mode styling.
*   Formatting (e.g., currency symbols).
*   Built-in bounds validation (preventing negatives, enforcing max values).

### B. SummaryCard
A layout container to display calculation breakdowns:
*   Displays taxable, tax splits, and total.
*   Contains built-in copy-to-clipboard, PDF download, and share action buttons.

---

## 3. Dynamic MDX Blog System

To scale SEO landing pages without inflating the route directory, replace the flat routing directories with a dynamic content routing architecture:

```
src/app/
└── blog/
    ├── page.tsx          # Blog list page (Category filters, search)
    └── [slug]/
        └── page.tsx      # Dynamic MDX article renderer
```

*   **Dynamic Metadata**: Read title, tags, and description directly from frontmatter to generate metadata dynamically.
*   **Static Exports**: Continue to support pre-compiled routes (`output: 'export'`) by generating static parameters using `generateStaticParams`.

---

## 4. Input Validation Standard
Adopt **React Hook Form** + **Zod** schema validations for all multi-input pages (such as the planned Invoice Generator) to keep layout state cleanly segregated from input validations.
