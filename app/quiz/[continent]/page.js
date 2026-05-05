import Link from 'next/link'
import { CONTINENTS, ALL_FLAGS } from '../../../lib/flags'
import { SITE } from '../../../lib/data'
import { notFound } from 'next/navigation'
import ContinentQuizClient from '../../../components/ContinentQuizClient'

export async function generateStaticParams() {
  return [...Object.keys(CONTINENTS), 'all'].map(slug => ({ continent: slug }))
}

export async function generateMetadata({ params }) {
  const { continent } = await params
  if (continent === 'all') {
    return {
      title: 'All World Flags Quiz — 197 Countries',
      description: 'The ultimate flag quiz — all world flags from every continent. 197 countries, multiple difficulty modes. Free, no signup.',
      keywords: ['all world flags quiz', 'flags of the world quiz', '197 countries flag quiz', 'world flag quiz game'],
      alternates: { canonical: `${SITE.url}/quiz/all` },
    }
  }
  const c = CONTINENTS[continent]
  if (!c) return {}
  return {
    title: `${c.name} Flag Quiz — ${c.flags.length} Countries`,
    description: `Test your knowledge of all ${c.flags.length} ${c.name} flags. Free multiple-choice flag quiz with hints, capitals, and difficulty levels.`,
    keywords: [`${c.name.toLowerCase()} flag quiz`, `flags of ${c.name.toLowerCase()}`, `${c.name.toLowerCase()} countries flags`, `${c.name.toLowerCase()} geography quiz`],
    alternates: { canonical: `${SITE.url}/quiz/${continent}` },
  }
}

export default async function ContinentQuiz({ params }) {
  const { continent } = await params
  const isAll = continent === 'all'
  const c = isAll ? null : CONTINENTS[continent]
  if (!isAll && !c) notFound()

  const flags = isAll ? ALL_FLAGS : c.flags
  const name = isAll ? 'All World Flags' : c.name
  const color = isAll ? '#1aab6d' : c.color
  const emoji = isAll ? '🌍🌎🌏' : c.emoji

  const quizSchema = {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name: `${name} Flag Quiz`,
    description: `Multiple-choice flag quiz covering ${flags.length} countries${isAll ? ' from all continents' : ` in ${name}`}.`,
    url: `${SITE.url}/quiz/${continent}`,
    genre: ['Educational', 'Quiz', 'Geography'],
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }} />

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
          <Link href="/quiz" className="nav-cta">All Quizzes →</Link>
        </div>
      </nav>

      <main style={{ minHeight: '100vh' }}>
        <div style={{ padding: '2rem 0 1.5rem', borderBottom: '1px solid var(--border)', background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${isAll ? 'rgba(26,171,109,.1)' : c.colorLight} 0%, transparent 70%)` }}>
          <div className="container-narrow">
            <nav className="breadcrumb">
              <Link href="/">Home</Link><span>/</span>
              <Link href="/quiz">Quiz</Link><span>/</span>
              <span>{name}</span>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '2.5rem' }}>{emoji}</span>
              <div>
                <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.6rem, 5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.1, margin: 0 }}>
                  {name} Flag Quiz
                </h1>
                <p style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '.25rem' }}>
                  {flags.length} flags · multiple choice · instant feedback
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-narrow" style={{ padding: '2rem 1.25rem 4rem' }}>
          <ContinentQuizClient flags={flags} continentName={name} color={color} continent={continent} />

          {/* Link to map quiz */}
          {!isAll && (
            <div style={{ marginTop: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '.95rem', fontWeight: 700, marginBottom: '.25rem' }}>Try the {name} Map Quiz</div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Click countries on the map to identify them</p>
              </div>
              <Link href={`/map-quiz/${continent}`} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '100px', padding: '8px 20px', fontSize: '13px', fontWeight: 500, whiteSpace: 'nowrap', textDecoration: 'none' }}>
                🗺️ Play Map Quiz →
              </Link>
            </div>
          )}

          {/* Other continents */}
          <div style={{ marginTop: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 700, letterSpacing: '-.02em', marginBottom: '1rem', color: 'var(--muted)' }}>More quizzes</h2>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {Object.entries(CONTINENTS).filter(([k]) => k !== continent).map(([key, cont]) => (
                <Link key={key} href={`/quiz/${key}`} style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '100px', padding: '6px 16px', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {cont.emoji} {cont.name}
                </Link>
              ))}
              <Link href="/quiz/all" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '100px', padding: '6px 16px', fontSize: '13px', textDecoration: 'none' }}>
                🌍🌎🌏 All flags
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
