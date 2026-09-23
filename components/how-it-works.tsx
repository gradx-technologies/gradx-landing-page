import {
  ClipboardCheck,
  GraduationCap,
  Network,
  Send,
  MessagesSquare,
  BadgeCheck,
  Briefcase,
  LineChart,
} from 'lucide-react'

const PHASES = [
  {
    name: 'Prepare',
    gradient: 'from-[#6246d9] via-[#8066e6] to-[#a99af0]',
    description: 'Build readiness before opportunity arrives.',
    steps: [
      {
        icon: ClipboardCheck,
        label: 'Assess',
        body: 'Understand where each student stands across aptitude, technical skills, communication, and interview readiness.',
      },
      {
        icon: GraduationCap,
        label: 'Prepare',
        body: 'Identify skill gaps and deliver focused training that moves students closer to real hiring requirements.',
      },
    ],
  },
  {
    name: 'Connect',
    gradient: 'from-[#5941c8] via-[#7960df] to-[#a99af0]',
    description: 'Create the right bridge to opportunity.',
    steps: [
      {
        icon: Network,
        label: 'Connect',
        body: 'Discover and build relationships with employers that align with student capabilities, interests, and career paths.',
      },
      {
        icon: Send,
        label: 'Apply',
        body: 'Surface relevant opportunities and move eligible students through applications without fragmented spreadsheets or forms.',
      },
    ],
  },
  {
    name: 'Execute',
    gradient: 'from-[#6246d9] via-[#846be5] to-[#b39df5]',
    description: 'Move candidates through the hiring process.',
    steps: [
      {
        icon: MessagesSquare,
        label: 'Interview',
        body: 'Coordinate interview schedules, candidate communication, hiring drives, and every moving part between students and employers.',
      },
      {
        icon: BadgeCheck,
        label: 'Offer',
        body: 'Track selections, offers, acceptance, and candidate status so nothing gets lost after the hiring decision.',
      },
    ],
  },
  {
    name: 'Improve',
    gradient: 'from-[#5941c8] via-[#8065e2] to-[#b8a5f6]',
    description: 'Turn every outcome into a better next cycle.',
    steps: [
      {
        icon: Briefcase,
        label: 'Join',
        body: 'Follow students through joining and capture the final outcome beyond the placement offer.',
      },
      {
        icon: LineChart,
        label: 'Measure',
        body: 'Turn placement activity and outcomes into actionable insights for stronger decisions in the next cycle.',
      },
    ],
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-[#e7e4eb] bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

          <div>
            <h2 className="max-w-4xl text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] text-[#17151c] sm:text-[4.25rem] lg:text-[5rem]">
              A placement journey
              <br />
              <span className="bg-gradient-to-r from-[#6246d9] via-[#8066e6] to-[#a99af0] bg-clip-text text-transparent">
                designed as one system.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-7 text-[#716c78] lg:mb-1">
            From the first readiness assessment to the day a student joins,
            GradX keeps every part of the placement journey connected.
          </p>

        </div>


        {/* Main journey */}
        <div className="mt-20">

          {PHASES.map((phase, phaseIndex) => (
            <div
              key={phase.name}
              className={[
                'grid lg:grid-cols-[0.8fr_1.2fr]',
                phaseIndex !== PHASES.length - 1
                  ? 'border-b border-[#e5e2e9]'
                  : '',
              ].join(' ')}
            >

              {/* Phase */}
              <div className="relative overflow-hidden py-9 sm:py-11 lg:py-14 lg:pr-14">

                <div className="relative z-10">

                  <h3
                    className={`bg-gradient-to-r ${phase.gradient} bg-clip-text text-[2.75rem] font-semibold leading-none tracking-[-0.055em] text-transparent sm:text-[3.25rem] lg:text-[3.5rem]`}
                  >
                    {phase.name}
                  </h3>

                  <p className="mt-4 max-w-sm text-[13px] leading-6 text-[#706b77] sm:text-sm">
                    {phase.description}
                  </p>

                </div>

              </div>


              {/* Steps */}
              <div className="grid border-t border-[#e5e2e9] lg:grid-cols-2 lg:border-l lg:border-t-0">

                {phase.steps.map((step, stepIndex) => {
                  const Icon = step.icon

                  return (
                    <div
                      key={step.label}
                      className={[
                        'relative px-1 py-9 sm:px-3 sm:py-11 lg:px-10 lg:py-14',
                        stepIndex === 0
                          ? 'border-b lg:border-b-0'
                          : '',
                        stepIndex === 0
                          ? 'lg:border-r'
                          : '',
                        'border-[#e5e2e9]',
                      ].join(' ')}
                    >

                      {/* Icon */}
                      <div className="grid size-10 place-items-center rounded-xl bg-[#f2effb] text-[#6246d9]">
                        <Icon
                          className="size-[18px]"
                          strokeWidth={1.7}
                        />
                      </div>

                      {/* Step title */}
                      <h4 className="mt-6 text-xl font-semibold tracking-[-0.035em] text-[#17151c]">
                        {step.label}
                      </h4>

                      {/* Step description */}
                      <p className="mt-3 max-w-[340px] text-[13px] leading-6 text-[#77717d] sm:text-sm sm:leading-6">
                        {step.body}
                      </p>

                    </div>
                  )
                })}

              </div>

            </div>
          ))}

        </div>


        {/* Closing statement */}
        <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-[#17151c]">

          <div className="border-l-[3px] border-[#6246d9] px-7 py-8 sm:px-10 sm:py-10">

            <p className="max-w-5xl text-2xl font-medium leading-[1.25] tracking-[-0.035em] text-white sm:text-3xl lg:text-[2.15rem]">
              Every placement cycle becomes a system that gets
              <span className="text-[#a99af0]">
                {' '}better with every outcome.
              </span>
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}
