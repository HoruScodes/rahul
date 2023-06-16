import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Plus_Jakarta_Sans as Jakarta,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontJakarta = Jakarta({
  subsets: ["latin"],
  variable: "--font-jakarta",
})
