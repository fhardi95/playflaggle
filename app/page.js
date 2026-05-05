import Link from 'next/link'
import { SITE, BLOG_POSTS, WIKI_ENTRIES, FAQ } from '../lib/data'
import QuizClient from '../components/QuizClient'
import FaqClient from '../components/FaqClient'

export const metadata = {
  title: 'PlayFlaggle — Free Daily Flag Quiz Game',
  description: 'Guess the country flag in our free daily quiz. New flags every day, streak counter, shareable results. The best flag wordle game online — no signup needed.',
  keywords: ['flag quiz', 'daily flag quiz', 'guess the flag', 'flag wordle', 'flag quiz game free', 'geography quiz daily', 'country flag quiz'],
  alternates: { canonical: 'https://playflaggle.com' },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/blog?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png` },
  sameAs: [`https://twitter.com/playflaggle`],
}

const gameSchema = {
  '@context': 'https://schema.org',
  '@type': 'Game',
  name: 'PlayFlaggle Daily Flag Quiz',
  description: 'A free daily flag quiz game. Guess which country each flag belongs to. 5 flags every day, streak tracking, shareable results.',
  url: SITE.url,
  genre: ['Educational', 'Quiz', 'Geography'],
  gamePlatform: ['Web browser', 'Mobile', 'Desktop'],
  applicationCategory: 'Game',
  isAccessibleForFree: true,
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '2847', bestRating: '5' },
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
  ],
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Nav />

      <main>
        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-eyebrow">🚩 New quiz every day — 100% free</div>
          <h1>The Daily <span className="accent">Flag Quiz</span><br />That Gets You Hooked</h1>
          <p className="hero-sub">5 flags. Every day. Guess the country, build your streak, challenge your friends. No signup. No cost. Ever.</p>
          <div className="hero-actions">
            <a href="#quiz" className="btn btn-primary">Play today's quiz →</a>
            <Link href="/blog" className="btn btn-ghost">Read guides</Link>
          </div>
        </section>

        {/* ── STATS ── */}
        <div className="stats-bar">
          <div className="stat-item"><div className="stat-val">197</div><div className="stat-lbl">Countries covered</div></div>
          <div className="stat-item"><div className="stat-val">5</div><div className="stat-lbl">New flags daily</div></div>
          <div className="stat-item"><div className="stat-val">Free</div><div className="stat-lbl">Always & forever</div></div>
          <div className="stat-item"><div className="stat-val">30s</div><div className="stat-lbl">To complete</div></div>
        </div>

        {/* ── QUIZ ── */}
        <section className="quiz-section" id="quiz" aria-label="Daily flag quiz game">
          <div className="section-header">
            <div className="section-tag">Today's challenge</div>
            <h2 className="section-title">Guess the Flag</h2>
            <p className="section-sub">5 flags · resets at midnight · track your streak</p>
          </div>
          <QuizClient />
        </section>

        {/* ── FEATURES ── */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border)' }} aria-label="Features">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Why PlayFlaggle</div>
              <h2 className="section-title">Built for daily players</h2>
            </div>
            <div className="features-grid">
              {[
                { icon: '🔥', title: 'Daily streak', desc: 'Play every day to keep your streak alive. The longer your streak, the sharper your geography knowledge.' },
                { icon: '📤', title: 'Share your score', desc: 'One tap to copy your emoji result card. Challenge friends on WhatsApp, X, or Instagram.' },
                { icon: '📊', title: 'Percentile ranking', desc: 'See how you rank against every player that day. "Better than 91% of players" hits different.' },
                { icon: '🌍', title: '197 countries', desc: 'Every sovereign nation on Earth. From obvious (🇫🇷 France) to devilishly tricky (🇸🇱 Sierra Leone).' },
                { icon: '📱', title: 'Works everywhere', desc: 'Mobile, tablet, desktop — any browser, any device. No app download needed.' },
                { icon: '⚡', title: 'Instant load', desc: 'No bloat, no tracking, no account required. Open and play in under 3 seconds.' },
              ].map(f => (
                <article key={f.title} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG ── */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border)' }} aria-label="Blog and guides">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Learn & improve</div>
              <h2 className="section-title">Flag guides & geography tips</h2>
              <p className="section-sub">Everything you need to ace your next geography quiz</p>
            </div>
            <div className="blog-grid">
              {BLOG_POSTS.slice(0, 6).map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="blog-card">
                    <div className="blog-cat">{post.category}</div>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <div className="blog-meta">
                      <span>{post.date}</span>
                      <span>{post.readTime} read</span>
                    </div>
                    <span className="blog-read-more">Read article →</span>
                  </article>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/blog" className="btn btn-ghost">View all articles →</Link>
            </div>
          </div>
        </section>

        {/* ── WIKI ── */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border)' }} aria-label="Flag knowledge wiki">
          <div className="container">
            <div className="section-header">
              <div className="section-tag">Flag wiki</div>
              <h2 className="section-title">Flag knowledge base</h2>
              <p className="section-sub">Deep-dive into vexillology — the science of flags</p>
            </div>
            <div className="wiki-grid">
              {WIKI_ENTRIES.map(entry => (
                <Link key={entry.slug} href={`/wiki/${entry.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="wiki-card">
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                  </article>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/wiki" className="btn btn-ghost">Browse full wiki →</Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border)' }} aria-label="Frequently asked questions">
          <div className="container-narrow">
            <div className="section-header">
              <div className="section-tag">FAQ</div>
              <h2 className="section-title">Questions & answers</h2>
            </div>
            <FaqClient faqs={FAQ} />
          </div>
        </section>

        {/* ── SEO TEXT BLOCK ── */}
        <section style={{ padding: '3rem 0 4rem', borderTop: '1px solid var(--border)' }}>
          <div className="container-narrow">
            <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-.03em', marginBottom: '1rem' }}>
              The best free daily flag quiz game online
            </h2>
            <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>PlayFlaggle is a free daily flag quiz game inspired by the Wordle format. Every day at midnight, five new country flags appear — your job is to identify which country each flag belongs to from four multiple-choice options. Complete the quiz, see your percentile ranking, share your emoji score card, and come back tomorrow to keep your streak alive.</p>
              <p>Unlike GeoGuessr (which requires a paid subscription for unlimited play) or static flag quiz banks, PlayFlaggle is designed as a daily habit — free forever, no account required, playable in under three minutes. It covers all 197 sovereign nations across a rotating 30-day quiz cycle.</p>
              <p>Whether you're a geography student, a pub quiz regular, a Wordle addict looking for your next daily game, or simply someone who wants to get better at recognising the flags of the world — PlayFlaggle is the fastest way to build that knowledge. Five flags a day, seven days a week, adds up to over 1,800 flags per year.</p>
              <p>Our flag wiki and blog section cover everything from the hardest flags in the world to the history of Pan-African colours, European flag traditions, and tips for memorising confusing similar flags. Whether you're looking for a flags of the world quiz with answers, a European flags quiz, or an African flags guide — you'll find it here.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function Nav() {
  return (
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
  )
}

function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">Play<span>Flaggle</span></Link>
            <p>Free daily flag quiz game. Guess the country from its flag. New challenge every day — no signup, no cost, forever.</p>
          </div>
          <div className="footer-col">
            <h4>Play</h4>
            <ul>
              <li><Link href="/#quiz">Daily quiz</Link></li>
              <li><Link href="/quiz">All quizzes</Link></li>
              <li><Link href="/faq">How to play</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Learn</h4>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/wiki">Flag wiki</Link></li>
              <li><Link href="/blog/hardest-flags-in-the-world">Hardest flags</Link></li>
              <li><Link href="/blog/european-flags-quiz-guide">Europe flags</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Info</h4>
            <ul>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 PlayFlaggle. Free daily flag quiz. All rights reserved.</p>
          <p style={{ fontSize: '12px', color: 'var(--muted2)' }}>
            <Link href="/sitemap.xml" style={{ marginRight: '1rem' }}>Sitemap</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
