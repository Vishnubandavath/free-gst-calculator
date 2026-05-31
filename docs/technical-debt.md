# Technical Debt & Code Smell Registry

This document lists identified code smells, technical shortcuts, and maintenance risks in the repository, along with remediation plans.

---

## 1. Active Technical Debt

### A. Suppressed React 19 Hydration Warnings (ThemeProvider Patch)
*   **Location**: [theme-provider.tsx](file:///f:/Y.files/vsnexos/free-gst-calculator/src/components/theme-provider.tsx#L5-L15)
*   **Description**: To bypass React 19's hydration warnings caused by `next-themes` injecting inline scripts during hydration, the provider patches the global `console.error` function in development mode.
*   **Risk**: Masking legitimate script errors; relies on mutating global objects (`console.error`).
*   **Remediation**: Migrate to a React 19 native theme engine like `@wrksz/themes` which leverages the `useServerInsertedHTML` hook.

### B. Duplicated Calculation & Rounding Logic
*   **Location**: [advanced-gst-calculator.tsx](file:///f:/Y.files/vsnexos/free-gst-calculator/src/components/advanced-gst-calculator.tsx#L56-L70) vs. [gst-logic.ts](file:///f:/Y.files/vsnexos/free-gst-calculator/src/lib/gst-logic.ts#L10-L43)
*   **Description**: Calculations in the advanced table (multiplication, discounts, taxable amounts, SGST/CGST split logic) are written directly within the React component instead of leveraging the shared GST engine calculations.
*   **Risk**: Formula drift; if standard Indian rounding calculations change (e.g. tax split rounding), changes must be made in multiple places.
*   **Remediation**: Refactor `calculateLineTotal` in `advanced-gst-calculator.tsx` to call a parameterized API in `gst-logic.ts`.

### C. Zero Automated Test Coverage
*   **Location**: Project Root
*   **Description**: The project has no unit, integration, or end-to-end tests.
*   **Risk**: Since correct calculations are the **#1 priority** of the application (as stated in `AGENTS.md`), subsequent UI refinements or React updates risk introducing calculation regressions.
*   **Remediation**: Introduce Jest unit tests for `gst-logic.ts` and Playwright for critical UI inputs and PDF download verification.

### D. Hardcoded Configuration Constants
*   **Location**: Multiple components (e.g. `gst-calculator.tsx`, `advanced-gst-calculator.tsx`)
*   **Description**: Variables such as tax slabs (`[0, 3, 5, 12, 18, 28]`), redirection URLs, and default constants are hardcoded within files.
*   **Risk**: Higher overhead when changing constants or adding tax rates.
*   **Remediation**: Create a centralized config file `src/lib/config.ts` to export tax rates, site metadata, and redirection lists.

---

## 2. Developer IDE Linting Warnings
*   **Description**: IDEs show warnings in `globals.css` due to unknown rules (`@theme`, `@custom-variant`, `@apply`).
*   **Impact**: **None**. These warnings are a tooling limitation of IDEs parsing Tailwind CSS v4 syntax, and they do not affect compilation or runtime performance.
