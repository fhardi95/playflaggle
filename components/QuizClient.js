'use client'
import { useState, useEffect, useCallback } from 'react'
import { QUIZ_BANK } from '../lib/data'

function getDayIndex() {
  const epoch = new Date('2026-01-01')
  const now = new Date()
  return Math.floor((now - epoch) / 86400000) % QUIZ_BANK.length
}
function getTodayKey() {
  const d = new Date()
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
}

const EMOJIS = ['😅','😐','🙂','😊','🤩','🏆']
const LABELS = ['Keep practising!', 'Not bad — try again tomorrow!', 'Decent — room to grow!', 'Good job — above average!', 'Great score — nearly perfect!', 'PERFECT — geography genius! 🎓']
const PERCENTILES = [12, 28, 45, 67, 84, 97]
const MESSAGES_CORRECT = ['Correct! 🎉', 'Nailed it! 🎯', 'Brilliant! ✅', 'Spot on! 🌟']
const MESSAGES_WRONG = (ans) => `The answer was ${ans}`

export default function QuizClient() {
  const [phase, setPhase] = useState('loading') // loading | quiz | result | done
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const [answered, setAnswered] = useState(false)
  const [feedback, setFeedback] = useState({ text: '', type: '' })
  const [shuffled, setShuffled] = useState([])
  const [countdown, setCountdown] = useState('')
  const [stats, setStats] = useState({ played: 0, streak: 0, best: 0, correct: 0 })
  const [history, setHistory] = useState([])
  const [shareText, setShareText] = useState('')
  const [copied, setCopied] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [flagShake, setFlagShake] = useState(false)

  const quiz = QUIZ_BANK[getDayIndex()]

  const loadState = useCallback(() => {
    try {
      const raw = localStorage.getItem('flaggle_v2')
      return raw ? JSON.parse(raw) : {}
    } catch { return {} }
  }, [])

  const saveState = useCallback((update) => {
    try {
      const prev = loadState()
      localStorage.setItem('flaggle_v2', JSON.stringify({ ...prev, ...update }))
    } catch {}
  }, [loadState])

  const shuffleOpts = useCallback((opts) => [...opts].sort(() => Math.random() - .5), [])

  useEffect(() => {
    const saved = loadState()
    setStats({
      played: saved.played || 0,
      streak: saved.streak || 0,
      best: saved.best || 0,
      correct: saved.correct || 0,
    })
    setHistory(saved.history || [])

    if (saved.lastDay === getTodayKey()) {
      setPhase('done')
    } else {
      setShuffled(shuffleOpts(quiz[0].opts))
      setPhase('quiz')
    }
  }, [loadState, shuffleOpts, quiz])

  // Countdown timer
  useEffect(() => {
    if (phase !== 'done') return
    const tick = () => {
      const now = new Date()
      const tom = new Date(now); tom.setHours(24, 0, 0, 0)
      const d = tom - now
      const h = String(Math.floor(d / 3600000)).padStart(2, '0')
      const m = String(Math.floor((d % 3600000) / 60000)).padStart(2, '0')
      const s = String(Math.floor((d % 60000) / 1000)).padStart(2, '0')
      setCountdown(`${h}:${m}:${s}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [phase])

  function handleAnswer(opt) {
    if (answered) return
    setAnswered(true)
    const q = quiz[currentQ]
    const correct = opt === q.answer
    const newAnswers = [...answers, correct]

    if (correct) {
      setScore(s => s + 1)
      setFeedback({ text: MESSAGES_CORRECT[Math.floor(Math.random() * MESSAGES_CORRECT.length)], type: 'ok' })
    } else {
      setFeedback({ text: MESSAGES_WRONG(q.answer), type: 'no' })
      setFlagShake(true)
      setTimeout(() => setFlagShake(false), 400)
    }
    setAnswers(newAnswers)
  }

  function nextQuestion() {
    const next = currentQ + 1
    if (next >= 5) {
      finishQuiz()
      return
    }
    setCurrentQ(next)
    setShuffled(shuffleOpts(quiz[next].opts))
    setAnswered(false)
    setFeedback({ text: '', type: '' })
  }

  function finishQuiz() {
    const finalScore = answers.filter(Boolean).length + (answers.length < 5 ? 1 : 0)
    const s = loadState()
    const newStreak = s.streak + 1
    const newBest = Math.max(s.best || 0, newStreak)
    const newPlayed = (s.played || 0) + 1
    const newCorrect = (s.correct || 0) + finalScore
    const newHistory = [...(s.history || []), finalScore >= 4].slice(-14)

    saveState({ streak: newStreak, best: newBest, played: newPlayed, correct: newCorrect, lastDay: getTodayKey(), history: newHistory })
    setStats({ played: newPlayed, streak: newStreak, best: newBest, correct: newCorrect })
    setHistory(newHistory)

    const day = getDayIndex() + 1
    const dots = [...answers, true].slice(0, 5).map(a => a ? '🟩' : '🟥').join('')
    const text = `PlayFlaggle — Day #${day}\n${dots}\n${finalScore}/5 flags correct\nplayflaggle.com`
    setShareText(text)
    setPhase('result')
  }

  function share() {
    if (navigator.share) {
      navigator.share({ text: shareText })
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
    }
  }

  const pct = stats.played > 0 ? Math.round((stats.correct / (stats.played * 5)) * 100) : 0

  if (phase === 'loading') {
    return (
      <div className="quiz-wrap">
        <div className="quiz-card" style={{ textAlign: 'center', padding: '3rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem', animation: 'flagPop .6s ease infinite alternate' }}>🚩</div>
          <p style={{ color: 'var(--muted)', fontSize: '14px' }}>Loading today's quiz…</p>
        </div>
      </div>
    )
  }

  if (phase === 'done') {
    return (
      <div className="quiz-wrap">
        <div className="quiz-card" style={{ textAlign: 'center', padding: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-.03em', marginBottom: '.5rem' }}>You've played today!</h2>
          <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '1.5rem' }}>Come back tomorrow for 5 new flags.</p>
          <div style={{ fontFamily: 'var(--font-syne)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--green)', letterSpacing: '-.04em' }}>{countdown}</div>
          <div style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: '4px' }}>Until next quiz</div>
        </div>
      </div>
    )
  }

  if (phase === 'result') {
    const finalScore = answers.filter(Boolean).length
    return (
      <div className="quiz-wrap" style={{ animation: 'fadeUp .5s ease both' }}>
        <div className="result-card">
          <div className="result-emoji">{EMOJIS[finalScore]}</div>
          <div className="result-score-big">{finalScore}<span className="denom">/5</span></div>
          <div className="result-label">{LABELS[finalScore]}</div>
          <div className="percentile-badge">Better than {PERCENTILES[finalScore]}% of players today</div>
          <div className="history-dots">
            {history.map((w, i) => <div key={i} className={`h-dot ${w ? 'win' : 'loss'}`} />)}
          </div>
          <div className="share-card">
            <strong>PlayFlaggle — Day #{getDayIndex() + 1}</strong>
            <div style={{ fontSize: '18px', letterSpacing: '2px' }}>{answers.map(a => a ? '🟩' : '🟥').join('')}</div>
            <span>playflaggle.com</span>
          </div>
          <button className={`btn-share${copied ? ' copied' : ''}`} onClick={share}>
            {copied ? '✓ Copied!' : '📤 Share my result'}
          </button>
          {quiz[0]?.fact && (
            <div style={{ background: 'var(--surface2)', borderRadius: '12px', padding: '1rem', marginTop: '.5rem', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, textAlign: 'left' }}>
              <strong style={{ color: 'var(--green)', display: 'block', marginBottom: '4px' }}>🧠 Flag fact of the day</strong>
              {quiz[Math.floor(Math.random() * quiz.length)]?.fact}
            </div>
          )}
        </div>

        <div className="email-card">
          <h3>Get tomorrow's quiz first 🚀</h3>
          <p>We'll send the daily flag quiz to your inbox every morning. No spam — ever.</p>
          {emailSent ? (
            <p style={{ color: 'var(--green)', fontWeight: 500 }}>✓ You're in! See you tomorrow.</p>
          ) : (
            <div className="email-row">
              <input className="email-input" type="email" placeholder="your@email.com" id="email-capture" />
              <button className="btn-email" onClick={() => {
                const v = document.getElementById('email-capture')?.value
                if (v?.includes('@')) setEmailSent(true)
              }}>Notify me</button>
            </div>
          )}
        </div>

        <div className="ad-slot">Advertisement — Google AdSense</div>

        <StatsPanel stats={stats} pct={pct} />
      </div>
    )
  }

  // Quiz phase
  const q = quiz[currentQ]
  return (
    <div className="quiz-wrap">
      <div className="ad-slot">Advertisement — Google AdSense</div>

      <StatsPanel stats={stats} pct={pct} />

      <div className="progress-bar" aria-label="Quiz progress">
        {[0,1,2,3,4].map(i => (
          <div key={i} className={`pip${i < currentQ ? (answers[i] ? ' done' : ' wrong-pip') : i === currentQ ? ' active' : ''}`} />
        ))}
      </div>

      <div className="quiz-card">
        <div className="day-label">Day #{getDayIndex() + 1} · Flag {currentQ + 1} of 5</div>

        <div className="flag-area">
          <div className={`flag-display${flagShake ? ' shake' : ''}`} role="img" aria-label="Country flag to identify">
            {q.flag}
          </div>
          <div className="question-text">Which country does this flag belong to?</div>
        </div>

        <div className="options-grid" role="group" aria-label="Answer options">
          {shuffled.map(opt => {
            let cls = 'opt'
            if (answered) {
              if (opt === q.answer) cls += ' correct'
              else if (opt !== q.answer && answers[currentQ] === false && shuffled.indexOf(opt) === shuffled.indexOf(opt)) cls += ' wrong'
            }
            return (
              <button
                key={opt}
                className={answered ? (opt === q.answer ? 'opt correct' : 'opt wrong') : 'opt'}
                onClick={() => handleAnswer(opt)}
                disabled={answered}
                aria-label={`Answer: ${opt}`}
              >
                {opt}
              </button>
            )
          })}
        </div>

        <div className={`feedback${feedback.type ? ` ${feedback.type}` : ''}`} aria-live="polite">
          {feedback.text}
        </div>

        <button
          className="btn-next"
          onClick={nextQuestion}
          style={{ display: answered ? 'block' : 'none' }}
        >
          {currentQ < 4 ? 'Next flag →' : 'See my results →'}
        </button>

        {answered && q.fact && (
          <div style={{ marginTop: '1rem', background: 'var(--surface2)', borderRadius: '10px', padding: '.75rem 1rem', fontSize: '12px', color: 'var(--muted)', lineHeight: 1.6 }}>
            <span style={{ color: 'var(--green)', fontWeight: 500 }}>Flag fact: </span>{q.fact}
          </div>
        )}

        <div className="score-row">
          <div className="score-item"><div className="score-val">{score}</div><div className="score-lbl">Score</div></div>
          <div className="score-item"><div className="score-val">{currentQ + 1}/5</div><div className="score-lbl">Question</div></div>
          <div className="score-item"><div className="score-val">🔥 {stats.streak}</div><div className="score-lbl">Streak</div></div>
        </div>
      </div>
    </div>
  )
}

function StatsPanel({ stats, pct }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px', marginBottom: '1rem' }}>
      {[
        { v: stats.played, l: 'Played' },
        { v: stats.streak, l: 'Streak' },
        { v: stats.best, l: 'Best' },
        { v: `${pct}%`, l: 'Accuracy' },
      ].map(s => (
        <div key={s.l} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px 8px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-.03em' }}>{s.v}</div>
          <div style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginTop: '2px' }}>{s.l}</div>
        </div>
      ))}
    </div>
  )
}
