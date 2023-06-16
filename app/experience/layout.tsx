"use client"

import "@/styles/globals.css"
import { useState } from "react"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

interface ExperienceLayoutProps {
  children: React.ReactNode
}

export default function ExperienceLayout({ children }: ExperienceLayoutProps) {
  const [style, setStyle] = useState({})
  return (
    <>
      <div
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
        onMouseMove={(event) => {
          setStyle({
            background: `radial-gradient(600px at ${event.clientX}px ${event.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          })
        }}
        style={style}
      >
        <div className="flex-1">{children}</div>
      </div>
    </>
  )
}
