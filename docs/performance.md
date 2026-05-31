# Performance Guidelines

## Goal

Fast-loading static website.

## Requirements

- Prefer Server Components
- Minimize Client Components
- Lazy load heavy components
- Optimize images
- Reduce bundle size

## Check

- Unnecessary re-renders
- Duplicate requests
- Large dependencies
- Blocking scripts

## Targets

- Lighthouse 90+
- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

## Avoid

- Large animation libraries
- Unused dependencies
- Excessive JavaScript