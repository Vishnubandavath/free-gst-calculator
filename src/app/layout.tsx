import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Free GST Calculator India (2026) | Online GST Calculator - VSNEXOS",
    template: "%s | VSNEXOS",
  },
  description: "Calculate GST instantly with VSNEXOS Free GST Calculator. GST inclusive and exclusive calculations, GST formulas, GST slabs, GST examples, GST guide, and GST resources for India.",
  keywords: ["GST calculator India 2026", "Free GST calculator", "Online GST calculator", "GST inclusive calculator", "GST exclusive calculator", "Indian GST calculator", "VSNEXOS GST", "GST tax calculator", "GST formula India"],
  authors: [{ name: "VSNEXOS" }],
  creator: "VSNEXOS",
  publisher: "VSNEXOS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://free-gst-calculator.vsnexos.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VSNEXOS | India's Free Professional GST Calculator",
    description: "Professional GST calculation tool for Indian businesses. Accurate, fast, and free.",
    url: "https://free-gst-calculator.vsnexos.com",
    siteName: "VSNEXOS GST Calculator",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VSNEXOS | India's Free Professional GST Calculator",
    description: "Professional GST calculation tool for Indian businesses. Accurate, fast, and free.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable, poppins.variable)}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0K4M5NY1WN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0K4M5NY1WN');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'VSNEXOS',
                url: 'https://free-gst-calculator.vsnexos.com',
                logo: 'https://free-gst-calculator.vsnexos.com/logo.svg',
                sameAs: [
                  'https://www.instagram.com/vsnexos/',
                  'https://www.linkedin.com/in/vsnexos/',
                  'https://www.threads.com/@vsnexos'
                ]
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'VSNEXOS GST Calculator',
                url: 'https://free-gst-calculator.vsnexos.com',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://free-gst-calculator.vsnexos.com/?q={search_term_string}',
                  'query-input': 'required name=search_term_string'
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: 'VSNEXOS GST Calculator',
                operatingSystem: 'Any',
                applicationCategory: 'FinanceApplication',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'INR'
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  reviewCount: '1250'
                }
              }
            ])
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/30 selection:text-indigo-900 dark:selection:text-indigo-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
