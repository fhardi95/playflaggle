import { Syne, DM_Sans } from 'next/font/google'
import { SITE } from '../lib/data'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Free Daily Flag Quiz Game`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'flag quiz', 'daily flag quiz', 'guess the flag', 'flag quiz game',
    'geography quiz', 'flag wordle', 'country flag quiz',
    'flags of the world quiz', 'free flag quiz', 'play flaggle',
  ],
  authors: [{ name: 'PlayFlaggle Team' }],
  creator: 'PlayFlaggle',
  publisher: 'PlayFlaggle',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Free Daily Flag Quiz`,
    description: SITE.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PlayFlaggle Daily Flag Quiz' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — Free Daily Flag Quiz`,
    description: SITE.description,
    creator: SITE.twitter,
    images: ['/og-image.png'],
  },
  alternates: { canonical: SITE.url },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>{children}</body>
    </html>
  )
}
