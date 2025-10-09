import { Brain, Heart, Shield, Users, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Dignity-First Design",
    description:
      "You stay in control. Choose what to learn, what support to accept, and what to share with family—always collaborative, never paternalistic.",
  },
  {
    icon: Brain,
    title: "Personalized Learning",
    description:
      "Patient AI tutoring adapts to your pace, helping you master digital skills, explore new interests, and stay cognitively engaged.",
  },
  {
    icon: Users,
    title: "Family Connection",
    description:
      "Invite family members through guided consent. Share what you want, when you want—keeping loved ones connected without losing independence.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description:
      "Your data belongs to you. Bank-level encryption and transparent controls ensure your information stays private and secure.",
  },
  {
    icon: Zap,
    title: "Combat Isolation",
    description:
      "Stay connected to the digital world and your community. Learn to video chat, share photos, and engage with what matters most.",
  },
  {
    icon: Globe,
    title: "Lifelong Learning",
    description:
      "From technology basics to new hobbies, Aya grows with you—supporting continuous learning and cognitive health at every stage.",
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center backdrop-blur-sm bg-background/40 rounded-3xl p-8 border border-border/30">
          <h2 className="mb-4 font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Technology That Respects Your Journey
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground text-pretty">
            Aya AI combines cutting-edge artificial intelligence with human-centered design to help you age with
            dignity, independence, and connection.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group rounded-2xl bg-background/60 backdrop-blur-md p-8 shadow-lg border border-border/50 transition-all hover:shadow-xl hover:border-primary/50 hover:bg-background/70"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground border border-primary/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
