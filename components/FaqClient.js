'use client'
import { useState } from 'react'

export default function FaqClient({ faqs }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            {f.q}
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-a">{f.a}</div>
        </div>
      ))}
    </div>
  )
}
