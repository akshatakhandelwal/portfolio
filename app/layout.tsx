import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageLoader from "@/components/page-loader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akshata Khandelwal - HR Professional",
  description:
    "Motivated HR Recruiter with background in pharmaceutical sciences, specializing in talent acquisition for IT and Non-IT roles.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="akshata-portfolio-theme"
        >
          <PageLoader />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
