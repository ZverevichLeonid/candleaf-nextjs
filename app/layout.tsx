import type { Metadata } from "next"
import { Roboto, Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "./components/Header"

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
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
