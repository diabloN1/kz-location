import "@/styles/globals.css"
import { Metadata } from "next"
import { UserProvider } from "@auth0/nextjs-auth0/client"
import { Toaster } from "sonner"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Footer from "@/components/component/footerapp"
import { ResponsiveNav } from "@/components/component/resposive-nav"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <h1>503 - Undermantainence</h1>
      {/* <UserProvider>
        <html lang="en" suppressHydrationWarning>
          <head />
          <body
            className={cn(
              "min-h-screen bg-gray-100 dark:bg-background font-sans antialiased",
              fontSans.variable
            )}|
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <br />
                <div className="flex-1">{children}</div>
              </div>
              <TailwindIndicator />
            </ThemeProvider>
            <Footer />
          </body>
        </html>
      </UserProvider> */}
    </>
  )
}
