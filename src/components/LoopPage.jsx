import React from 'react'
import ThemeToggle from './ThemeToggle'

const numbers = [
  ['5', 'data sources'],
  ['169', 'ad accounts, one sign-in'],
  ['0', 'mismatch vs source totals'],
  ['18x', 'less stored data'],
  ['27/27', 'partner api checks'],
  ['105', 'commits in 7 weeks']
]

const problems = [
  ['platforms rewrite history', 'each sync re-reads a 28 / 60 day restatement window, mirrors month windows, and moves its cursor only after a full success.', 'stored totals match platform reports exactly, to the paisa over 30 days.'],
  ['meta counts every purchase three times', 'the mapper picks one conversion by priority across pixel, omni and plain purchase. reach is never summed across days.', 'revenue is counted once and non-additive reach stays correct.'],
  ['never lose data quietly', 'writes use platform ids, stable composite keys and sha256 sheet fingerprints. reconciliation blocks mass deletion, and upstream order deletes are audited daily.', 'a shrinking sheet or destructive sync cannot silently erase history.'],
  ['multi-brand without copying secrets', 'brands stay separate from per-source connections. shared credentials are stored once and referenced; umbrellas roll up all, domestic or international.', 'one system supports multiple brands without duplicated secrets.'],
  ['one number, everywhere', 'every dashboard figure comes from one day × country series. ratios come from totals, never averages of averages.', 'target pacing matched the old Power BI report on every figure.']
]

function ArchitectureDiagram() {
  return (
    <div className="loop-diagram" role="img" aria-label="Loop architecture: five data sources flow through a per-brand sync engine into MongoDB, then into the CEO dashboard, the ROASify integration and Ask GMS">
      <svg viewBox="0 0 920 330" aria-hidden="true">
        <defs>
          <marker id="loop-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>
        <g className="diagram-label">
          <text x="28" y="28">sources</text>
          <text x="350" y="28">ingestion</text>
          <text x="550" y="28">model</text>
          <text x="735" y="28">products</text>
        </g>
        <g className="diagram-source">
          <rect x="20" y="48" width="160" height="38" /><text x="100" y="72">shopify</text>
          <rect x="20" y="100" width="160" height="38" /><text x="100" y="124">meta ads</text>
          <rect x="20" y="152" width="160" height="38" /><text x="100" y="176">google ads</text>
          <rect x="20" y="204" width="160" height="38" /><text x="100" y="228">google sheets</text>
          <rect x="20" y="256" width="160" height="38" /><text x="100" y="280">ga4 · connector built</text>
        </g>
        <path className="diagram-line" d="M 180 67 H 315 M 180 119 H 315 M 180 171 H 315 M 180 223 H 315 M 180 275 H 315" markerEnd="url(#loop-arrow)" />
        <rect className="diagram-box" x="315" y="125" width="190" height="100" rx="2" />
        <text className="diagram-box-title" x="410" y="165">per-brand</text><text className="diagram-box-title" x="410" y="187">sync engine</text>
        <text className="diagram-box-sub" x="410" y="207">restatements · cursors</text>
        <path className="diagram-line" d="M 505 175 H 550" markerEnd="url(#loop-arrow)" />
        <rect className="diagram-box" x="550" y="125" width="145" height="100" rx="2" />
        <text className="diagram-box-title" x="622" y="165">mongodb</text><text className="diagram-box-sub" x="622" y="188">brands / connections</text><text className="diagram-box-sub" x="622" y="207">data tables</text>
        <path className="diagram-line" d="M 695 175 H 730" markerEnd="url(#loop-arrow)" />
        <g className="diagram-product">
          <rect x="730" y="65" width="165" height="42" /><text x="812" y="91">ceo dashboard</text>
          <rect x="730" y="145" width="165" height="42" /><text x="812" y="171">roasify integration</text>
          <rect className="diagram-next" x="730" y="225" width="165" height="42" /><text x="812" y="251">ask gms · next</text>
        </g>
        <path className="diagram-line" d="M 730 175 C 710 175 715 86 730 86 M 730 175 C 710 175 715 246 730 246" markerEnd="url(#loop-arrow)" />
      </svg>
    </div>
  )
}

