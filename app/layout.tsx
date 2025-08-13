import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  preload: true,
})

export const metadata: Metadata = {
  title: "Etienne Getti - Portfolio Professionnel | Développement Commercial & Innovation Viticole",
  description: "CV moderne et élégant d'Etienne Getti, spécialisé dans le développement commercial, l'innovation viticole et les solutions technologiques agricoles.",
  keywords: ["développement commercial", "innovation viticole", "agriculture", "technologies agricoles", "commerce", "agronomie"],
  authors: [{ name: "Etienne Getti" }],
  creator: "Etienne Getti",
  publisher: "Etienne Getti",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cv-viticole.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Etienne Getti - Portfolio Professionnel",
    description: "Développement Commercial & Innovation Viticole",
    url: "https://cv-viticole.vercel.app",
    siteName: "Portfolio Etienne Getti",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Etienne Getti - Portfolio Professionnel",
    description: "Développement Commercial & Innovation Viticole",
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
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${sourceSans.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
