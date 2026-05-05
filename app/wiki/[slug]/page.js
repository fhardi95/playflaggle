import Link from 'next/link'
import { WIKI_ENTRIES, SITE } from '../../../lib/data'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return WIKI_ENTRIES.map(e => ({ slug: e.slug }))
}

export async function generateMetadata({ params }) {
  const entry = WIKI_ENTRIES.find(e => e.slug === params.slug)
  if (!entry) return {}
  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    alternates: { canonical: `${SITE.url}/wiki/${entry.slug}` },
  }
}

export default function WikiEntry({ params }) {
  const entry = WIKI_ENTRIES.find(e => e.slug === params.slug)
  if (!entry) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: entry.title,
    description: entry.description,
    url: `${SITE.url}/wiki/${entry.slug}`,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    keywords: entry.keywords.join(', '),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/wiki/${entry.slug}` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Wiki', item: `${SITE.url}/wiki` },
      { '@type': 'ListItem', position: 3, name: entry.title, item: `${SITE.url}/wiki/${entry.slug}` },
    ],
  }

  const related = WIKI_ENTRIES.filter(e => e.slug !== entry.slug).slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
        <div className="container-narrow" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/wiki">Wiki</Link><span>/</span>
            <span>{entry.title}</span>
          </nav>

          <article className="article-body">
            <div className="article-cat">Flag Wiki</div>
            <h1 className="article-title">{entry.title}</h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{entry.description}</p>
            <div style={{ height: '1px', background: 'var(--border)', margin: '2rem 0' }} />
            <p>{entry.content}</p>

            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.5rem 2rem', margin: '2.5rem 0', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-.03em', marginBottom: '.5rem' }}>
                Test your flag knowledge
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '1.25rem' }}>Play the free daily flag quiz — 5 flags, no signup needed.</p>
              <Link href="/#quiz" className="btn btn-primary">Play now →</Link>
            </div>
          </article>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-.03em' }}>More from the wiki</h2>
            <div className="wiki-grid">
              {related.map(r => (
                <Link key={r.slug} href={`/wiki/${r.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="wiki-card">
                    <h3>{r.title}</h3>
                    <p>{r.description}</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
