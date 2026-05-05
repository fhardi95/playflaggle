import Link from 'next/link'
import { MAP_REGIONS } from '../../lib/flags'
import { SITE } from '../../lib/data'

export const metadata = {
  title: 'Geography Map Quiz — Click the Country on the Map',
  description: 'Interactive map quiz — click the correct country on the map. Test your geography knowledge for Africa, Europe, Asia, Americas, and Oceania. Free, no signup.',
  keywords: ['geography map quiz', 'click the country quiz', 'interactive map quiz', 'world geography game', 'country map quiz'],
  alternates: { canonical: `${SITE.url}/map-quiz` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Game',
  name: 'PlayFlaggle Geography Map Quiz',
  description: 'Interactive geography map quiz — click countries on the map to identify them.',
  url: `${SITE.url}/map-quiz`,
  genre: ['Educational', 'Geography', 'Quiz'],
  isAccessibleForFree: true,
}

export default function MapQuizHub() {
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
        <div style={{ padding: '3.5rem 0 2.5rem', textAlign: 'center', borderBottom: '1px solid var(--border)', background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(26,171,109,.1) 0%, transparent 70%)' }}>
          <div className="container-narrow">
            <nav className="breadcrumb" style={{ justifyContent: 'center' }}>
              <Link href="/">Home</Link><span>/</span><span>Map Quiz</span>
            </nav>
            <div className="hero-eyebrow">🗺️ Interactive Map Quiz</div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.05, margin: '1rem 0' }}>
              Click the <span style={{ color: 'var(--green)' }}>Country</span> on the Map
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
              A question appears — find and click the correct country on the map. Like World Geography Games, but sharper.
            </p>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/quiz" style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: '100px', padding: '6px 18px', fontSize: '13px', fontWeight: 500 }}>🚩 Flag Quiz</Link>
              <span style={{ background: 'var(--green)', color: '#fff', borderRadius: '100px', padding: '6px 18px', fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-syne)' }}>🗺️ Map Quiz</span>
            </div>
          </div>
        </div>

        <div className="container" style={{ padding: '2.5rem 1.25rem 4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {Object.entries(MAP_REGIONS).map(([key, region]) => (
              <Link key={key} href={`/map-quiz/${key}`} style={{ textDecoration: 'none' }}>
                <article style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '20px', padding: '1.5rem', cursor: 'pointer',
                  transition: 'border-color .2s, transform .2s', position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: region.color }} />

                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '2rem', marginBottom: '.4rem' }}>{region.emoji}</div>
                      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-.03em', margin: 0 }}>{region.name}</h2>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.8rem', fontWeight: 800, color: region.color, lineHeight: 1 }}>{region.countries.length}</div>
                      <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>countries</div>
                    </div>
                  </div>

                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                    Click the correct country on the {region.name} map
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ background: `${region.color}22`, color: region.color, borderRadius: '100px', padding: '6px 16px', fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-syne)' }}>
                      🗺️ Play Map Quiz →
                    </span>
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
