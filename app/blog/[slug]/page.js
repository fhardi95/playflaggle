import Link from 'next/link'
import { BLOG_POSTS, SITE } from '../../../lib/data'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `${SITE.url}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [SITE.name],
    },
  }
}

export default function BlogPost({ params }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `${SITE.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/blog/${post.slug}` },
    keywords: post.keywords.join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
        <div className="container-narrow" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/blog">Blog</Link><span>/</span>
            <span>{post.title}</span>
          </nav>

          <article className="article-body">
            <header>
              <div className="article-cat">{post.category} · {post.readTime} read</div>
              <h1 className="article-title">{post.title}</h1>
              <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{post.description}</p>
              <div className="article-meta">
                <span>Published {post.date}</span>
                <span>By PlayFlaggle</span>
                <span>{post.readTime} read</span>
              </div>
              <div style={{ height: '1px', background: 'var(--border)', margin: '2rem 0' }} />
            </header>

            <div>
              {post.content.map((block, i) => {
                if (block.h2) return <h2 key={i}>{block.h2}</h2>
                if (block.p) return <p key={i}>{block.p}</p>
                return null
              })}
            </div>

            {/* CTA inside article */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.5rem 2rem', margin: '2.5rem 0', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-.03em', marginBottom: '.5rem' }}>
                Ready to test your flag knowledge?
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '1.25rem' }}>
                Play today's free daily flag quiz — 5 flags, 3 minutes, no signup needed.
              </p>
              <Link href="/#quiz" className="btn btn-primary">Play today's quiz →</Link>
            </div>
          </article>

          {/* Related articles */}
          <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-.03em', marginBottom: '1.25rem' }}>More flag guides</h2>
            <div className="blog-grid">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: 'none' }}>
                  <article className="blog-card">
                    <div className="blog-cat">{r.category}</div>
                    <h3>{r.title}</h3>
                    <p>{r.description}</p>
                    <span className="blog-read-more">Read →</span>
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
