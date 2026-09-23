'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

/** Smooth scrolling only. Intentionally contains no visual scroll effects. */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.25,
      anchors: { offset: 104 },
      respectReducedMotion: false,
    })

    let rafId = 0
    const animate = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    const scrollToSection = (event: Event) => {
      const selector = (event as CustomEvent<string>).detail
      if (typeof selector !== 'string') return

      const target = document.querySelector<HTMLElement>(selector)
      if (!target) return

      lenis.scrollTo(target, { offset: -104 })
      window.history.replaceState(null, '', selector)
    }

    window.addEventListener('gradx:scroll-to', scrollToSection)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('gradx:scroll-to', scrollToSection)
      lenis.destroy()
    }
  }, [])

  return null
}
