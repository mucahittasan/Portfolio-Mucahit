import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#08080a',
          backgroundImage:
            'radial-gradient(circle at 15% 10%, rgba(129,214,255,0.25), transparent 45%), radial-gradient(circle at 85% 20%, rgba(231,129,252,0.22), transparent 45%)',
          color: '#ededef',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, color: '#9a9aa4', letterSpacing: 4, textTransform: 'uppercase' }}>
          {site.focus.join('  ·  ')}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>{site.name}</div>
          <div
            style={{
              fontSize: 48,
              marginTop: 20,
              backgroundImage: 'linear-gradient(90deg, #81d6ff, #e781fc)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {site.role}
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#9a9aa4' }}>{site.url.replace('https://', '')}</div>
      </div>
    ),
    size,
  )
}
