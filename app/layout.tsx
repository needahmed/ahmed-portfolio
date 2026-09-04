import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { site } from "@/content/site"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}, ${site.role}`,
    template: `%s, ${site.name}`,
  },
  description:
    "Ahmed Pervez is a lead software engineer building and operating production fintech, SaaS and AI products end to end: multi-currency payment infrastructure, APIs, and the apps on top of them.",
  keywords: [
    "Ahmed Pervez",
    "Lead Software Engineer",
    "Fintech Engineer",
    "Payments",
    "NestJS",
    "React Native",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name}, ${site.role}`,
    description:
      "Lead software engineer building production fintech, SaaS and AI products end to end.",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}, ${site.role}`,
    description:
      "Lead software engineer building production fintech, SaaS and AI products end to end.",
    creator: "@zedgaghost",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#fbfbfc" },
  ],
  colorScheme: "dark light",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {/* Film-grain overlay, felt not seen */}
          <div className="pointer-events-none fixed inset-0 -z-10 grain" aria-hidden="true" />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
