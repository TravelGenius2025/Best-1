export default function Home(){
  return (
    <section className="hero">
      <h1 className="h1">Travel that feels right.</h1>
      <p className="sub">
        We combine live weather, daylight, and rain risk into a simple <b>TripComfort Index</b> (TCI) for any destination and week.
        Then we hand you one‑click deeplinks to trusted providers with your affiliate IDs attached.
      </p>
      <div className="cta">
        <a className="btn primary" href="/book">Start Booking</a>
        <a className="btn" href="/explore">Explore Live Scores</a>
      </div>

      <div className="container kpis">
        <div className="grid">
          <div className="card">
            <h3>Why we’re different</h3>
            <ul>
              <li>⚖️ <b>TCI comfort‑first scoring</b> (0–100) — avoid regret</li>
              <li>🌦 Live 7‑day forecast via Open‑Meteo</li>
              <li>🏙 Teleport urban quality scores (safety, cost, etc.)</li>
              <li>🔗 One‑click deeplinks to flights, stays, trains, cars & more</li>
            </ul>
          </div>
          <div className="card">
            <h3>Your value add</h3>
            <p>Competitors sort by price. You help travelers choose dates and places that will <b>feel great</b> when they arrive —
            longer daylight, lower rain risk, pleasant temps.</p>
            <div className="pill">Unique TCI metric</div> <div className="pill">Provider‑agnostic</div> <div className="pill">Fast & private</div>
          </div>
          <div className="card">
            <h3>How to book</h3>
            <p>No checkout here — you finish on providers you trust. This keeps overhead low and affiliate‑friendly.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
