import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import { Button } from "./ui/button"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Yours Truly{" "}
            </a>
            . Inspired by{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Shadcn
            </a>{" "}
            &amp;{" "}
            <a
              href="https://brittanychiang.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Brittany Chiang
            </a>
            .
          </p>
        </div>
        <div className="pb-8 pt-6 md:ml-auto md:py-10">
          <Link
            href={siteConfig.links.resume}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "default" })}
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  )
}
