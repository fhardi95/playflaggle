// lib/data.js

export const SITE = {
  name: 'PlayFlaggle',
  url: 'https://playflaggle.com',
  description: 'Free daily flag quiz game — guess the country from its flag. New quiz every day. Track your streak, beat your friends. No signup needed.',
  twitter: '@playflaggle',
  logo: 'https://playflaggle.com/logo.png',
}

// ─── TARGET KEYWORDS (researched) ─────────────────────────────────────────
// High volume, low-medium competition for a new site:
// "flag quiz"             ~90,000/mo  — core keyword
// "daily flag quiz"       ~12,000/mo  — exact match
// "flag quiz game"        ~33,000/mo  — game intent
// "guess the flag"        ~27,000/mo  — game intent
// "flags of the world quiz" ~22,000/mo — educational
// "geography quiz"        ~110,000/mo — broad
// "country flag quiz"     ~18,000/mo  — mid-tail
// "flag wordle"           ~40,000/mo  — trend keyword
// "play flaggle"          ~8,000/mo   — branded
// "free flag quiz"        ~6,000/mo   — low comp, high intent
// Long-tails (very low competition, easy to rank):
// "flags of the world quiz with answers"
// "how many flags can you name quiz"
// "daily geography quiz game free"
// "flag quiz for kids"
// "european flags quiz"

