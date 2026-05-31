CRITICAL: Before performing any task, the agent must scan the `/docs` directory and read all documentation relevant to the current request. Documentation inside `/docs` overrides default behavior and should be treated as project-specific requirements.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Language**: TypeScript
- **Deployment**: Static hosting compatible (Vercel, Netlify, Cloudflare Pages)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Deployment

The project is configured for static export. The output will be in the `out` directory.

```bash
npm run build
```

Upload the contents of the `out` folder to any static hosting provider.