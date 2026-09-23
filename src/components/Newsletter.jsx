import React, { useState } from 'react'

export default function Contact() {
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setResult('sending...')

    const formData = new FormData(event.target)
    formData.append('access_key', '535232a3-7147-492e-be29-f45aa152a841')

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const data = await response.json()

      if (data.success) {
        setResult("message sent — i'll get back to you soon.")
        event.target.reset()
      } else {
        setResult('something went wrong. please try again.')
      }
    } catch {
      setResult('something went wrong. please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-copy">
        <div className="section-label"><span>06</span> contact</div>
        <h2 id="contact-heading" className="contact-title">have something<br />worth building?</h2>
        <p>say hello. i&apos;m always interested in thoughtful products and difficult systems problems.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>your name<input className="input" type="text" name="name" required disabled={isSubmitting} /></label>
        <label>email<input className="input" type="email" name="email" required disabled={isSubmitting} /></label>
        <label>what&apos;s on your mind?<textarea className="input textarea" name="message" rows="4" required disabled={isSubmitting} /></label>
        <button className="btn" type="submit" disabled={isSubmitting}>{isSubmitting ? 'sending...' : 'send message'} <span aria-hidden="true">↗</span></button>
        {result && <p className="form-result" role="status">{result}</p>}
      </form>
    </section>
  )
}
