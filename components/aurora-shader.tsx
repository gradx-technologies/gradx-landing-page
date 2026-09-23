'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

// Domain-warped fbm (fractal brownian motion) that paints soft, flowing
// bands of the GradX brand palette — indigo, violet, blue and sky — over
// the near-white page background. Domain warping gives the colour fields
// that silk-like, aurora quality instead of plain blobby noise.
const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

float hash(vec2 p) {
  p = fract(p * vec2(233.33, 851.73));
  p += dot(p, p + 23.45);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 0.55;
  mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 5; i++) {
    value += amp * noise(p);
    p = rot * p * 2.02;
    amp *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  float t = u_time * 0.05;

  vec2 q = vec2(
    fbm(p * 1.4 + vec2(0.0, t)),
    fbm(p * 1.4 + vec2(5.2, -t * 0.8))
  );

  vec2 r = vec2(
    fbm(p * 1.9 + q * 1.6 + vec2(1.7, 9.2) + t * 0.6),
    fbm(p * 1.9 + q * 1.6 + vec2(8.3, 2.8) - t * 0.4)
  );

  float f = fbm(p * 1.7 + r * 1.9);

  vec3 base   = vec3(0.984, 0.984, 0.996);
  vec3 indigo = vec3(0.38, 0.40, 0.93);
  vec3 violet = vec3(0.58, 0.40, 0.95);
  vec3 blue   = vec3(0.42, 0.60, 0.97);
  vec3 sky    = vec3(0.66, 0.82, 0.98);

  vec3 col = base;
  col = mix(col, sky,    smoothstep(0.30, 0.95, f) * 0.42);
  col = mix(col, blue,   smoothstep(0.42, 1.00, f) * 0.38);
  col = mix(col, violet, smoothstep(0.48, 1.05, r.y) * 0.34);
  col = mix(col, indigo, smoothstep(0.52, 1.10, r.x) * 0.36);

  // Gentle glow behind the headline area.
  float glow = exp(-3.0 * length((uv - vec2(0.5, 1.05)) * vec2(1.4, 1.0)));
  col = mix(col, mix(sky, violet, 0.35), glow * 0.30);

  // Dither to prevent banding on the soft gradients.
  col += (hash(gl_FragCoord.xy * 0.7) - 0.5) * 0.006;

  gl_FragColor = vec4(col, 1.0);
}
`

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

// CSS-only aurora used when WebGL is unavailable.
function CssAuroraFallback({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('absolute inset-0 overflow-hidden', className)}
    >
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-blob aurora-blob-4" />
    </div>
  )
}

export function AuroraShader({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [webglFailed, setWebglFailed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'low-power',
    })
    if (!gl) {
      setWebglFailed(true)
      return
    }

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
    const program = gl.createProgram()
    if (!vertexShader || !fragmentShader || !program) {
      setWebglFailed(true)
      return
    }
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setWebglFailed(true)
      return
    }
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    )
    const aPosition = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(aPosition)
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)

    const uResolution = gl.getUniformLocation(program, 'u_resolution')
    const uTime = gl.getUniformLocation(program, 'u_time')

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.max(1, Math.floor(canvas.clientWidth * dpr))
      const height = Math.max(1, Math.floor(canvas.clientHeight * dpr))
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        gl.viewport(0, 0, width, height)
      }
    }
    resize()

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let rafId = 0
    const start = performance.now()

    const render = (now: number) => {
      resize()
      gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.uniform1f(uTime, (now - start) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    const loop = (now: number) => {
      render(now)
      rafId = requestAnimationFrame(loop)
    }

    if (reducedMotion.matches) {
      // Static frame for users who prefer reduced motion.
      render(start + 20_000)
    } else {
      rafId = requestAnimationFrame(loop)
    }

    const onVisibilityChange = () => {
      if (reducedMotion.matches) return
      if (document.hidden) {
        cancelAnimationFrame(rafId)
      } else {
        rafId = requestAnimationFrame(loop)
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    const observer = new ResizeObserver(() => {
      if (reducedMotion.matches) render(performance.now())
    })
    observer.observe(canvas)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      observer.disconnect()
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [])

  if (webglFailed) {
    return <CssAuroraFallback className={className} />
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn('absolute inset-0 block h-full w-full', className)}
    />
  )
}
