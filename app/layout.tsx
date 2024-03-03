import type { Metadata } from "next"
import { Roboto, Poppins } from "next/font/google"
import "./globals.css"
import { AppSessionProvider } from "./lib/providers/auth-provider"

const roboto = Roboto({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
})

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Candleaf",
  description: "Online store of handmade candles",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable}`}>
        <AppSessionProvider>{children}</AppSessionProvider>
      </body>
    </html>
  )
}
