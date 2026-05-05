import Link from 'next/link'
import { WIKI_ENTRIES, SITE } from '../../lib/data'

export const metadata = {
  title: 'Flag Wiki — Vexillology Knowledge Base',
  description: 'Everything about flags — vexillology, Pan-African colours, Nordic crosses, flag facts and meanings. The ultimate flag knowledge base.',
  keywords: ['vexillology', 'flag facts', 'flag meanings', 'world flag wiki', 'flag knowledge base'],
  alternates: { canonical: `${SITE.url}/wiki` },
}

const wikiSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'PlayFlaggle Flag Wiki',
  url: `${SITE.url}/wiki`,
  description: 'A comprehensive knowledge base covering flag history, symbolism, vexillology, and geography facts.',
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
}

export default function WikiIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(wikiSchema) }} />

      <nav className="nav" aria-label="Main navigation">
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
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span>Wiki</span>
            </nav>
            <div className="section-tag">Knowledge base</div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.1, marginBottom: '.75rem' }}>
              Flag Wiki
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Deep dives into vexillology — the study of flags. Histories, meanings, patterns, and the stories behind the world's most recognisable symbols.
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: '3rem 1.25rem 5rem' }}>
          <div className="wiki-grid">
            {WIKI_ENTRIES.map(entry => (
              <Link key={entry.slug} href={`/wiki/${entry.slug}`} style={{ textDecoration: 'none' }}>
                <article className="wiki-card">
                  <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '.5rem' }}>{entry.title}</h2>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.55 }}>{entry.description}</p>
                  <span style={{ display: 'inline-block', marginTop: '.75rem', fontSize: '12px', color: 'var(--green)', fontWeight: 500 }}>Read more →</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
