"use client"

import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { fontJakarta, fontMono } from "@/lib/fonts"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className={`text-[40px] font-bold ${fontJakarta.className}`}>
          Hi, my name is Rahul.
        </h2>
        <h3 className="text-[40px] font-bold">
          software developer based in Montréal, QC.
        </h3>
        <p>
          currently working at{" "}
          <a href="https://amilia.com/" target="_blank" rel="noreferrer">
            Amilia.
          </a>
        </p>
        <p>
          I enjoy developing things that make our life better, whether that be
          websites, applications, or anything in between. My goal is to be
          successful enough to help those who are in need and to contribute
          something to society.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.email}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Contact Me
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
