import {
  GraduationCap,
  Network,
  Workflow,
  BarChart3,
} from 'lucide-react'

const PILLARS = [
  {
    icon: GraduationCap,
    name: 'Prepare',
    body: 'Get every student recruitment-ready before the opportunity arrives.',
    items: ['Resume building', 'Aptitude training', 'Communication', 'Mock interviews'],
    glow: 'radial-gradient(circle, rgba(141, 117, 235, 0.32) 0%, rgba(202, 191, 249, 0.12) 38%, transparent 70%)',
  },
  {
    icon: Network,
    name: 'Connect',
    body: 'Bring the right employers and opportunities to campus.',
    items: ['Employer outreach', 'Opportunity sourcing', 'Hiring drives', 'Role matching'],
    glow: 'radial-gradient(circle, rgba(111, 147, 236, 0.3) 0%, rgba(188, 211, 255, 0.12) 40%, transparent 70%)',
  },
  {
    icon: Workflow,
    name: 'Execute',
    body: 'Run every placement activity through one coordinated workflow.',
    items: ['Applications', 'Eligibility checks', 'Scheduling', 'Coordination'],
    glow: 'radial-gradient(circle, rgba(174, 115, 229, 0.28) 0%, rgba(226, 196, 250, 0.12) 40%, transparent 70%)',
  },
  {
    icon: BarChart3,
    name: 'Measure',
    body: 'Turn every placement cycle into insight.',
    items: ['Placement analytics', 'Outcome reports', 'Cohort tracking', 'Benchmarks'],
    glow: 'radial-gradient(circle, rgba(103, 167, 219, 0.28) 0%, rgba(186, 222, 247, 0.12) 40%, transparent 70%)',
  },
]

export function Solutions() {
  return (
    <section
      id="solutions"
      className="border-b border-[#e7e4eb] bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

        {/* Header */}
        <div className="max-w-4xl">
          <h2 className="text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] text-[#17151c] sm:text-[4.25rem] lg:text-[5rem]">
            One system for the
            <br />
            <span className="bg-gradient-to-r from-[#6246d9] via-[#8066e6] to-[#a99af0] bg-clip-text text-transparent">
              entire placement cycle.
            </span>
          </h2>
        </div>

        {/* Four pillars */}
        <div className="mt-20 grid gap-4 lg:grid-cols-4">

          {PILLARS.map((pillar) => {
            const Icon = pillar.icon

            return (
              <article
                key={pillar.name}
                className="relative min-h-[440px] overflow-hidden rounded-[1.75rem] border border-[#dfdce5] bg-[#fafafa] px-7 py-8 sm:px-8 sm:py-9"
              >

                {/* Subtle orbital form gives each pillar a visual signature. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full"
                  style={{ background: pillar.glow }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full border border-[#dfd9ee]/70"
                >
                  <div className="absolute inset-7 rounded-full border border-[#e7e2f2]" />
                  <div className="absolute inset-[4.5rem] rounded-full border border-[#ece8f5]" />
                </div>

                {/* Icon */}
                <div className="relative z-10 grid size-10 place-items-center rounded-xl bg-[#f0edfa] text-[#6246d9]">
                  <Icon
                    className="size-[18px]"
                    strokeWidth={1.7}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-24">

                  <h3 className="text-3xl font-semibold tracking-[-0.045em] text-[#17151c]">
                    {pillar.name}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#706b77]">
                    {pillar.body}
                  </p>

                  <div className="my-7 h-px bg-[#e3e0e7]" />

                  <ul className="space-y-3">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-[13px] text-[#625d68]"
                      >
                        <span className="size-1 rounded-full bg-[#8b73e8]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>
              </article>
            )
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-[#17151c]">

          <div className="border-l-[3px] border-[#6246d9] px-7 py-8 sm:px-10 sm:py-10">

            <p className="max-w-5xl text-2xl font-medium leading-[1.25] tracking-[-0.035em] text-white sm:text-3xl lg:text-[2.15rem]">
              One connected system for
              <span className="text-[#a99af0]">
                {' '}every stage of placement.
              </span>
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}
