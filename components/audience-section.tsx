import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  Handshake,
  UserCheck,
  CalendarClock,
  PieChart,
  Building,
  Sprout,
  BriefcaseBusiness,
  ScanSearch,
  Layers,
} from 'lucide-react'

type Capability = {
  icon: LucideIcon
  title: string
}

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

const COLLEGE_CAPABILITIES: Capability[] = [
  {
    icon: Handshake,
    title: 'Employer relationships',
  },
  {
    icon: UserCheck,
    title: 'Student readiness',
  },
  {
    icon: CalendarClock,
    title: 'Recruitment coordination',
  },
  {
    icon: PieChart,
    title: 'Placement intelligence',
  },
]

const EMPLOYER_CAPABILITIES: Capability[] = [
  {
    icon: Building,
    title: 'Campus hiring',
  },
  {
    icon: Sprout,
    title: 'Fresher talent',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Internship pipelines',
  },
  {
    icon: ScanSearch,
    title: 'Candidate screening',
  },
  {
    icon: Layers,
    title: 'Multi-campus hiring',
  },
]

/* -------------------------------------------------------------------------- */
/* CAPABILITY ROW                                                             */
/* -------------------------------------------------------------------------- */

function CapabilityRow({
  icon: Icon,
  title,
}: Capability) {
  return (
    <div className="flex items-center gap-4 border-t border-[#e5e2e9] py-4">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#eeeaff]">
        <Icon
          className="size-3.5 text-[#6246d9]"
          strokeWidth={1.8}
        />
      </div>

      <span className="text-[15px] font-medium tracking-[-0.01em] text-[#34313a]">
        {title}
      </span>

      <ArrowUpRight
        className="ml-auto size-4 text-[#b0abb7]"
        strokeWidth={1.8}
      />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* 2D GRADIENT LIGHTNING                                                      */
/* -------------------------------------------------------------------------- */

function GradientBolt() {
  return (
    <div className="relative flex h-[230px] w-[180px] items-center justify-center">
      {/* Soft violet glow. */}
      <div
        className="pointer-events-none absolute inset-0 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(98,70,217,0.22) 0%, rgba(169,154,240,0.12) 38%, transparent 72%)',
        }}
      />

      {/* 2D gradient lightning. */}
      <svg
        viewBox="0 0 100 140"
        className="relative z-10 h-[150px] w-[110px] will-change-transform"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="gradx-bolt"
            x1="18"
            y1="10"
            x2="82"
            y2="130"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#6246d9" />
            <stop offset="45%" stopColor="#8066e6" />
            <stop offset="75%" stopColor="#a99af0" />
            <stop offset="100%" stopColor="#c8bef7" />
          </linearGradient>
        </defs>

        <path
          d="M59 4L18 76H46L38 136L83 61H55L59 4Z"
          fill="url(#gradx-bolt)"
        />
      </svg>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* AUDIENCE SECTION                                                           */
/* -------------------------------------------------------------------------- */

function AudienceSection() {
  return (
    <section
      id="audience"
      className="overflow-hidden border-b border-[#e5e2e9] bg-[#fafafa]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32">

        {/* ---------------------------------------------------------------- */}
        {/* INTRO                                                             */}
        {/* ---------------------------------------------------------------- */}

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="text-balance text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] text-[#17151c] sm:text-[4.25rem] lg:text-[5rem]">
              Where opportunity
              <br />
              <span className="bg-gradient-to-r from-[#6246d9] via-[#8066e6] to-[#a99af0] bg-clip-text text-transparent">
                meets readiness.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-7 text-[#716c78] lg:mb-1">
            GradX brings institutions and employers into one connected
            placement ecosystem — making it easier to prepare talent,
            create opportunity, and move both sides forward.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* NETWORK                                                           */}
        {/* ---------------------------------------------------------------- */}

        <div className="relative mt-24 lg:mt-32">

          {/* Central vertical connector */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#d9d5e1] to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid items-center lg:grid-cols-[1fr_220px_1fr] lg:gap-0">

            {/* ============================================================ */}
            {/* COLLEGES                                                      */}
            {/* ============================================================ */}

            <div className="lg:pr-16">
              <div className="mb-10">
                <h3 className="text-[2.5rem] font-medium leading-[1] tracking-[-0.045em] text-[#17151c] sm:text-[3.25rem]">
                  Colleges
                </h3>

                <p className="mt-5 max-w-md text-lg leading-7 text-[#6d6873]">
                  Build a placement ecosystem that prepares more students
                  and creates stronger employer relationships.
                </p>
              </div>

              <div>
                {COLLEGE_CAPABILITIES.map((item) => (
                  <CapabilityRow
                    key={item.title}
                    {...item}
                  />
                ))}
              </div>
            </div>

            {/* ============================================================ */}
            {/* CENTER — LIGHTNING                                             */}
            {/* ============================================================ */}

            <div className="relative flex items-center justify-center py-16 lg:py-0">
              <GradientBolt />
            </div>

            {/* ============================================================ */}
            {/* EMPLOYERS                                                     */}
            {/* ============================================================ */}

            <div className="lg:pl-16">
              <div className="mb-10">
                <h3 className="text-[2.5rem] font-medium leading-[1] tracking-[-0.045em] text-[#17151c] sm:text-[3.25rem]">
                  Employers
                </h3>

                <p className="mt-5 max-w-md text-lg leading-7 text-[#6d6873]">
                  Reach relevant, prepared talent across institutions
                  through one coordinated hiring pipeline.
                </p>
              </div>

              <div>
                {EMPLOYER_CAPABILITIES.map((item) => (
                  <CapabilityRow
                    key={item.title}
                    {...item}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* DARK EDITORIAL CLOSING                                            */}
        {/* ---------------------------------------------------------------- */}

        <div className="mt-24 overflow-hidden rounded-[1.75rem] bg-[#17151c] lg:mt-32">
          <div className="border-l-[3px] border-[#6246d9] px-7 py-8 sm:px-10 sm:py-10">
            <p className="max-w-5xl text-2xl font-medium leading-[1.25] tracking-[-0.035em] text-white sm:text-3xl lg:text-[2.15rem]">
              Better preparation creates better opportunity.
              <span className="text-[#a99af0]">
                {' '}GradX connects the two.
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* EXISTING EXPORTS                                                          */
/* -------------------------------------------------------------------------- */

/*
 * page.tsx currently imports both:
 *
 *   ForColleges
 *   ForEmployers
 *
 * The new design combines both audiences into one section,
 * so we render the section through ForColleges and prevent
 * ForEmployers from rendering a duplicate section.
 */

export function ForColleges() {
  return <AudienceSection />
}

export function ForEmployers() {
  return null
}
