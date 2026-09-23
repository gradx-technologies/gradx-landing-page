import {
  Target,
  Compass,
  Heart,
  ArrowUpRight,
} from 'lucide-react'

const VALUES = [
  {
    icon: Target,
    title: 'Outcome-obsessed',
    body: 'Every feature and service traces back to a single question: did more students get placed well?',
  },
  {
    icon: Compass,
    title: 'Partner, not vendor',
    body: 'We embed with your placement cell and share your goals, timelines, and accountability.',
  },
  {
    icon: Heart,
    title: 'Student-first',
    body: 'Readiness, fairness, and genuine opportunity guide how we design every step of the journey.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-[#29262f] bg-[#17151c] text-white"
    >
      {/* Ambient violet light */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{
          background: 'rgba(98, 70, 217, 0.12)',
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-60 -right-40 h-[500px] w-[500px] rounded-full blur-[130px]"
        style={{
          background: 'rgba(169, 154, 240, 0.07)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32">

        {/* ================================================================ */}
        {/* INTRO                                                             */}
        {/* ================================================================ */}

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

          {/* Statement */}
          <div>
            <h2 className="max-w-4xl text-balance text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] text-white sm:text-[4.25rem] lg:text-[5rem]">
              We&rsquo;re building the connective tissue between{' '}
              <span className="bg-gradient-to-r from-[#6246d9] via-[#8066e6] to-[#a99af0] bg-clip-text text-transparent">
                education and employment.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="lg:pb-1">
            <p className="max-w-md text-[15px] leading-7 text-[#aaa5b0]">
              Talent and opportunity too often exist in separate systems.
              GradX brings institutions and employers onto shared
              infrastructure — creating a more connected path from
              preparation to placement.
            </p>
          </div>

        </div>

        {/* ================================================================ */}
        {/* VALUES                                                            */}
        {/* ================================================================ */}

        <div className="mt-20 border-t border-[#302d36] lg:mt-24">

          <div className="grid lg:grid-cols-3">

            {VALUES.map((value, index) => {
              const Icon = value.icon

              return (
                <div
                  key={value.title}
                  className={[
                    'relative py-9 sm:py-10 lg:px-9 lg:py-10',
                    index === 0 ? 'lg:pl-0' : '',
                    index === VALUES.length - 1 ? 'lg:pr-0' : '',
                    index !== 0
                      ? 'border-t border-[#302d36] lg:border-l lg:border-t-0'
                      : '',
                  ].join(' ')}
                >

                  {/* Icon */}
                  <div className="flex size-11 items-center justify-center rounded-full border border-[#39353f] bg-[#1d1a23]">
                    <Icon
                      className="size-[17px] text-[#a99af0]"
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-2xl font-medium tracking-[-0.035em] text-white sm:text-[1.7rem]">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#96919c] sm:text-[15px]">
                    {value.body}
                  </p>

                  {/* Small arrow */}
                  <ArrowUpRight
                    className="absolute right-0 top-10 size-4 text-[#514d57] lg:right-9"
                    strokeWidth={1.6}
                  />

                </div>
              )
            })}

          </div>
        </div>

       

      </div>
    </section>
  )
}
