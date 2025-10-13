import { Brain, Heart, Shield, Users, Zap, TrendingUp } from "lucide-react"

const solutions = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description:
      "Personalized AI tutoring that adapts to each user's pace, learning style, and goals—making technology accessible and engaging.",
  },
  {
    icon: Heart,
    title: "Dignity-First Design",
    description:
      "Collaborative, consent-based approach that empowers users rather than treating them as dependent—building trust and long-term engagement.",
  },
  {
    icon: Users,
    title: "Multi-Generational Platform",
    description:
      "Serves older adults, their families, and caregivers—creating network effects and multiple revenue streams.",
  },
  {
    icon: Shield,
    title: "Privacy & Trust",
    description:
      "Bank-level security and transparent data practices build trust in a market that values privacy and control.",
  },
  {
    icon: Zap,
    title: "Scalable Technology",
    description:
      "AI-driven platform scales efficiently, reducing marginal costs while maintaining personalization and quality.",
  },
  {
    icon: TrendingUp,
    title: "Recurring Revenue",
    description:
      "Subscription model with high LTV due to long engagement periods and expansion into family and B2B markets.",
  },
]

export function Solution() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center backdrop-blur-sm bg-muted/40 rounded-3xl p-8 border border-border/30">
          <h2 className="mb-4 font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Our Competitive Advantage
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground text-pretty">
            Aya AI combines cutting-edge AI with dignity-first design to create a scalable, multi-generational platform
            that addresses a massive underserved market.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group rounded-2xl bg-muted/60 backdrop-blur-md p-8 shadow-lg border border-border/50 transition-all hover:shadow-xl hover:border-primary/50 hover:bg-muted/70"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground border border-primary/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">{solution.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{solution.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