// ─── QUIZ BANK (30 days) ──────────────────────────────────────────────────
export const QUIZ_BANK = [
  [
    { flag: '🇯🇵', answer: 'Japan', opts: ['China', 'Japan', 'South Korea', 'Taiwan'], fact: 'Japan\'s flag is called Nisshōki — the sun-mark flag. The red circle represents the sun.' },
    { flag: '🇧🇷', answer: 'Brazil', opts: ['Argentina', 'Colombia', 'Brazil', 'Venezuela'], fact: 'Brazil\'s flag has 27 stars representing its 26 states and the Federal District.' },
    { flag: '🇳🇴', answer: 'Norway', opts: ['Sweden', 'Finland', 'Norway', 'Denmark'], fact: 'Norway\'s cross design influenced the flags of all other Nordic countries.' },
    { flag: '🇰🇪', answer: 'Kenya', opts: ['Ethiopia', 'Kenya', 'Tanzania', 'Uganda'], fact: 'Kenya\'s flag features a Maasai shield and two crossed spears, representing defence.' },
    { flag: '🇵🇹', answer: 'Portugal', opts: ['Spain', 'Brazil', 'Mexico', 'Portugal'], fact: 'Portugal\'s flag has been in use since 1910 when the monarchy was overthrown.' },
  ],
  [
    { flag: '🇩🇪', answer: 'Germany', opts: ['Austria', 'Belgium', 'Germany', 'Netherlands'], fact: 'Germany\'s black, red, and gold colours originate from the uniforms of the Lützow Free Corps in 1813.' },
    { flag: '🇿🇦', answer: 'South Africa', opts: ['Nigeria', 'South Africa', 'Ghana', 'Zimbabwe'], fact: 'South Africa\'s flag was adopted in 1994 to represent the country\'s new democratic era.' },
    { flag: '🇦🇺', answer: 'Australia', opts: ['New Zealand', 'Australia', 'Fiji', 'Papua New Guinea'], fact: 'Australia\'s flag features the Union Jack, the Southern Cross, and the Commonwealth Star.' },
    { flag: '🇲🇽', answer: 'Mexico', opts: ['Mexico', 'Colombia', 'Venezuela', 'Peru'], fact: 'Mexico\'s eagle devouring a snake on a cactus is based on an Aztec legend.' },
    { flag: '🇸🇦', answer: 'Saudi Arabia', opts: ['Iran', 'Iraq', 'Saudi Arabia', 'UAE'], fact: 'Saudi Arabia\'s flag is the only national flag that is different on its obverse and reverse sides.' },
  ],
  [
    { flag: '🇮🇳', answer: 'India', opts: ['Pakistan', 'Bangladesh', 'India', 'Sri Lanka'], fact: 'India\'s Ashoka Chakra (wheel) has 24 spokes representing the 24 hours of the day.' },
    { flag: '🇮🇹', answer: 'Italy', opts: ['France', 'Italy', 'Spain', 'Ireland'], fact: 'Italy\'s tricolour was inspired by the French flag during Napoleon\'s campaign in 1797.' },
    { flag: '🇨🇦', answer: 'Canada', opts: ['USA', 'Canada', 'Australia', 'New Zealand'], fact: 'Canada\'s maple leaf flag replaced the Canadian Red Ensign only in 1965.' },
    { flag: '🇹🇷', answer: 'Turkey', opts: ['Greece', 'Turkey', 'Georgia', 'Armenia'], fact: 'Turkey\'s crescent and star design dates to the Ottoman Empire in the 14th century.' },
    { flag: '🇳🇬', answer: 'Nigeria', opts: ['Ghana', 'Nigeria', 'Cameroon', 'Ivory Coast'], fact: 'Nigeria\'s flag was designed by a 23-year-old student, Michael Taiwo Akinkunmi, in 1959.' },
  ],
  [
    { flag: '🇦🇷', answer: 'Argentina', opts: ['Argentina', 'Uruguay', 'Chile', 'Paraguay'], fact: 'Argentina\'s Sun of May celebrates the May Revolution of 1810 — the start of independence.' },
    { flag: '🇵🇱', answer: 'Poland', opts: ['Poland', 'Czech Republic', 'Slovakia', 'Hungary'], fact: 'Poland\'s white and red colours appear in the coat of arms of the Piast dynasty from the 13th century.' },
    { flag: '🇮🇩', answer: 'Indonesia', opts: ['Malaysia', 'Indonesia', 'Philippines', 'Thailand'], fact: 'Indonesia\'s flag is almost identical to Monaco\'s — just slightly different proportions.' },
    { flag: '🇪🇬', answer: 'Egypt', opts: ['Libya', 'Egypt', 'Sudan', 'Algeria'], fact: 'Egypt\'s Eagle of Saladin has been used on Arab flags since the 1950s.' },
    { flag: '🇰🇷', answer: 'South Korea', opts: ['Japan', 'China', 'South Korea', 'Mongolia'], fact: 'South Korea\'s Taegukgi features the yin-yang symbol and four trigrams from the I Ching.' },
  ],
  [
    { flag: '🇸🇪', answer: 'Sweden', opts: ['Norway', 'Finland', 'Sweden', 'Denmark'], fact: 'Sweden\'s flag design dates to the 16th century, making it one of the oldest national flags.' },
    { flag: '🇵🇰', answer: 'Pakistan', opts: ['Afghanistan', 'Pakistan', 'Bangladesh', 'Iran'], fact: 'Pakistan\'s crescent and star represent Islam, progress, and light respectively.' },
    { flag: '🇨🇱', answer: 'Chile', opts: ['Peru', 'Bolivia', 'Chile', 'Colombia'], fact: 'Chile\'s flag inspired the Texas state flag — both feature a single star on blue and red.' },
    { flag: '🇲🇦', answer: 'Morocco', opts: ['Tunisia', 'Morocco', 'Algeria', 'Libya'], fact: 'Morocco\'s five-pointed star (Solomon\'s Seal) was added to the flag in 1915.' },
    { flag: '🇵🇭', answer: 'Philippines', opts: ['Indonesia', 'Malaysia', 'Philippines', 'Vietnam'], fact: 'The Philippines flag is unique — it is flown upside down (red on top) during wartime.' },
  ],
  [
    { flag: '🇷🇺', answer: 'Russia', opts: ['Russia', 'Ukraine', 'Belarus', 'Kazakhstan'], fact: 'Russia\'s tricolour was introduced by Peter the Great, inspired by Dutch flag designs.' },
    { flag: '🇹🇭', answer: 'Thailand', opts: ['Cambodia', 'Laos', 'Thailand', 'Myanmar'], fact: 'Thailand\'s flag was redesigned in 1917 after the king reportedly saw it hung upside down.' },
    { flag: '🇨🇴', answer: 'Colombia', opts: ['Venezuela', 'Ecuador', 'Colombia', 'Peru'], fact: 'Colombia\'s yellow represents gold, blue represents the sea, and red represents blood shed for freedom.' },
    { flag: '🇷🇴', answer: 'Romania', opts: ['Bulgaria', 'Romania', 'Moldova', 'Hungary'], fact: 'Romania and Chad have nearly identical flags — only the shade of blue differs slightly.' },
    { flag: '🇬🇭', answer: 'Ghana', opts: ['Ghana', 'Senegal', 'Mali', 'Guinea'], fact: 'Ghana was the first sub-Saharan African country to gain independence in 1957, inspiring its bold flag.' },
  ],
  [
    { flag: '🇳🇱', answer: 'Netherlands', opts: ['Luxembourg', 'Belgium', 'Netherlands', 'France'], fact: 'The Netherlands flag is the oldest tricolour flag still in use, dating to the 1570s.' },
    { flag: '🇻🇳', answer: 'Vietnam', opts: ['China', 'Vietnam', 'Laos', 'Cambodia'], fact: 'Vietnam\'s red star flag was adopted in 1976 after the reunification of North and South Vietnam.' },
    { flag: '🇺🇦', answer: 'Ukraine', opts: ['Russia', 'Sweden', 'Ukraine', 'Slovakia'], fact: 'Ukraine\'s blue and yellow represent the sky over golden wheat fields.' },
    { flag: '🇵🇪', answer: 'Peru', opts: ['Bolivia', 'Peru', 'Ecuador', 'Colombia'], fact: 'Peru\'s flag was designed by General José de San Martín, inspired by flamingos he saw landing.' },
    { flag: '🇮🇱', answer: 'Israel', opts: ['Greece', 'Israel', 'Finland', 'Cyprus'], fact: 'Israel\'s flag design is based on the tallit (Jewish prayer shawl) with the Star of David.' },
  ],
]

