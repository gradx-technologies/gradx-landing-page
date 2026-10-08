import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SmoothScroll } from '@/components/smooth-scroll'
import { PlacementGap } from '@/components/placement-gap'
import { HowItWorks } from '@/components/how-it-works'
import { Solutions } from '@/components/solutions'
import { ForColleges, ForEmployers } from '@/components/audience-section'
// import { Results } from '@/components/results'
import { Partners } from '@/components/partners'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://gradx.app/#organization',
        name: 'GradX',
        url: 'https://gradx.app',
        logo: 'https://gradx.app/gx_logo.png',
        description:
          'GradX is placement infrastructure for colleges, connecting student readiness, employer relationships, and placement operations.',
        sameAs: ['https://www.linkedin.com/company/gradx-technologies'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://gradx.app/#website',
        name: 'GradX',
        url: 'https://gradx.app',
        inLanguage: 'en-IN',
        publisher: {
          '@id': 'https://gradx.app/#organization',
        },
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
        <Partners />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
