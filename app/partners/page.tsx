import { PartnerHero } from "@/components/partner/partner-hero"
import { MarketOpportunity } from "@/components/partner/market-opportunity"
import { Solution } from "@/components/partner/solution"
import { Traction } from "@/components/partner/traction"
import { PartnerCTA } from "@/components/partner/partner-cta"
import { Footer } from "@/components/footer"

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <PartnerHero />
      <MarketOpportunity />
      <Solution />
      <Traction />
      <PartnerCTA />
      <Footer />
    </main>
  )
}
