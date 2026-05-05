import Link from 'next/link'
import { FAQ, SITE } from '../../lib/data'
import FaqClient from '../../components/FaqClient'

export const metadata = {
  title: 'FAQ — PlayFlaggle Daily Flag Quiz Help',
  description: 'Everything you need to know about PlayFlaggle — how the daily quiz works, streaks, scoring, sharing results, and more.',
  keywords: ['flag quiz faq', 'how to play flag quiz', 'playflaggle help', 'daily quiz rules'],
  alternates: { canonical: `${SITE.url}/faq` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE.url}/faq` },
  ],
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Play<span>Flaggle</span></Link>
          <div className="nav-links">
            <Link href="/#quiz">Play</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/wiki">Wiki</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <Link href="/#quiz" className="nav-cta">Play Free →</Link>
        </div>
      </nav>

      <main>
        <div style={{ padding: '3rem 0 2rem', borderBottom: '1px solid var(--border)', background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(26,171,109,.08) 0%, transparent 70%)' }}>
          <div className="container-narrow">
            <nav className="breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>FAQ</span>
            </nav>
            <div className="section-tag">Help</div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.1, marginBottom: '.75rem' }}>
              Frequently Asked Questions
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Everything you need to know about PlayFlaggle — how it works, how scoring works, and how to get the most from your daily quiz habit.
            </p>
          </div>
        </div>

        <div className="container-narrow" style={{ padding: '3rem 1.25rem 5rem' }}>
          <FaqClient faqs={FAQ} />

          <div style={{ marginTop: '3rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.5rem 2rem', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-.03em', marginBottom: '.5rem' }}>
              Still have a question?
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '1.25rem' }}>Can't find the answer you're looking for? Get in touch.</p>
            <Link href="/contact" className="btn btn-ghost btn-sm">Contact us →</Link>
          </div>
        </div>
      </main>
    </>
  )
}
