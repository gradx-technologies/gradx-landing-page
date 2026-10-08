import { PartnerCarousel } from '@/components/partner-carousel'

export function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden border-b border-[#e5e2e9] bg-[#fafafa]"
    >
      <div
        className="pointer-events-none absolute -right-48 -top-48 size-[520px] rounded-full blur-[130px]"
        style={{ background: 'rgba(128, 102, 230, 0.09)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <h2 className="max-w-4xl text-balance text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] text-[#17151c] sm:text-[4.25rem] lg:text-[5rem]">
            Shared ambition.
            <br />
            <span className="bg-gradient-to-r from-[#6246d9] via-[#8066e6] to-[#a99af0] bg-clip-text text-transparent">
              Real pathways.
            </span>
          </h2>

          <p className="max-w-md text-[15px] leading-7 text-[#706b77] lg:mb-1">
            We work alongside education leaders who share our belief that every
            student deserves a clearer path from preparation to opportunity.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#dfdce5] bg-white lg:mt-20">
          <PartnerCarousel />
        </div>
      </div>
    </section>
  )
}
