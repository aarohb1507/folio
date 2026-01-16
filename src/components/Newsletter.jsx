import React, { useState } from 'react'

export default function Newsletter(){
  const [email, setEmail] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    // placeholder: integrate with mailing provider
    console.log('subscribe', email)
    setEmail('')
    alert('Thanks — you are subscribed (demo)')
  }

  return (
    <section className="section" aria-labelledby="news-heading">
      <h2 id="news-heading" className="heading-lg lowercase">stay updated</h2>
      <p className="muted">subscribe to my email list</p>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          aria-label="Email address"
          className="input"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <button className="btn" type="submit">Subscribe</button>
      </form>
    </section>
  )
}
