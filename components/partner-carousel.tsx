'use client'

import Image from 'next/image'
import { PARTNERS } from '@/data/partners'
import styles from './partner-carousel.module.css'

export function PartnerCarousel() {
  if (PARTNERS.length === 0) return null

  // 2x duplication for seamless infinite loop (keyframe translates -50%)
  const scrollList = [...PARTNERS, ...PARTNERS]

  return (
    <div
      role="region"
      aria-label="Partner institutions"
      className="relative flex w-full items-center overflow-hidden"
    >
      {/* Soft gradient fades at edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-32 lg:w-48 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/80 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-32 lg:w-48 bg-gradient-to-l from-[#fafafa] via-[#fafafa]/80 to-transparent"
        aria-hidden="true"
      />

      {/* Infinite Horizontal Marquee */}
      <div className={styles.marqueeTrack}>
        {scrollList.map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className="flex shrink-0 items-center justify-center px-4 sm:px-6 lg:px-8"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
              className={styles.partnerLogo}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
