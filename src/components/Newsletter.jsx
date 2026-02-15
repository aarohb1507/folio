import React, { useState } from 'react'

export default function Contact() {
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)
    setResult('sending...')

    const formData = new FormData(e.target)
    formData.append('access_key', '535232a3-7147-492e-be29-f45aa152a841')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setResult('message sent! i\'ll get back to you soon.')
        e.target.reset()
        setTimeout(() => setResult(''), 4000)
      } else {
        setResult('error. please try again.')
        setTimeout(() => setResult(''), 4000)
      }
    } catch (error) {
      setResult('error. please try again.')
      setTimeout(() => setResult(''), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="heading-lg lowercase">get in touch</h2>
      <p className="muted">have a project or just want to chat? drop me a message</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="your name"
          required
          disabled={isSubmitting}
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="your.email@example.com"
          required
          disabled={isSubmitting}
        />
        <textarea
          className="input textarea"
          name="message"
          placeholder="your message..."
          rows="5"
          required
          disabled={isSubmitting}
        />
        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'sending...' : 'send message'}
        </button>
      </form>

      {result && <p className="form-result">{result}</p>}
    </section>
  )
}