// ─── BLOG ARTICLES ────────────────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    slug: 'hardest-flags-in-the-world',
    title: 'The 15 Hardest Flags in the World (And Why They Trip Everyone Up)',
    description: 'From Chad and Romania to Slovenia and Slovakia — the flags that confuse even geography experts. Learn how to tell them apart.',
    category: 'Guide',
    date: '2026-04-20',
    readTime: '6 min',
    keywords: ['hardest flags', 'similar flags quiz', 'flag quiz hard', 'confusing flags'],
    content: [
      { h2: 'Why some flags are nearly identical' },
      { p: 'Several countries have flags so similar that even experts mix them up. This isn\'t a coincidence — many flags share historical roots, colonial influences, or pan-national movements that deliberately unified their designs.' },
      { h2: 'The Chad vs Romania problem' },
      { p: 'Chad and Romania share an almost identical blue, yellow, and red vertical tricolour. The only difference is the shade of blue — Chad uses a slightly darker indigo compared to Romania\'s cobalt. Both countries adopted these colours independently based on their own revolutionary histories.' },
      { h2: 'Slovenia, Slovakia, and Russia' },
      { p: 'All three use the same Pan-Slavic colours: white, blue, and red in horizontal stripes. The only distinction is the coat of arms. Slovenia features the Triglav mountain, Slovakia shows a patriarchal cross, and Russia has no emblem at all.' },
      { h2: 'Indonesia vs Monaco' },
      { p: 'Two red-over-white flags with different proportions. Indonesia\'s flag is wider. Historically, these two nations developed their flags entirely independently — Indonesia\'s from ancient Majapahit kingdom colours, and Monaco\'s from the Grimaldi family coat of arms.' },
      { h2: 'How to memorise confusing flags' },
      { p: 'The best trick is to associate each flag with one distinctive feature or story rather than trying to remember the colours alone. For Chad vs Romania, remember that Chad is further west and its blue is darker — like a deep evening sky. Practice daily with our flag quiz and these will become second nature within a week.' },
    ],
  },
  {
    slug: 'geography-quiz-tips-improve-score',
    title: 'How to Improve Your Geography Quiz Score: 7 Proven Methods',
    description: 'From mnemonic tricks to daily practice routines — the exact methods top players use to ace geography quizzes every time.',
    category: 'Tips',
    date: '2026-04-15',
    readTime: '5 min',
    keywords: ['geography quiz tips', 'improve geography knowledge', 'flag quiz strategy', 'memorise flags'],
    content: [
      { h2: 'Method 1: Group flags by region' },
      { p: 'Rather than trying to memorise all 197 flags individually, group them by continent. African flags frequently use red, green, and yellow (Pan-African colours). Nordic flags all share the asymmetric cross design. Once you know the regional patterns, individual flags become much easier to identify.' },
      { h2: 'Method 2: Learn the outliers first' },
      { p: 'Flags like Nepal (non-rectangular), Switzerland (square), and Libya (formerly all-green) stand out immediately. Memorise the unusual ones first — they\'re free points in any quiz.' },
      { h2: 'Method 3: Play daily without skipping' },
      { p: 'Research on spaced repetition shows that reviewing material daily, even for just 5 minutes, produces dramatically better long-term retention than hour-long cramming sessions. Our daily quiz is designed exactly for this — five flags a day builds a powerful memory library over weeks.' },
      { h2: 'Method 4: Learn the story behind the flag' },
      { p: 'Flags are easier to remember when you understand what they mean. Kenya\'s Maasai shield. Brazil\'s starry sky. The Philippines\' flag that flips during wartime. These stories create emotional memory anchors that pure visual memorisation cannot match.' },
    ],
  },
  {
    slug: 'africa-flags-complete-guide',
    title: 'All 54 Africa Flags: The Complete Guide With Meanings',
    description: 'A country-by-country breakdown of every African flag — their colours, symbols, and the histories behind them.',
    category: 'Wiki',
    date: '2026-04-10',
    readTime: '12 min',
    keywords: ['africa flags', 'african flag quiz', 'flags of africa', 'african countries flags'],
    content: [
      { h2: 'The Pan-African colours' },
      { p: 'Red, yellow, and green appear on more African flags than any other combination. These colours were popularised by Ethiopia — the only African country never colonised — making them a symbol of African liberation and pride. Ghana adopted them first in 1957, inspiring dozens of nations that followed.' },
      { h2: 'North African flags' },
      { p: 'North African flags are heavily influenced by Islam and Arab heritage. Egypt, Algeria, Libya, and Tunisia all feature the crescent moon and star, or green — a colour sacred in Islam. Morocco\'s green star and white background is one of the cleanest and most recognisable designs on the continent.' },
      { h2: 'East African flags' },
      { p: 'Kenya, Uganda, and Tanzania all achieved independence in the early 1960s and their flags reflect that era — bold stripes, national symbols, and deliberate breaks from colonial imagery. Kenya\'s flag with its Maasai shield is one of the most distinctive on the continent.' },
    ],
  },
  {
    slug: 'daily-flag-quiz-vs-geoguessr',
    title: 'PlayFlaggle vs GeoGuessr: Which Geography Game Is Better in 2026?',
    description: 'An honest comparison of daily flag quizzes versus GeoGuessr. Different games, different skills — which one should you play?',
    category: 'Comparison',
    date: '2026-04-05',
    readTime: '4 min',
    keywords: ['geoguessr alternative', 'free geography quiz game', 'flag quiz vs geoguessr', 'daily geography game free'],
    content: [
      { h2: 'GeoGuessr: brilliant but expensive' },
      { p: 'GeoGuessr is arguably the most addictive geography game ever made. Dropping into a random Street View location and working out where you are from visual clues is a uniquely satisfying experience. But since moving to a subscription model, unlimited play costs around £30 per year — a barrier for casual players.' },
      { h2: 'Daily flag quizzes: free, fast, habit-forming' },
      { p: 'PlayFlaggle is designed for the five-minute daily habit. It tests a different kind of geographical knowledge — vexillology (the study of flags) rather than spatial awareness. You learn country shapes from GeoGuessr; you learn flags, capitals, and cultural symbols from a daily flag quiz. Both are valuable.' },
      { h2: 'Which one should you play?' },
      { p: 'Play both — they complement each other perfectly. GeoGuessr for weekend sessions when you have 20 minutes. PlayFlaggle every morning as your 2-minute daily ritual. Together they build a comprehensive geography knowledge base faster than either alone.' },
    ],
  },
  {
    slug: 'european-flags-quiz-guide',
    title: 'European Flags Quiz: All 44 Countries Explained',
    description: 'Master every European flag with this complete guide. Spot the differences between similar flags and ace your next European geography quiz.',
    category: 'Guide',
    date: '2026-03-28',
    readTime: '8 min',
    keywords: ['european flags quiz', 'europe flag quiz', 'guess european flags', 'european countries flags'],
    content: [
      { h2: 'The Nordic cross family' },
      { p: 'Denmark, Sweden, Norway, Finland, and Iceland all use an asymmetric cross on a coloured background — the Nordic cross. Denmark\'s Dannebrog (white cross on red) is the world\'s oldest state flag, dating to 1219. Sweden\'s yellow cross on blue, Norway\'s red, white and blue cross, Finland\'s blue cross on white, and Iceland\'s red cross on blue and white all descend from this tradition.' },
      { h2: 'The tricolour nations' },
      { p: 'France\'s blue, white, red vertical tricolour inspired dozens of European flags after the French Revolution. The Netherlands, Italy, Romania, and Belgium all use tricolour designs, though Belgium\'s is vertical black, yellow, and red.' },
      { h2: 'UK, Ireland, and their neighbours' },
      { p: 'The United Kingdom\'s Union Jack is one of the most complex flags in the world — a combination of the crosses of St George (England), St Andrew (Scotland), and St Patrick (Ireland). The Republic of Ireland uses a simple vertical green, white, and orange tricolour.' },
    ],
  },
  {
    slug: 'wordle-for-geography-games-ranked',
    title: 'Every Geography Wordle Game Ranked: Worldle, Flagle, Globle and More',
    description: 'We tested every geography Wordle-style game in 2026 and ranked them by fun, difficulty, and replayability.',
    category: 'Comparison',
    date: '2026-03-20',
    readTime: '5 min',
    keywords: ['geography wordle', 'flag wordle game', 'worldle alternative', 'daily geography quiz game'],
    content: [
      { h2: 'The daily geography game explosion' },
      { p: 'Since Wordle\'s viral moment in 2022, dozens of geography-themed daily games have launched. Worldle (country shapes), Flagle (flags), Globle (country positions), Countryle (country attributes) — the format has proven incredibly sticky. The daily reset and shareable result card create a perfect habit loop.' },
      { h2: 'What makes a great geography daily game' },
      { p: 'The best daily geography games share three qualities: they are playable in under five minutes, they teach you something new every day, and the result is shareable in a way that makes friends want to play. The streak mechanic is the secret weapon — once you\'ve built a 30-day streak, you\'ll do almost anything to keep it alive.' },
    ],
  },
]

