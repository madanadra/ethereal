import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const brigro = Bricolage_Grotesque({
  subsets: ["latin"],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Ethereal - A place where art meets decentralized finance",
  description: "Ethereal by Madanadra"
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${brigro.className}`}>
        {children}
      </body>
    </html>
  )
}
