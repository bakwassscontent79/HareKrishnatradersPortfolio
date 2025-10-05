import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hare Krishna Traders - Medical & Health Equipment",
  description: "Professional medical equipment, fitness products, and health devices",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
