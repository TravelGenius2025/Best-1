import { NextResponse } from 'next/server'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const lat = searchParams.get('lat') || '48.8566'
  const lon = searchParams.get('lon') || '2.3522'
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`
  const r = await fetch(url, { next: { revalidate: 3600 } })
  const j = await r.json()
  return NextResponse.json(j)
}
