import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GradX | Placement Infrastructure for Colleges',
    short_name: 'GradX',
    description:
      'Placement infrastructure that connects student readiness, employer relationships, and placement operations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
