"use client"

import { TrendingUp, Target, Rocket } from "lucide-react"

export function PartnerHero() {
  return (
    <section className="relative overflow-hidden bg-card pt-20">
      <div className="absolute inset-0 bg-[url('/abstract-warm-organic-shapes.jpg')] opacity-10 bg-cover bg-center" />

      <div className="relative w-full px-4 min-h-screen flex flex-col justify-center py-20">
        <div className="mx-auto max-w-6xl text-center w-full">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-primary border border-primary/20">
            <Rocket className="h-4 w-4" />
            <span>Partnership Opportunity</span>
          </div>

          <h1 className="mb-6 font-sans text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl text-balance">
            Addressing the Digital Divide
            <br />
            <span className="text-primary">for 70M+ Aging Adults</span>
          </h1>

          <p className="mb-8 text-xl leading-relaxed text-muted-foreground md:text-2xl text-pretty max-w-4xl mx-auto">
            Aya AI is building the first AI-powered dignity-first platform to help aging populations navigate
            technology, combat isolation, and maintain independence—a massive, underserved market.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-16 max-w-6xl mx-auto w-full">
          <div className="rounded-2xl bg-muted/60 backdrop-blur-md p-8 shadow-lg border border-border/50">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-3xl font-bold text-card-foreground">$10B+</h3>
            <p className="leading-relaxed text-muted-foreground">Total Addressable Market in aging tech and digital literacy</p>
          </div>

          <div className="rounded-2xl bg-muted/60 backdrop-blur-md p-8 shadow-lg border border-border/50">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-3xl font-bold text-card-foreground">70M+</h3>
            <p className="leading-relaxed text-muted-foreground">Aging adults in the U.S. facing the digital divide</p>
          </div>

          <div className="rounded-2xl bg-muted/60 backdrop-blur-md p-8 shadow-lg border border-border/50">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-3xl font-bold text-card-foreground">Multi-Gen</h3>
            <p className="leading-relaxed text-muted-foreground">Platform serving older adults, families, and caregivers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
