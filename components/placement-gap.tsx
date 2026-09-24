import { Users, Building2, ClipboardList } from "lucide-react";

const GAPS = [
  {
    icon: Users,
    title: "Talent exists.",
    highlight: "Readiness doesn’t scale.",
    body: "Aptitude, communication, and interview preparation vary across every batch. This leaves capable students underprepared when opportunities arrive.",
  },
  {
    icon: Building2,
    title: "Opportunities exist.",
    highlight: "Access doesn’t scale.",
    body: "Placement teams often rely on a limited recruiter network, restricting students from discovering new companies, roles, and pathways.",
  },
  {
    icon: ClipboardList,
    title: "The process exists.",
    highlight: "Infrastructure doesn’t scale.",
    body: "Eligibility, applications, scheduling, communication, and follow-ups remain scattered across spreadsheets, forms, and chats.",
  },
];

export function PlacementGap() {
  return (
    <section className="relative overflow-hidden border-b border-[#e7e4eb] bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="max-w-4xl text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] text-[#17151c] sm:text-[4.25rem] lg:text-[5rem]">
              Between education
              <br />
              and employment lies a{" "}
              <span className="bg-gradient-to-r from-[#6246d9] via-[#8066e6] to-[#a99af0] bg-clip-text text-transparent">
                system gap.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-7 text-[#716c78] lg:mb-1">
            Most institutions already have talented students and willing
            employers. What’s missing is the infrastructure connecting the two
            reliably.
          </p>
        </div>

        {/* Three-column gap */}
        <div className="mt-20 grid overflow-hidden rounded-[2rem] border border-[#dfdce5] bg-white lg:grid-cols-3">
          {GAPS.map((gap, index) => {
            const Icon = gap.icon;

            return (
              <article
                key={gap.title}
                className={[
                  "relative flex min-h-[430px] flex-col overflow-hidden px-7 py-8 sm:px-9 sm:py-10",
                  index !== GAPS.length - 1
                    ? "border-b border-[#e5e2e9] lg:border-b-0 lg:border-r"
                    : "",
                ].join(" ")}
              >
                {/* Large background number. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-2 select-none text-[10rem] font-semibold leading-none tracking-[-0.1em] text-[#f5f3fa] will-change-transform sm:text-[11rem]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative z-10">
                  <div className="grid size-10 place-items-center rounded-xl bg-[#f3f0fc] text-[#6246d9]">
                    <Icon className="size-[18px]" strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto pt-24">
                  <h3 className="text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#17151c]">
                    {gap.title}
                    <br />
                    <span className="text-[#6246d9]">{gap.highlight}</span>
                  </h3>

                  <div className="mt-7 h-px w-8 bg-[#6246d9]" />

                  <p className="mt-6 max-w-[330px] text-[14px] leading-7 text-[#706b77]">
                    {gap.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* The underlying problem */}
        <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-[#17151c]">
          <div className="relative px-7 py-9 sm:px-10 sm:py-11 lg:px-12 lg:py-12">
            {/* Subtle vertical accent */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#6246d9]"
            />

            <div className="max-w-4xl">
              <p className="text-2xl font-medium leading-[1.25] tracking-[-0.035em] text-white sm:text-3xl lg:text-[2.1rem]">
                Placement is treated as an event.
                <br className="hidden sm:block" />
                <span className="text-[#a99af0]">
                  It needs to be treated as infrastructure.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
