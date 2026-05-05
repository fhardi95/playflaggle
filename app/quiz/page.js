import Link from 'next/link'
import { CONTINENTS } from '../../lib/flags'
import { SITE } from '../../lib/data'

export const metadata = {
  title: 'Flag Quiz by Continent — Europe, Asia, Africa, Americas & More',
  description: 'Choose your continent and test your flag knowledge. Flag quizzes for Europe, Asia, Africa, Americas, Oceania, Islands and all world flags. Free, no signup.',
  keywords: ['flag quiz by continent', 'europe flag quiz', 'asia flag quiz', 'africa flag quiz', 'americas flag quiz', 'oceania flag quiz', 'world flags quiz'],
  alternates: { canonical: `${SITE.url}/quiz` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Flag Quiz by Continent',
  url: `${SITE.url}/quiz`,
  description: 'Flag quizzes organised by continent — Europe, Asia, Africa, Americas, Oceania, Islands, and all world flags.',
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
}

export default function QuizHub() {
  const continentList = Object.entries(CONTINENTS)
  const total = continentList.reduce((sum, [, c]) => sum + c.flags.length, 0)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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
          <Link href="/#quiz" className="nav-cta">Play Free →</Link>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <div style={{ padding: '3.5rem 0 2.5rem', textAlign: 'center', borderBottom: '1px solid var(--border)', background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(26,171,109,.1) 0%, transparent 70%)' }}>
          <div className="container-narrow">
            <nav className="breadcrumb" style={{ justifyContent: 'center' }}>
              <Link href="/">Home</Link><span>/</span><span>Flag Quiz</span>
            </nav>
            <div className="hero-eyebrow" style={{ marginBottom: '1rem' }}>🚩 Choose your challenge</div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.05, marginBottom: '1rem' }}>
              Flag Quiz by <span style={{ color: 'var(--green)' }}>Continent</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
              Pick a region and test your flag knowledge. {total}+ flags across 6 continents — from easy to expert.
            </p>
            {/* Mode toggle */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ background: 'var(--green)', color: '#fff', borderRadius: '100px', padding: '6px 18px', fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-syne)' }}>🚩 Flag Quiz</span>
              <Link href="/map-quiz" style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: '100px', padding: '6px 18px', fontSize: '13px', fontWeight: 500 }}>🗺️ Map Quiz</Link>
            </div>
          </div>
        </div>

        {/* ALL FLAGS CARD */}
        <div className="container" style={{ padding: '2.5rem 1.25rem 0' }}>
          <Link href="/quiz/all" style={{ textDecoration: 'none', display: 'block', marginBottom: '1.5rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--surface) 0%, rgba(26,171,109,.15) 100%)',
              border: '2px solid var(--green)', borderRadius: '20px', padding: '2rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap',
              transition: 'transform .2s', cursor: 'pointer',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '.5rem' }}>
                  <span style={{ fontSize: '2rem' }}>🌍🌎🌏</span>
                  <span style={{ fontFamily: 'var(--font-syne)', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-.03em' }}>All World Flags</span>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '14px', margin: 0 }}>The ultimate challenge — all {total} countries from every continent shuffled together</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '2rem', fontWeight: 800, color: 'var(--green)' }}>{total}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>flags</div>
                <div style={{ marginTop: '.75rem', background: 'var(--green)', color: '#fff', borderRadius: '100px', padding: '6px 20px', fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-syne)', display: 'inline-block' }}>Play →</div>
              </div>
            </div>
          </Link>

          {/* CONTINENT GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', paddingBottom: '4rem' }}>
            {continentList.map(([key, c]) => (
              <Link key={key} href={`/quiz/${key}`} style={{ textDecoration: 'none' }}>
                <article style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '20px', padding: '1.5rem', cursor: 'pointer',
                  transition: 'border-color .2s, transform .2s',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {/* Color accent top bar */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: c.color, borderRadius: '20px 20px 0 0' }} />

                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '2rem', marginBottom: '.4rem' }}>{c.emoji}</div>
                      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-.03em', margin: 0 }}>{c.name}</h2>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.8rem', fontWeight: 800, color: c.color, lineHeight: 1 }}>{c.flags.length}</div>
                      <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>flags</div>
                    </div>
                  </div>

                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>{c.description}</p>

                  {/* Preview flags */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    {c.flags.slice(0, 8).map(f => (
                      <span key={f.country} style={{ fontSize: '1.4rem', lineHeight: 1 }}>{f.flag}</span>
                    ))}
                    {c.flags.length > 8 && <span style={{ fontSize: '12px', color: 'var(--muted)', alignSelf: 'center', marginLeft: '4px' }}>+{c.flags.length - 8} more</span>}
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ background: c.colorLight, color: c.color, borderRadius: '100px', padding: '6px 16px', fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-syne)' }}>Play Quiz →</span>
                    <Link href={`/map-quiz/${key}`} onClick={e => e.stopPropagation()} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: '100px', padding: '6px 14px', fontSize: '13px' }}>
                      🗺️ Map
                    </Link>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
