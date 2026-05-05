import { BLOG_POSTS, WIKI_ENTRIES, SITE } from '../../lib/data'

export default function sitemap() {
  const staticPages = [
    { url: SITE.url, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${SITE.url}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE.url}/wiki`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/quiz`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE.url}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE.url}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE.url}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]

  const blogPages = BLOG_POSTS.map(post => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const wikiPages = WIKI_ENTRIES.map(entry => ({
    url: `${SITE.url}/wiki/${entry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages, ...wikiPages]
}
