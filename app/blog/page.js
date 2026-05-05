import Link from 'next/link'
import { BLOG_POSTS, SITE } from '../../lib/data'

export const metadata = {
  title: 'Flag Quiz Blog — Guides, Tips & Geography Articles',
  description: 'Flag quiz tips, geography guides, and flag knowledge articles. Learn to identify the world\'s flags faster with our expert guides.',
  keywords: ['flag quiz guide', 'geography quiz tips', 'flag facts', 'world flags guide', 'flags of the world'],
  alternates: { canonical: `${SITE.url}/blog` },
}

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'PlayFlaggle Blog',
  url: `${SITE.url}/blog`,
  description: 'Flag quiz guides, geography tips, and flag knowledge articles.',
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  blogPost: BLOG_POSTS.map(p => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    url: `${SITE.url}/blog/${p.slug}`,
    datePublished: p.date,
    author: { '@type': 'Organization', name: SITE.name },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
  ],
}

export default function BlogIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
              <Link href="/">Home</Link><span>/</span><span>Blog</span>
            </nav>
            <div className="section-tag">Flag guides</div>
            <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.1, marginBottom: '.75rem' }}>
              Flag Quiz Blog
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Guides to help you ace every flag quiz. From the world's hardest flags to regional guides, tips and tricks.
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: '3rem 1.25rem 5rem' }}>
          <div className="blog-grid">
            {BLOG_POSTS.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article className="blog-card">
                  <div className="blog-cat">{post.category}</div>
                  <h2>{post.title}</h2>
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
        </div>
      </main>
    </>
  )
}
