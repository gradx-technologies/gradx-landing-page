'use client'

import { useEffect, useState } from 'react'
import { Menu, ArrowUpRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GradXMark } from '@/components/gradx-mark'

const NAV_LINKS = [
  { label: 'For Colleges', href: '#for-colleges' },
  { label: 'For Employers', href: '#for-employers' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Success Stories', href: '#results' },
  { label: 'About', href: '#about' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navigateToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const target = document.querySelector(href)
    if (!target) return

    event.preventDefault()
    setOpen(false)
    window.dispatchEvent(new CustomEvent('gradx:scroll-to', { detail: href }))
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50',
        'transition-all duration-300',
        scrolled || open
          ? 'border-b border-slate-200/80 bg-white/90 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[82px] max-w-[1280px] items-center px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#top"
          onClick={(event) => navigateToSection(event, '#top')}
          className="group flex shrink-0 items-center gap-3"
        >
          <GradXMark
            className="
              size-9
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />

          <span
            className="
              text-[20px]
              font-semibold
              tracking-[-0.03em]
              text-[#0B1220]
            "
          >
            GradX
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center gap-9 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => navigateToSection(event, link.href)}
              className="
                text-[15px]
                font-medium
                tracking-[-0.01em]
                text-slate-600
                transition-colors
                duration-200
                hover:text-[#0B1220]
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="ml-8 hidden items-center xl:flex">
          <a
            href="#contact"
            onClick={(event) => navigateToSection(event, '#contact')}
            className="
              group
              inline-flex
              h-11
              items-center
              gap-2
              rounded-full
              bg-[#0B1220]
              px-5
              text-[14px]
              font-medium
              text-white
              transition-all
              duration-200
              hover:bg-[#162238]
            "
          >
            Book a Discussion

            <ArrowUpRight
              className="
                size-4
                transition-transform
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="
            ml-auto
            flex
            size-10
            items-center
            justify-center
            rounded-full
            border border-slate-200/80
            bg-white/80
            text-[#0B1220]
            shadow-sm
            transition-all duration-300
            hover:scale-105 hover:bg-white
            xl:hidden
          "
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'overflow-hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl xl:hidden',
          'origin-top transition-all duration-300 ease-out',
          open
            ? 'pointer-events-auto max-h-[560px] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <nav id="mobile-navigation" className="mx-auto max-w-[1280px] px-6 py-4">

          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => navigateToSection(event, link.href)}
                className="
                  rounded-xl
                  px-4 py-3.5
                  text-[15px]
                  font-medium
                  text-slate-700
                  transition-all
                  hover:bg-[#f3f0fc]
                  hover:text-[#6246d9]
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(event) => navigateToSection(event, '#contact')}
            className="
              mt-3
              flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#0B1220]
              px-5
              text-[14px]
              font-medium
              text-white
              transition-all
              hover:bg-[#162238] hover:shadow-[0_10px_24px_rgba(11,18,32,0.18)]
            "
          >
            Book a Placement Discussion

            <ArrowUpRight className="size-4" />
          </a>

        </nav>
      </div>
    </header>
  )
}
