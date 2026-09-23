import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SmoothScroll } from '@/components/smooth-scroll'
import { PlacementGap } from '@/components/placement-gap'
import { HowItWorks } from '@/components/how-it-works'
import { Solutions } from '@/components/solutions'
import { ForColleges, ForEmployers } from '@/components/audience-section'
// import { Results } from '@/components/results'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SmoothScroll />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <PlacementGap />
        <Solutions />
        <HowItWorks />
        <ForColleges />
        <ForEmployers />
        {/* <Results /> */}
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
