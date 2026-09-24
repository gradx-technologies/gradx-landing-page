import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'GradX, the future of placements'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const stages = ['Prepare', 'Connect', 'Execute', 'Measure']

export default async function OpenGraphImage() {
  const [logo, geist] = await Promise.all([
    readFile(join(process.cwd(), 'public', 'gx_logo.png'), 'base64'),
    readFile(join(process.cwd(), 'node_modules', 'next', 'dist', 'compiled', '@vercel', 'og', 'Geist-Regular.ttf')),
  ])

  return new ImageResponse(
    <div style={{ position: 'relative', display: 'flex', width: '100%', height: '100%', overflow: 'hidden', background: 'linear-gradient(135deg, #fbfaff 0%, #f5f2ff 54%, #e9e4ff 100%)', color: '#17151c', fontFamily: 'Geist' }}>
      <div style={{ position: 'absolute', top: -256, right: -26, width: 660, height: 660, border: '1px solid rgba(124, 96, 225, 0.16)', borderRadius: 9999 }} />
      <div style={{ position: 'absolute', top: -154, right: 76, width: 458, height: 458, border: '1px solid rgba(124, 96, 225, 0.14)', borderRadius: 9999 }} />
      <div style={{ position: 'absolute', right: -150, bottom: -215, width: 860, height: 290, borderRadius: 9999, transform: 'rotate(-8deg)', background: 'linear-gradient(90deg, rgba(223, 217, 255, 0) 0%, rgba(183, 163, 246, 0.36) 100%)' }} />
      <div style={{ position: 'absolute', right: 130, bottom: -125, width: 690, height: 220, borderTop: '1px solid rgba(255, 255, 255, 0.82)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', top: 160, right: 90, width: 18, height: 18, borderRadius: 9999, background: 'linear-gradient(135deg, #c8bef7 0%, #6246d9 100%)', boxShadow: '0 8px 20px rgba(98, 70, 217, 0.28)' }} />
      <div style={{ position: 'absolute', top: 242, right: 74, width: 80, height: 80, borderRadius: 9999, background: 'radial-gradient(circle at 34% 25%, #f0edff 0%, #a990fa 30%, #6246d9 100%)', boxShadow: '0 18px 38px rgba(98, 70, 217, 0.22)' }} />
      <div style={{ position: 'absolute', right: 160, bottom: 83, width: 66, height: 66, borderRadius: 9999, background: 'radial-gradient(circle at 34% 25%, #f0edff 0%, #a990fa 30%, #6246d9 100%)', boxShadow: '0 18px 38px rgba(98, 70, 217, 0.20)' }} />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', width: '100%', height: '100%', padding: '48px 70px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={`data:image/png;base64,${logo}`} width={126} height={53} style={{ objectFit: 'contain', objectPosition: 'left center' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, color: '#514b5a', fontSize: 17, letterSpacing: '0.16em' }}>
            <span style={{ width: 12, height: 12, borderRadius: 9999, background: 'linear-gradient(135deg, #c6bbff 0%, #6246d9 100%)' }} />
            GRADX.APP
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 95, textAlign: 'center' }}>
          <div style={{ display: 'flex', fontSize: 72, lineHeight: 1, fontWeight: 700, letterSpacing: '0em', textShadow: '1.35px 0 #17151c, -1.35px 0 #17151c' }}>Meet GradX.</div>
          <div style={{ display: 'flex', marginTop: 15, color: '#6246d9', fontSize: 59, lineHeight: 1, fontWeight: 700, letterSpacing: '0em', textShadow: '1.35px 0 #6246d9, -1.35px 0 #6246d9' }}>The future of placements.</div>

          <div style={{ display: 'flex', alignItems: 'center', marginTop: 42, border: '1px solid rgba(128, 102, 230, 0.18)', borderRadius: 9999, background: 'rgba(255, 255, 255, 0.46)', padding: '13px 22px', color: '#55505d', fontSize: 17, letterSpacing: '0.055em' }}>
            {stages.map((stage, index) => (
              <div key={stage} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {index > 0 && <span style={{ width: 1, height: 20, margin: '0 20px', background: 'rgba(128, 102, 230, 0.2)' }} />}
                <span style={{ width: 7, height: 7, borderRadius: 9999, background: index === 3 ? '#a99af0' : '#8066e6' }} />
                <span>{stage.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    { ...size, fonts: [{ name: 'Geist', data: geist, weight: 400, style: 'normal' }] },
  )
}
