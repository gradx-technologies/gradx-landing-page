import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'GradX | The future of placements.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const colors = {
  background: '#fcfdff',
  foreground: '#0d0f18',
  muted: '#666b7e',
  border: '#e2e3eb',
  indigo: '#5966f3',
  violet: '#9d5bf4',
  lavender: '#b8a4f7',
  blue: '#3496ef',
  sky: '#51c7f1',
}

const stages = ['Prepare', 'Connect', 'Execute', 'Measure']

export default async function OpenGraphImage() {
  const [logo, medium, semibold, bold] = await Promise.all([
    readFile(join(process.cwd(), 'public', 'gx_logo.png'), 'base64'),
    readFile(join(process.cwd(), 'assets', 'Geist-500.ttf')),
    readFile(join(process.cwd(), 'assets', 'Geist-600.ttf')),
    readFile(join(process.cwd(), 'assets', 'Geist-700.ttf')),
  ])

  return new ImageResponse(
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: colors.background,
        fontFamily: 'Geist',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -260,
          left: -180,
          display: 'flex',
          width: 900,
          height: 760,
          backgroundImage:
            'radial-gradient(circle at center, rgba(157,91,244,0.38) 0%, rgba(252,253,255,0) 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: -200,
          bottom: -320,
          display: 'flex',
          width: 960,
          height: 820,
          backgroundImage:
            'radial-gradient(circle at center, rgba(52,150,239,0.34) 0%, rgba(252,253,255,0) 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 120,
          right: 80,
          display: 'flex',
          width: 520,
          height: 420,
          backgroundImage:
            'radial-gradient(circle at center, rgba(89,102,243,0.14) 0%, rgba(252,253,255,0) 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(13,15,24,0.07) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div style={{ position: 'absolute', top: 55, right: -170, display: 'flex', width: 520, height: 520, border: '1px solid rgba(89,102,243,0.18)', borderRadius: 9999 }} />
      <div style={{ position: 'absolute', top: 135, right: -90, display: 'flex', width: 360, height: 360, border: '1px solid rgba(157,91,244,0.22)', borderRadius: 9999 }} />
      <div style={{ position: 'absolute', top: 215, right: -10, display: 'flex', width: 200, height: 200, borderRadius: 9999, backgroundImage: `linear-gradient(135deg, ${colors.indigo}, ${colors.violet})`, opacity: 0.12 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', height: 6, backgroundImage: `linear-gradient(90deg, ${colors.indigo}, ${colors.violet}, ${colors.blue}, ${colors.sky})` }} />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', padding: '64px 80px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={`data:image/png;base64,${logo}`} width={125} height={54} alt="" />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 20px', border: `1px solid ${colors.border}`, borderRadius: 9999, backgroundColor: 'rgba(255,255,255,0.75)', color: colors.muted, fontSize: 20, fontWeight: 500 }}>
            <span style={{ display: 'flex', width: 9, height: 9, borderRadius: 9999, backgroundImage: `linear-gradient(135deg, ${colors.indigo}, ${colors.violet})` }} />
            Placement Infrastructure
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', marginBottom: 14, color: colors.indigo, fontSize: 30, fontWeight: 600, letterSpacing: '-0.01em' }}>Meet GradX.</div>
          <div style={{ display: 'flex', color: colors.foreground, fontSize: 104, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.055em' }}>The future of</div>
          <div style={{ display: 'flex', paddingBottom: 8, backgroundImage: `linear-gradient(90deg, ${colors.indigo} 0%, ${colors.violet} 55%, ${colors.lavender} 100%)`, backgroundClip: 'text', color: 'transparent', fontSize: 104, fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.055em' }}>placements.</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {stages.map((stage, index) => (
              <div key={stage} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', border: `1px solid ${colors.border}`, borderRadius: 9999, backgroundColor: 'rgba(255,255,255,0.8)', color: colors.foreground, fontSize: 20, fontWeight: 500 }}>{stage}</div>
                {index < stages.length - 1 && <div style={{ display: 'flex', width: 22, height: 2, backgroundImage: `linear-gradient(90deg, ${colors.indigo}, ${colors.violet})`, opacity: 0.6 }} />}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', color: colors.muted, fontSize: 22, fontWeight: 500 }}>gradx.app</div>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Geist', data: medium, weight: 500, style: 'normal' },
        { name: 'Geist', data: semibold, weight: 600, style: 'normal' },
        { name: 'Geist', data: bold, weight: 700, style: 'normal' },
      ],
    },
  )
}