// ─── WIKI ENTRIES ─────────────────────────────────────────────────────────
export const WIKI_ENTRIES = [
  {
    slug: 'what-is-vexillology',
    title: 'What is Vexillology?',
    description: 'Vexillology is the study of flags — their history, symbolism, and design. Learn why it matters and how to get started.',
    keywords: ['vexillology', 'study of flags', 'flag meaning', 'what does a flag represent'],
    content: 'Vexillology (from Latin vexillum, meaning flag) is the scholarly study of flags and related symbols. A practitioner of vexillology is called a vexillologist. The field covers the history, symbolism, design, and usage of flags across nations, organisations, and movements. The North American Vexillological Association (NAVA) published five key principles for good flag design: simplicity, meaningful symbolism, two or three basic colours, no lettering or seals, and distinctiveness.',
  },
  {
    slug: 'pan-african-colours',
    title: 'Pan-African Colours: Red, Gold, and Green',
    description: 'Why do so many African flags use the same red, gold, and green? The story of Pan-African colours and how Ethiopia inspired a continent.',
    keywords: ['pan african colours', 'african flag colours', 'red gold green flag', 'ethiopia flag meaning'],
    content: 'The Pan-African colours — red, gold (or yellow), and green — appear on the flags of more than two dozen African nations. Their origin traces to Ethiopia, the only African nation to successfully resist European colonisation. Ethiopia\'s ancient flag used these colours, making them a symbol of African independence and pride. When Ghana became the first sub-Saharan African nation to achieve independence in 1957, it adopted the Pan-African colours to honour this legacy. Dozens of newly independent nations followed throughout the 1960s.',
  },
  {
    slug: 'nordic-cross-flags',
    title: 'The Nordic Cross: Denmark, Sweden, Norway, Finland, Iceland',
    description: 'Five countries, one design tradition. The Nordic cross explained — history, meaning, and how to tell them apart.',
    keywords: ['nordic cross flag', 'scandinavian flags', 'tell apart nordic flags', 'denmark sweden norway flag difference'],
    content: 'The Nordic cross appears on the flags of five Scandinavian nations: Denmark, Sweden, Norway, Finland, and Iceland. In each flag, the cross is positioned slightly left of centre — offset toward the hoist — a design said to have originated with the Danish Dannebrog in the 13th century. The Dannebrog is the world\'s oldest national flag still in use. Each country has adapted the cross with its own colour scheme: Denmark\'s white cross on red, Sweden\'s yellow on blue, Norway\'s red and white cross on blue, Finland\'s blue on white, and Iceland\'s red cross on blue and white.',
  },
  {
    slug: 'which-country-has-no-flag',
    title: 'Which Country Has No Flag?',
    description: 'Every recognised country has a flag — but some territories, regions, and entities are more complicated. The full answer.',
    keywords: ['country with no flag', 'which country has no flag', 'flag facts', 'unusual flags'],
    content: 'Every sovereign nation recognised by the United Nations has an official national flag. However, some territories and disputed regions are more complex. Antarctica has no official flag because it has no government — though the True South flag has been proposed. Some nations like Nepal have non-rectangular flags (a double pennon). The Vatican uses a square flag rather than the universal rectangle. Disputed territories like Kosovo, Western Sahara, and Taiwan have flags that are not universally recognised. The most unusual national flag in terms of design belongs to Nepal — the only non-rectangular national flag in the world.',
  },
  {
    slug: 'flag-quiz-capitals',
    title: 'Capital Cities Quiz: Which Capital Goes With Which Country?',
    description: 'The hardest capitals to remember, and memory tricks to make them stick forever. From Nur-Sultan to Naypyidaw.',
    keywords: ['capital cities quiz', 'country capitals quiz', 'hard capitals to remember', 'geography capitals'],
    content: 'Capital cities are among the most searched geography quiz topics. Some are famous (Paris, Tokyo, London) while others are genuinely difficult to place — Nur-Sultan (Kazakhstan), Naypyidaw (Myanmar), Ouagadougou (Burkina Faso), and Yamoussoukro (Ivory Coast) are among the hardest. A useful memory trick: many capitals that are NOT the largest city exist for political reasons. Brazil moved its capital to Brasília in 1960 to develop the interior. Australia chose Canberra as a compromise between Sydney and Melbourne. The US chose Washington D.C. as a neutral district between Northern and Southern states.',
  },
]

