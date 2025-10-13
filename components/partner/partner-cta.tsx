export function PartnerCTA() {
  return (
    <section id="contact" className="bg-primary py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-warm-organic-shapes.jpg')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="backdrop-blur-sm bg-primary-foreground/10 rounded-3xl p-8 mb-8 border border-primary-foreground/20">
            <h2 className="mb-4 font-sans text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl text-balance">
              Join Us in Building the Future of Aging
            </h2>
            <p className="text-xl leading-relaxed text-primary-foreground/90 text-pretty">
              We're seeking strategic partners who share our vision of empowering aging populations with dignity,
              independence, and connection through AI technology.
            </p>
          </div>

          <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
            <div className="rounded-xl bg-primary-foreground/15 backdrop-blur-md p-6 border border-primary-foreground/30 shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-primary-foreground">Partnership Deck</h3>
              <p className="leading-relaxed text-primary-foreground/80">
                Request our detailed partnership deck with market analysis, financial projections, and growth strategy.
              </p>
            </div>
            <div className="rounded-xl bg-primary-foreground/15 backdrop-blur-md p-6 border border-primary-foreground/30 shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-primary-foreground">Schedule a Call</h3>
              <p className="leading-relaxed text-primary-foreground/80">
                Discuss the opportunity directly with our founding team and learn more about our vision.
              </p>
            </div>
            <div className="rounded-xl bg-primary-foreground/15 backdrop-blur-md p-6 border border-primary-foreground/30 shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-primary-foreground">Join Our Network</h3>
              <p className="leading-relaxed text-primary-foreground/80">
                Connect with our advisor network and stay updated on our progress and milestones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
