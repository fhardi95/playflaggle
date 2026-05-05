import Link from 'next/link'
import { MAP_REGIONS, CONTINENTS } from '../../../lib/flags'
import { SITE } from '../../../lib/data'
import { notFound } from 'next/navigation'
import MapQuizClient from '../../../components/MapQuizClient'

export async function generateStaticParams() {
  return Object.keys(MAP_REGIONS).map(slug => ({ continent: slug }))
}

export async function generateMetadata({ params }) {
  const { continent } = await params
  const region = MAP_REGIONS[continent]
  if (!region) return {}
  return {
    title: `${region.name} Map Quiz — Click the Country`,
    description: `Interactive ${region.name} geography quiz. A country name appears — click it on the map. ${region.countries.length} countries. Free, no signup needed.`,
    keywords: [`${region.name.toLowerCase()} map quiz`, `${region.name.toLowerCase()} geography quiz`, `${region.name.toLowerCase()} countries map`, `click the country ${region.name.toLowerCase()}`],
    alternates: { canonical: `${SITE.url}/map-quiz/${continent}` },
  }
}

export default async function MapQuizPage({ params }) {
  const { continent } = await params
  const region = MAP_REGIONS[continent]
  if (!region) notFound()

  const flagData = CONTINENTS[continent]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name: `${region.name} Map Quiz`,
    description: `Interactive ${region.name} geography map quiz. Click the correct country on the map.`,
    url: `${SITE.url}/map-quiz/${continent}`,
    genre: ['Educational', 'Geography', 'Quiz'],
    isAccessibleForFree: true,
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Map Quiz', item: `${SITE.url}/map-quiz` },
      { '@type': 'ListItem', position: 3, name: `${region.name} Map Quiz`, item: `${SITE.url}/map-quiz/${continent}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Play<span>Flaggle</span></Link>
          <div className="nav-links">
            <Link href="/#quiz">Daily</Link>
            <Link href="/quiz">Continents</Link>
            <Link href="/map-quiz">Map Quiz</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/wiki">Wiki</Link>
          </div>
          <Link href="/map-quiz" className="nav-cta">All Maps →</Link>
        </div>
      </nav>

      <main style={{ minHeight: '100vh' }}>
        <div style={{ padding: '1.75rem 0 1.5rem', borderBottom: '1px solid var(--border)', background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${region.color}18 0%, transparent 70%)` }}>
          <div className="container">
            <nav className="breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <Link href="/map-quiz">Map Quiz</Link><span>/</span>
              <span>{region.name}</span>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '2.5rem' }}>{region.emoji}</span>
              <div>
                <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.6rem, 5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.1, margin: 0 }}>
                  {region.name} Map Quiz
                </h1>
                <p style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '.25rem' }}>
                  {region.countries.length} countries · click the correct country on the map
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ padding: '1.5rem 1.25rem 4rem' }}>
          <MapQuizClient region={region} continent={continent} flagData={flagData} />

          {/* Switch to flag quiz */}
          {flagData && (
            <div style={{ marginTop: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '.95rem', fontWeight: 700, marginBottom: '.25rem' }}>Try the {region.name} Flag Quiz</div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Multiple choice — identify flags from 4 options</p>
              </div>
              <Link href={`/quiz/${continent}`} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '100px', padding: '8px 20px', fontSize: '13px', fontWeight: 500, whiteSpace: 'nowrap', textDecoration: 'none' }}>
                🚩 Flag Quiz →
              </Link>
            </div>
          )}

          {/* Other maps */}
          <div style={{ marginTop: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 700, color: 'var(--muted)', marginBottom: '1rem', letterSpacing: '-.02em' }}>Other map quizzes</h2>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {Object.entries(MAP_REGIONS).filter(([k]) => k !== continent).map(([key, r]) => (
                <Link key={key} href={`/map-quiz/${key}`} style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '100px', padding: '6px 16px', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {r.emoji} {r.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
