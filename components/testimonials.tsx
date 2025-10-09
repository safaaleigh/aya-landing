const testimonials = [
  {
    quote:
      "As an adult daughter caring for my mom, Aya has been a game-changer. Mom feels empowered learning at her own pace, and I have peace of mind knowing she's staying engaged and connected.",
    author: "Sarah M.",
    role: "Daughter & Caregiver",
    image: "/smiling-woman-portrait.png",
  },
  {
    quote:
      "I was intimidated by technology, but Aya is so patient. I can now video chat with my grandkids and even order groceries online. It's given me back my independence.",
    author: "Robert T.",
    role: "Retired Teacher, 72",
    image: "/older-man-smiling.png",
  },
  {
    quote:
      "The market opportunity is massive—70M+ aging adults facing a digital divide. Aya's dignity-first approach and multi-generational platform position it perfectly for scale.",
    author: "Jennifer K.",
    role: "Healthcare Investor",
    image: "/professional-woman-portrait.png",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center backdrop-blur-sm bg-background/40 rounded-3xl p-8 border border-border/30">
          <h2 className="mb-4 font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Trusted by Families & Investors
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground text-pretty">
            Hear from the people who believe in our mission to help everyone age with dignity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-background/60 backdrop-blur-md p-8 shadow-lg border border-border/50"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z" />
                </svg>
              </div>
              <p className="mb-6 leading-relaxed text-muted-foreground text-lg">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
