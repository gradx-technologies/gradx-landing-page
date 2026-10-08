'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { PARTNERS} from '@/data/partners'
import styles from './partner-carousel.module.css'

const SLIDES = PARTNERS.length === 1
  ? [...PARTNERS]
  : PARTNERS
const SLIDE_INTERVAL = 5000

export function PartnerCarousel() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [visible, setVisible] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const hasMultipleSlides = SLIDES.length > 1
  const currentSlide = Math.min(active, Math.max(0, SLIDES.length - 1))
  const autoplay = hasMultipleSlides && !hovered && !focused &&
    visible && pageVisible

  useEffect(() => {
    const updateVisibility = () => setPageVisible(document.visibilityState === 'visible')
    updateVisibility()
    document.addEventListener('visibilitychange', updateVisibility)

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, { threshold: 0.15 })
    if (carouselRef.current) observer.observe(carouselRef.current)

    return () => {
      document.removeEventListener('visibilitychange', updateVisibility)
      observer.disconnect()
    }
  }, [])

  function moveSlide(offset: number) {
    if (!hasMultipleSlides) return
    setActive((index) => (index + offset + SLIDES.length) % SLIDES.length)
  }

  if (SLIDES.length === 0) return null

  return (
    <div
      ref={carouselRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="College partner stories"
      className="relative grid touch-pan-y lg:grid-cols-[0.82fr_1.18fr]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
      }}
      onKeyDown={(event) => {
        if (!hasMultipleSlides) return
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault()
          moveSlide(event.key === 'ArrowRight' ? 1 : -1)
        }
      }}
      onTouchStart={(event) => {
        const touch = event.touches[0]
        touchStart.current = { x: touch.clientX, y: touch.clientY }
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current
        touchStart.current = null
        if (!start || !hasMultipleSlides) return
        const touch = event.changedTouches[0]
        const deltaX = touch.clientX - start.x
        const deltaY = touch.clientY - start.y
        if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
          moveSlide(deltaX < 0 ? 1 : -1)
        }
      }}
      onTouchCancel={() => { touchStart.current = null }}
    >
      <div className="relative flex flex-col justify-between border-b border-[#e5e2e9] p-8 sm:p-10 lg:min-h-[410px] lg:border-b-0 lg:p-12">
        <div>
          <h3 className="max-w-md text-3xl font-medium leading-[1.08] tracking-[-0.045em] text-[#17151c] sm:text-[2.35rem]">
            Building better outcomes,{' '}
            <span className="text-[#8066e6]">together.</span>
          </h3>

          <div className="mt-12 grid sm:mt-14" aria-live={autoplay ? 'off' : 'polite'} aria-atomic="true">
            {SLIDES.map((partner, index) => (
              <div
                key={partner.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${SLIDES.length}: ${partner.name}`}
                aria-hidden={index !== currentSlide}
                className={`${styles.storySlide} ${index === currentSlide ? styles.active : ''}`}
              >
                <p className="max-w-md text-sm leading-6 text-[#706b77] sm:text-[15px] sm:leading-7">
                  <strong className="font-semibold text-[#17151c]">{partner.name}</strong>{' '}
                  {partner.description}
                </p>
                {partner.isPreview && (
                  <span className="mt-3 inline-block rounded-full bg-[#f0edfa] px-2 py-0.5 text-[10px] tracking-wide text-[#6246d9]">
                    Preview
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-1">
              {hasMultipleSlides && SLIDES.map((partner, index) => (
                <button
                  key={partner.id}
                  type="button"
                  aria-label={`Show partner slide ${index + 1}`}
                  aria-current={index === currentSlide ? 'true' : undefined}
                  onClick={() => setActive(index)}
                  className="grid h-10 min-w-8 place-items-center rounded-full px-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8066e6]"
                >
                  <span className={`h-1.5 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none ${index === currentSlide ? 'w-7 bg-[#8066e6]' : 'w-1.5 bg-[#d6d1df]'}`} />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous partner"
                disabled={!hasMultipleSlides}
                onClick={() => moveSlide(-1)}
                className="grid size-10 place-items-center rounded-full border border-[#e5e2e9] text-[#17151c] transition-colors enabled:hover:border-[#bcb1e8] enabled:hover:bg-[#f0edfa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8066e6] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next partner"
                disabled={!hasMultipleSlides}
                onClick={() => moveSlide(1)}
                className="grid size-10 place-items-center rounded-full border border-[#e5e2e9] text-[#17151c] transition-colors enabled:hover:border-[#bcb1e8] enabled:hover:bg-[#f0edfa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8066e6] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {hasMultipleSlides && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-[#e5e2e9] lg:inset-y-0 lg:right-0 lg:left-auto lg:h-auto lg:w-px" aria-hidden="true">
            <span
              key={currentSlide}
              className={styles.progressFill}
              style={{
                animationDuration: `${SLIDE_INTERVAL}ms`,
                animationPlayState: autoplay ? 'running' : 'paused',
              }}
              onAnimationEnd={() => {
                setActive((index) => (index + 1) % SLIDES.length)
              }}
            />
          </div>
        )}
      </div>

      <div className="relative grid min-h-[280px] items-center overflow-hidden bg-[#fcfbfe] px-8 py-8 sm:min-h-[420px] sm:px-12 sm:py-12">
        <div
          className="dot-bg pointer-events-none absolute inset-0 opacity-35"
          style={{
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 72%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 72%)',
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] sm:size-[380px]"
          style={{ background: 'rgba(169, 154, 240, 0.16)' }}
          aria-hidden="true"
        />
        {SLIDES.map((partner, index) => (
          <div
            key={partner.id}
            aria-hidden={index !== currentSlide}
            className={`relative grid place-items-center ${styles.logoSlide} ${index === currentSlide ? styles.active : ''}`}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 390px"
              className="h-auto w-full max-w-[260px] opacity-[0.82] sm:max-w-[390px]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
