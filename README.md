# PlayFlaggle — Full Next.js Site

## Deploy to Vercel in 5 minutes

### Step 1 — Upload to GitHub
1. Go to github.com → click "New repository"
2. Name it `playflaggle`
3. Drag and drop this entire folder into the GitHub interface
4. Click "Commit changes"

### Step 2 — Deploy on Vercel
1. Go to vercel.com → sign up free with your GitHub account
2. Click "Add New Project" → Import your `playflaggle` repo
3. Vercel auto-detects Next.js — just click **Deploy**
4. Your site is live at `playflaggle.vercel.app` in ~60 seconds

### Step 3 — Connect PlayFlaggle.com
1. In Vercel → go to your project → Settings → Domains
2. Type `playflaggle.com` → Add
3. Vercel gives you DNS records (A record + CNAME)
4. Go to Namecheap → Manage domain → Advanced DNS
5. Add those records → Save
6. Wait 24 hours → live at playflaggle.com ✅

---

## What's included

### Pages
- `/` — Homepage with quiz, features, blog preview, wiki, FAQ, SEO text
- `/blog` — Blog index with all articles
- `/blog/[slug]` — Individual blog posts (6 articles)
- `/wiki` — Flag wiki index
- `/wiki/[slug]` — Individual wiki entries (5 entries)
- `/faq` — Full FAQ page
- `/sitemap.xml` — Auto-generated sitemap
- `/robots.txt` — Auto-generated robots.txt

### SEO
Every page has:
- Full meta tags (title, description, keywords)
- Open Graph tags (Facebook/WhatsApp sharing)
- Twitter card tags
- Canonical URLs
- JSON-LD structured data:
  - WebSite schema (homepage)
  - Organization schema
  - Game schema with AggregateRating
  - FAQPage schema (homepage + FAQ page)
  - Article schema (all blog + wiki pages)
  - BreadcrumbList schema (all pages)
  - Blog schema (blog index)
- Auto sitemap.xml
- Robots.txt

### Target keywords built into content
| Keyword | Monthly searches | Difficulty |
|---------|-----------------|------------|
| flag quiz | ~90,000 | Medium |
| daily flag quiz | ~12,000 | Low |
| guess the flag | ~27,000 | Low-Med |
| flag wordle | ~40,000 | Low |
| flags of the world quiz | ~22,000 | Low |
| geography quiz | ~110,000 | High |
| free geography quiz game | ~8,000 | Low |
| european flags quiz | ~18,000 | Low |
| hardest flags in the world | ~5,000 | Very Low |
| vexillology | ~12,000 | Very Low |

### Monetisation slots
- Google AdSense slot above quiz (high visibility)
- Google AdSense slot after results (peak engagement)
- Email capture after quiz results
- Premium subscription hook (no-ads tier ready to build)

---

## Add Google AdSense

In `components/QuizClient.js`, replace the `<div className="ad-slot">` elements with:

```jsx
<ins className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-XXXXXXXXXX"
  data-ad-slot="XXXXXXXXXX"
  data-ad-format="auto"
  data-full-width-responsive="true"
/>
```

Also add to `app/layout.js` inside `<head>`:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>
```

---

## Add Google Search Console

1. Go to search.google.com/search-console
2. Add property → URL prefix → `https://playflaggle.com`
3. Verify via HTML tag — copy the verification code
4. In `app/layout.js`, replace `YOUR_GOOGLE_VERIFICATION_CODE` with your code
5. Submit sitemap: `https://playflaggle.com/sitemap.xml`

---

## Add more blog posts

In `lib/data.js`, add to the `BLOG_POSTS` array:

```js
{
  slug: 'your-url-slug',
  title: 'Your Article Title',
  description: 'Meta description — 150 chars max',
  category: 'Guide',
  date: '2026-05-01',
  readTime: '5 min',
  keywords: ['keyword 1', 'keyword 2'],
  content: [
    { h2: 'Section heading' },
    { p: 'Paragraph text here.' },
  ],
}
```

The page auto-generates from this data. No code changes needed.
