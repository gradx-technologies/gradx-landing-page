import { GradXMark } from '@/components/gradx-mark'
import { Mail, Phone } from 'lucide-react'

const LINKS = [
  {
    title: 'Platform',
    items: [
      { label: 'Solutions', href: '#solutions' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Outcomes', href: '#results' },
    ],
  },
  {
    title: 'Who We Serve',
    items: [
      { label: 'For Colleges', href: '#for-colleges' },
      { label: 'For Employers', href: '#for-employers' },
      { label: 'Partner With Us', href: '#contact' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#17151c] text-white">
      {/* Ambient violet glow */}
      <div
        className="pointer-events-none absolute -left-56 -top-56 h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{
          background: 'rgba(98, 70, 217, 0.08)',
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-56 -right-48 h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{
          background: 'rgba(169, 154, 240, 0.05)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        {/* Main footer */}
        <div className="grid gap-12 border-t border-[#302d36] py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">

          {/* Large GradX wordmark */}
          <a
            href="#top"
            aria-label="GradX"
            className="relative flex h-[110px] items-center overflow-hidden"
          >
            <span
              aria-hidden="true"
              className="whitespace-nowrap text-[clamp(5rem,9vw,7.5rem)] font-semibold leading-none tracking-[-0.09em] text-[#211e27]"
            >
              GradX
            </span>
          </a>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-8 lg:gap-10">

            {/* Platform */}
            <div className="min-w-0 sm:min-w-[110px]">
              <p className="mb-5 text-sm font-medium text-white">
                Platform
              </p>

              <ul className="flex flex-col gap-3.5">
                {LINKS[0].items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-[#77727e] transition-colors hover:text-[#c5c0cc]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who We Serve */}
            <div className="min-w-0 sm:min-w-[130px]">
              <p className="mb-5 text-sm font-medium text-white">
                Who We Serve
              </p>

              <ul className="flex flex-col gap-3.5">
                {LINKS[1].items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-[#77727e] transition-colors hover:text-[#c5c0cc]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 min-w-0 sm:col-span-1 sm:min-w-[100px]">
              <p className="mb-5 text-sm font-medium text-white">
                Company
              </p>

              <ul className="flex flex-col gap-3.5">
                {LINKS[2].items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-[#77727e] transition-colors hover:text-[#c5c0cc]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Contact strip */}
        <div className="border-t border-[#302d36] py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="mailto:partnerships@gradx.app"
              className="group flex w-fit items-center gap-3"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#39353f] bg-[#1d1a23]">
                <Mail
                  className="size-4 text-[#a99af0]"
                  strokeWidth={1.7}
                />
              </span>

              <span className="text-sm font-medium text-[#c5c0cc] transition-colors group-hover:text-white">
                partnerships@gradx.app
              </span>
            </a>

            <a
              href="tel:+911800000000"
              className="group flex w-fit items-center gap-3"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#39353f] bg-[#1d1a23]">
                <Phone
                  className="size-4 text-[#a99af0]"
                  strokeWidth={1.7}
                />
              </span>

              <span className="text-sm font-medium text-[#c5c0cc] transition-colors group-hover:text-white">
                +91 91486 30441
              </span>
            </a>
          </div>

          {/* Copyright + legal links, aligned to the right of the strip */}
          <div className="mt-6 flex flex-col gap-4 border-t border-[#302d36] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-[#77727e]">
              © {new Date().getFullYear()} GradX. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
              <a
                href="#top"
                className="text-[#77727e] transition-colors hover:text-white"
              >
                Privacy
              </a>

              <a
                href="#top"
                className="text-[#77727e] transition-colors hover:text-white"
              >
                Terms
              </a>

              <a
                href="#contact"
                className="text-[#77727e] transition-colors hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
