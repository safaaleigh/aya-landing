import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Start Your Journey",
    description:
      "Sign up and tell Aya about your interests, goals, and what you'd like to learn. Whether it's mastering video calls or exploring new hobbies, Aya adapts to you.",
  },
  {
    number: "02",
    title: "Learn at Your Pace",
    description:
      "Engage with your patient AI tutor through voice or text. Ask questions, practice skills, and build confidence—no judgment, no rush, just support.",
  },
  {
    number: "03",
    title: "Stay Connected",
    description:
      "Invite family members when you're ready. Share your progress, celebrate milestones, and maintain meaningful connections on your terms.",
  },
  {
    number: "04",
    title: "Age with Dignity",
    description:
      "Continue learning, growing, and staying engaged. Aya evolves with you, supporting your independence and cognitive health for years to come.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-secondary/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Your Path to Confident Aging
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground text-pretty">
            Getting started with Aya AI is simple. We meet you where you are and support you every step of the way.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 rounded-2xl bg-card p-8 shadow-sm border border-border md:flex-row md:items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <span className="font-mono text-2xl font-bold">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-semibold text-card-foreground">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground text-lg">{step.description}</p>
                </div>
                <div className="flex-shrink-0 self-start">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