export default function LoopPage({ isDark, toggleTheme }) {
  return (
    <div className="site-root loop-root">
      <div className="container">
        <header className="loop-header">
          <div className="topbar">
            <a className="wordmark" href="/" aria-label="Back to home">ab<span>.</span></a>
            <div className="topbar-actions"><a className="loop-back" href="/">back to portfolio <span aria-hidden="true">↗</span></a><ThemeToggle isDark={isDark} toggleTheme={toggleTheme} /></div>
          </div>
        </header>
        <main>
          <section className="loop-hero" aria-labelledby="loop-heading">
            <p className="eyebrow">case study / growify digital / 01</p>
            <h1 id="loop-heading" className="loop-title">loop.</h1>
            <p className="loop-lede">a production data platform that replaced a paid analytics stack with one reconciled model, a ceo dashboard, and a partner api.</p>
            <div className="loop-numbers">{numbers.map(([value, label]) => <div className="loop-number" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
          </section>

          <section className="loop-section">
            <div className="loop-section-label">01 / the problem</div>
            <div className="loop-copy"><p>the agency paid for Funnel.io to export Shopify, Meta and Google data into Power BI. it was expensive, slow to change, and the data never came back to us.</p><p>loop talks to each platform directly, owns the data, and serves the ceo's dashboard plus a partner api.</p></div>
          </section>

          <section className="loop-section loop-architecture">
            <div className="loop-section-label">02 / the shape</div>
            <div><ArchitectureDiagram /></div>
          </section>

          <section className="loop-section">
            <div className="loop-section-label">03 / hard problems</div>
            <div className="problem-grid">{problems.map(([problem, fix, result], index) => <article className="problem-card" key={problem}><span className="problem-index">0{index + 1}</span><h2>{problem}</h2><p><b>fix</b> {fix}</p><p className="problem-result"><b>result</b> {result}</p></article>)}</div>
          </section>

          <section className="loop-section">
            <div className="loop-section-label">04 / what shipped</div>
            <div className="loop-copy"><p>a ceo dashboard built from the ceo's own prototype: kpis, target pacing, channel roas, a region heat map, cohort-style tables and csv export.</p><p>monthly targets come from Google Sheets every 12 hours with a full change log. it includes Indian financial-year quarters, blended cac, and my roasify integration: it reads automated ad data and Shopify metrics from loop through brand-scoped access.</p></div>
          </section>

          <section className="loop-section">
            <div className="loop-section-label">05 / production</div>
            <div className="loop-copy"><p>one DigitalOcean server runs isolated production and dev copies with their own ports, settings and databases. nginx, Let's Encrypt, crash and reboot auto-restart, and a health-checked GitHub Actions deploy keep it boring.</p><p>deploys use <code>git archive</code> of committed code only, a pinned host key and a deploy-only SSH key. no secrets ship with the build.</p></div>
          </section>

          <section className="loop-section loop-next">
            <div className="loop-section-label">06 / in progress</div>
            <div className="loop-copy"><h2>ask gms, the ai analyst.</h2><p>analysts and the ceo ask plain-English questions — which campaigns spend without selling? where is checkout drop-off vs last month? which countries return the most orders?</p><p>the answers will be grounded in loop's reconciled data and metric definitions instead of model guesses. the spec has 34 real analyst questions; version 1 covers six overall-performance questions across month-on-month, week-on-week, country, region, month-to-date and daily views.</p></div>
          </section>

          <p className="loop-stack"><span>stack</span> NestJS · Node 22 · MongoDB Atlas · Mongoose · Next.js 15 · React · TypeScript · Shopify Admin + ShopifyQL · Meta Marketing API · Google Ads API (GAQL) · Sheets API · GA4 Data API · nginx · pm2 · GitHub Actions</p>
        </main>
      </div>
    </div>
  )
}
