import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ilone Blaauw - Veilig Veranderen | Change Management Coach",
  description:
    "Persoonlijke en professionele begeleiding van verandering voor organisaties, managers én teams die verlangen naar meer rust en werkplezier.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
