'use client'
import { useEffect, useState } from 'react'

export default function Explore(){
  const [city,setCity]=useState('Paris')
  const [lat,setLat]=useState('48.8566')
  const [lon,setLon]=useState('2.3522')
  const [tci,setTci]=useState(null)
  const [scores,setScores]=useState(null)
  const [wx,setWx]=useState(null)

  async function load(){
    const w = await fetch(`/api/live/weather?lat=${lat}&lon=${lon}`).then(r=>r.json())
    setWx(w)
    const t = await fetch(`/api/live/tci?lat=${lat}&lon=${lon}`).then(r=>r.json())
    setTci(t)
    const s = await fetch(`/api/live/teleport?city=${encodeURIComponent(city)}`).then(r=>r.json())
    setScores(s)
  }
  useEffect(()=>{ load() },[])

  return (
    <div className="grid">
      <div className="card">
        <h3>Choose Location</h3>
        <div className="row">
          <div><div className="label">City</div><input className="input" value={city} onChange={e=>setCity(e.target.value)} /></div>
          <div><div className="label">Lat</div><input className="input" value={lat} onChange={e=>setLat(e.target.value)} /></div>
          <div><div className="label">Lon</div><input className="input" value={lon} onChange={e=>setLon(e.target.value)} /></div>
        </div>
        <div className="cta" style={{justifyContent:'flex-start'}}>
          <button className="btn primary" onClick={load}>Refresh</button>
        </div>
      </div>

      <div className="card">
        <h3>Live Weather (7d)</h3>
        <div className="small">Open‑Meteo · lat {lat}, lon {lon}</div>
        <table className="table">
          <thead><tr><th>Day</th><th>Hi</th><th>Lo</th><th>Rain %</th></tr></thead>
          <tbody>
            {wx?.daily?.time?.map((d,i)=>(
              <tr key={d}><td>{d}</td><td>{wx.daily.temperature_2m_max[i]}°</td><td>{wx.daily.temperature_2m_min[i]}°</td><td>{Math.round(wx.daily.precipitation_probability_max[i]||0)}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>TripComfort Index</h3>
        <p style={{fontSize:40, margin:0}}>{tci?.score ?? '—'}</p>
        <div className="small">{tci?.explain}</div>
      </div>

      <div className="card">
        <h3>Urban Scores (Teleport)</h3>
        {scores?.scores ? (
          <ul>
            {scores.scores.slice(0,8).map(s=>(<li key={s.name}>{s.name}: {Math.round(s.score_out_of_10*10)/10}/10</li>))}
          </ul>
        ): <div className="small">No scores yet.</div>}
      </div>
    </div>
  )
}
