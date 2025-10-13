import { Rocket, Target, Users, Calendar } from "lucide-react"

const milestones = [
  {
    icon: Rocket,
    title: "Product Development",
    description:
      "Building MVP with AI-powered tutoring, family connection features, and dignity-first consent frameworks.",
  },
  {
    icon: Users,
    title: "Early Validation",
    description:
      "Conducting user interviews and pilots with aging adults and families to refine product-market fit.",
  },
  {
    icon: Target,
    title: "Market Strategy",
    description:
      "Go-to-market focused on direct-to-consumer with roadmap for B2B partnerships with senior living and healthcare.",
  },
  {
    icon: Calendar,
    title: "Growth Roadmap",
    description:
      "12-month plan for beta launch, customer acquisition, and strategic partnerships in the aging tech ecosystem.",
  },
]

export function Traction() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center backdrop-blur-sm bg-muted/40 rounded-3xl p-8 border border-border/30">
          <h2 className="mb-4 font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Current Stage & Momentum
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground text-pretty">
            We're building the foundation for a category-defining platform in aging technology, with a clear path to
            market and revenue.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon
            return (
              <div
                key={index}
                className="group rounded-2xl bg-card/60 backdrop-blur-md p-8 shadow-lg border border-border/50 transition-all hover:shadow-xl hover:border-primary/50 hover:bg-card/70"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground border border-primary/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">{milestone.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{milestone.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
