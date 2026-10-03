import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://gradx.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GradX | Placement Infrastructure for Colleges',
    template: '%s | GradX',
  },
  applicationName: 'GradX',
  description:
    'GradX is placement infrastructure for colleges. Prepare students, build stronger employer connections, and run every stage of placement through one connected system.',
  keywords: [
    'placement infrastructure for colleges',
    'college placement management',
    'campus recruitment platform',
    'student employability platform',
    'employer relations for colleges',
    'GradX',
  ],
  creator: 'GradX',
  publisher: 'GradX',
  category: 'Education technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'GradX',
    title: 'GradX | Placement Infrastructure for Colleges',
    description:
      'Prepare students, strengthen employer relationships, and run placement operations through one connected system.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GradX | Placement Infrastructure for Colleges',
    description:
      'Prepare students, strengthen employer relationships, and run placement operations through one connected system.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
