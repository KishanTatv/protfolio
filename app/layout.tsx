import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import { ThemeProvider } from "next-themes"
import favIcon from "./favicon1.png"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kishan Bhadani | Software Engineer",
  description: "Passionate Software Engineer specializing in Angular, .NET, and modern web technologies. Explore my projects, skills, and experience in crafting high-performance applications.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={favIcon.src} type="image/png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

