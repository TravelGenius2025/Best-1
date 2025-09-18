import { NextResponse } from 'next/server'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const lat = searchParams.get('lat') || '48.8566'
  const lon = searchParams.get('lon') || '2.3522'
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`
  const r = await fetch(url, { next: { revalidate: 3600 } })
  const w = await r.json()
  const days = w?.daily?.time?.length || 0
  let score = 0
  for(let i=0;i<days;i++){
    const hi = w.daily.temperature_2m_max[i]
    const lo = w.daily.temperature_2m_min[i]
    const rain = w.daily.precipitation_probability_max[i] || 0
    const mid = (hi + lo)/2
    const tempScore = Math.max(0, 100 - Math.abs(mid-23)*4)
    const rainScore = 100 - rain
    const dayScore = 0.7*tempScore + 0.3*rainScore
    score += dayScore
  }
  score = days ? Math.round(score/days) : 0
  return NextResponse.json({ score, explain:`A blend of temperature comfort and rain risk over the next ${days} days.` })
}
