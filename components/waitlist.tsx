"use client"

export function Waitlist() {
  const TYPEFORM_EMBED_URL = process.env.NEXT_PUBLIC_TYPEFORM_URL || "https://safaahansen386473.typeform.com/to/gYpBw94P"

  return (
    <section id="waitlist" className="bg-primary py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-warm-organic-shapes.jpg')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="backdrop-blur-sm bg-primary-foreground/10 rounded-3xl p-8 mb-8 border border-primary-foreground/20">
            <h2 className="mb-4 font-sans text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl text-balance">
              Join the Movement
            </h2>
            <p className="text-xl leading-relaxed text-primary-foreground/90 text-pretty">
              Be among the first to experience Aya AI. Whether you're looking to age with dignity, support a loved one,
              or invest in the future of aging—we'd love to hear from you.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <iframe
              src={TYPEFORM_EMBED_URL}
              title="Aya AI Waitlist Form"
              className="w-full h-[600px] rounded-2xl shadow-2xl border-0"
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>

          <div className="mt-12 grid gap-8 text-left md:grid-cols-2">
            <div className="rounded-xl bg-primary-foreground/15 backdrop-blur-md p-6 border border-primary-foreground/30 shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-primary-foreground">For Users & Families</h3>
              <p className="leading-relaxed text-primary-foreground/80">
                Get early access to Aya AI and be part of shaping a platform that helps you age with dignity and
                independence.
              </p>
            </div>
            <div className="rounded-xl bg-primary-foreground/15 backdrop-blur-md p-6 border border-primary-foreground/30 shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-primary-foreground">For Investors</h3>
              <p className="leading-relaxed text-primary-foreground/80">
                Learn about our vision, market opportunity, and how we're building the future of dignified aging
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
