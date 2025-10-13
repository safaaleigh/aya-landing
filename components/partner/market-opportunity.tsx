import { AlertCircle, Users, DollarSign, Globe } from "lucide-react"

const opportunities = [
  {
    icon: Users,
    title: "Underserved Market",
    stat: "70M+ aging adults",
    description:
      "The U.S. has 70M+ adults over 60, growing to 95M+ by 2060. Most face significant barriers to digital literacy and technology adoption.",
  },
  {
    icon: AlertCircle,
    title: "Growing Problem",
    stat: "40% digitally excluded",
    description:
      "40% of older adults lack basic digital literacy, leading to social isolation, health risks, and reduced quality of life.",
  },
  {
    icon: DollarSign,
    title: "Revenue Potential",
    stat: "$10B+ TAM",
    description:
      "A massive market spanning digital literacy, aging tech, family coordination, and cognitive engagement—with recurring revenue models.",
  },
  {
    icon: Globe,
    title: "Multi-Generational",
    stat: "3 customer segments",
    description:
      "Revenue from older adults seeking independence, families wanting peace of mind, and eventually B2B partnerships with senior living and healthcare.",
  },
]

export function MarketOpportunity() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center backdrop-blur-sm bg-muted/40 rounded-3xl p-8 border border-border/30">
          <h2 className="mb-4 font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            The Opportunity
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground text-pretty">
            Aging populations face an unprecedented digital divide, creating isolation, dependency, and missed
            opportunities—a massive problem with no comprehensive solution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon
            return (
              <div
                key={index}
                className="group rounded-2xl bg-card/60 backdrop-blur-md p-8 shadow-lg border border-border/50 transition-all hover:shadow-xl hover:border-primary/50 hover:bg-card/70"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground border border-primary/20">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="mb-2 text-3xl font-bold text-primary">{opportunity.stat}</div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">{opportunity.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{opportunity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