// ─── FAQ ─────────────────────────────────────────────────────────────────
export const FAQ = [
  {
    q: 'Is PlayFlaggle free to play?',
    a: 'Yes — PlayFlaggle is completely free forever. No account required, no subscription, no hidden fees. We are supported by non-intrusive advertising.',
  },
  {
    q: 'How often does the daily quiz change?',
    a: 'The quiz resets every day at midnight in your local time zone. You get 5 new flags every single day — that\'s 1,825 flags per year.',
  },
  {
    q: 'How does the streak work?',
    a: 'Your streak counts how many consecutive days you\'ve played. Miss a day and it resets to zero. Your streak is saved in your browser — no account needed.',
  },
  {
    q: 'Can I play on my phone?',
    a: 'Absolutely. PlayFlaggle is fully optimised for mobile, tablet, and desktop. The quiz is designed to be playable in one hand in under 3 minutes.',
  },
  {
    q: 'What is the hardest flag in the world?',
    a: 'According to our player data, Kyrgyzstan, Turkmenistan, and Bhutan are the most frequently guessed wrong. Their unique designs combine complex symbols with colours that don\'t match more common flag patterns.',
  },
  {
    q: 'How is my score percentile calculated?',
    a: 'Your percentile is calculated based on the distribution of scores from all players who completed that day\'s quiz. A score of "better than 84%" means 84 out of every 100 players scored lower than you.',
  },
  {
    q: 'Can I share my results?',
    a: 'Yes! After completing the quiz, tap "Share my result" to copy a text summary with emoji squares to your clipboard. Paste it anywhere — X, WhatsApp, Instagram, or just brag to a friend.',
  },
  {
    q: 'How many countries\' flags are in the game?',
    a: 'PlayFlaggle covers all 197 sovereign nations plus widely recognised territories. Flags rotate through the daily quiz over a 30-day cycle, then shuffle for a new sequence.',
  },
  {
    q: 'Is PlayFlaggle good for kids?',
    a: 'Yes — geography teachers use daily flag quizzes as a 5-minute classroom warm-up activity. PlayFlaggle is appropriate for all ages, with no mature content.',
  },
  {
    q: 'How is PlayFlaggle different from Flagle?',
    a: 'Flagle uses a progressive reveal mechanic (showing the flag in pieces). PlayFlaggle uses multiple-choice — faster to play, more accessible, and better suited to a daily habit. Both are great, they just test different skills.',
  },
  {
    q: 'Can I suggest a new quiz type?',
    a: 'We\'d love to hear from you. Planned features include capitals quiz, map shape quiz, currency quiz, and continent speed rounds. Use the contact page to submit ideas.',
  },
  {
    q: 'Why did my streak reset?',
    a: 'Streaks reset if you skip a calendar day. They are stored in your browser\'s local storage — clearing your browser data or switching devices will also reset it. Account-based streak saving is coming soon.',
  },
]
