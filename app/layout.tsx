import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Arimo as V0_Font_Arimo, Arvo as V0_Font_Arvo } from 'next/font/google'

// Initialize fonts
const _arimo = V0_Font_Arimo({ subsets: ['latin'], weight: ["400","500","600","700"] })
const _arvo = V0_Font_Arvo({ subsets: ['latin'], weight: ["400","700"] })

export const metadata: Metadata = {
  title: "Aya AI - Age with Dignity, Powered by AI",
  description:
    "Patient AI companion helping aging populations navigate technology, learn new skills, and stay connected with families—designed for dignity and independence.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
