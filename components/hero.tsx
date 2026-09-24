'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  Shader,
  Swirl,
  ChromaFlow,
  FlutedGlass,
  FilmGrain,
} from 'shaders/react'

export function Hero() {
  const [shaderUnavailable, setShaderUnavailable] = useState(false)

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-[linear-gradient(160deg,#ffffff_0%,#eee9ff_30%,#e3e5ff_58%,#dde9ff_82%,#f7f7ff_100%)] text-[#16161d] antialiased"
    >
      {/* Soft lavender/blue glow. */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(60% 50% at 20% 16%, rgba(167,139,250,0.16) 0%, transparent 70%), radial-gradient(55% 45% at 84% 80%, rgba(129,166,255,0.14) 0%, transparent 72%)',
        }}
      />

      {/* WebGPU shader background. */}
      <div
        className="pointer-events-none absolute inset-x-0 -inset-y-20 opacity-45"
        aria-hidden="true"
      >
        {shaderUnavailable ? null : (
          <Shader
            className="shader-canvas"
            onUnavailable={() => setShaderUnavailable(true)}
          >
            <Swirl
              colorA="#ffffff"
              colorB="#f0f0f0"
              detail={1.7}
            />

            <ChromaFlow
              baseColor="#ffffff"
              downColor="#ffffff"
              leftColor="#f0f0f0"
              rightColor="#ebebf0"
              upColor="#f7f7f9"
              momentum={13}
              radius={3.5}
            />

            <FlutedGlass
              aberration={0.61}
              angle={31}
              frequency={8}
              highlight={0.12}
              highlightSoftness={0}
              lightAngle={-90}
              refraction={4}
              shape="rounded"
              softness={1}
              speed={0.15}
            />

            <FilmGrain strength={0.05} />
          </Shader>
        )}
      </div>

      <div
        className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-12"
      >

        {/* Main headline */}
        <h1 className="max-w-4xl text-balance text-[clamp(2.75rem,6vw,5.25rem)] font-medium leading-[1] tracking-[-0.055em] text-[#16161d]">

          Meet GradX.

          <br />

          <span className="bg-gradient-to-r from-[#6246d9] via-[#8066e6] to-[#a99af0] bg-clip-text font-semibold text-transparent lg:whitespace-nowrap">
            The future of placements.
          </span>

        </h1>

        {/* Supporting copy */}
        <p className="mt-7 max-w-2xl text-balance text-[15px] leading-7 text-[#5c5c6b] sm:text-base sm:leading-7 lg:text-[17px]">
          GradX helps institutions prepare students, build stronger employer
          relationships, and run placement operations through one connected
          system, from readiness to offer.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">

          {/* Primary CTA */}
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#16161d] px-6 text-[13px] font-medium text-white shadow-[0_8px_30px_rgba(22,22,29,0.14)]"
          >
            Partner With Us
            <ArrowRight className="size-3.5" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#how-it-works"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#bdb9c8]/80 bg-white/30 px-6 text-[13px] font-medium text-[#25232b] backdrop-blur-sm"
          >
            Explore How It Works
          </a>

        </div>

      </div>
    </section>
  )
}
