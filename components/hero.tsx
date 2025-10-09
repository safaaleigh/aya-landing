"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, Heart, TrendingUp } from "lucide-react"

export function Hero() {
  const openTypeform = () => {
    window.open("https://safaahansen386473.typeform.com/to/gYpBw94P", "_blank")
  }

  return (
    <section className="relative overflow-hidden bg-secondary/30 pt-20">
      <div className="absolute inset-0 bg-[url('/abstract-warm-organic-shapes.jpg')] opacity-5 bg-cover bg-center" />

      <div className="relative w-full px-4 min-h-screen flex flex-col justify-center py-20">
        <div className="mx-auto max-w-6xl text-center w-full">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-primary border border-primary/20">
            <Sparkles className="h-4 w-4" />
            <span>Empowering Dignity Through Technology</span>
          </div>

          <h1 className="mb-6 font-sans text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl text-balance">
            Age with Dignity,
            <br />
            <span className="text-primary">Powered by AI</span>
          </h1>

          <p className="mb-8 text-xl leading-relaxed text-muted-foreground md:text-2xl text-pretty max-w-4xl mx-auto">
            Aya AI is your patient companion for navigating technology, staying connected, and maintaining
            independence—designed for families who care.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              onClick={openTypeform}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 bg-background/50 backdrop-blur-sm"
              onClick={openTypeform}
            >
              For Investors
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-16 max-w-6xl mx-auto w-full">
          <div className="rounded-2xl bg-background/60 backdrop-blur-md p-8 shadow-lg border border-border/50">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-card-foreground">For Older Adults</h3>
            <p className="leading-relaxed text-muted-foreground">
              A patient AI tutor that helps you master technology at your own pace, stay cognitively engaged, and
              maintain your independence.
            </p>
          </div>

          <div className="rounded-2xl bg-background/60 backdrop-blur-md p-8 shadow-lg border border-border/50">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-card-foreground">For Families</h3>
            <p className="leading-relaxed text-muted-foreground">
              Support your aging loved ones with dignity through collaborative, consent-based monitoring and connection.
            </p>
          </div>

          <div className="rounded-2xl bg-background/60 backdrop-blur-md p-8 shadow-lg border border-border/50">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm border border-primary/20">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-card-foreground">For Investors</h3>
            <p className="leading-relaxed text-muted-foreground">
              A massive market opportunity addressing the digital divide for 70M+ aging adults with a scalable,
              multi-generational platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
