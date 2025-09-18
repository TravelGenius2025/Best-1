import { NextResponse } from 'next/server'

async function findUrbanAreaSlug(city){
  const list = await fetch('https://api.teleport.org/api/urban_areas/').then(r=>r.json())
  const items = list._links['ua:item'] || []
  const found = items.find(it => it.name.toLowerCase().includes(city.toLowerCase()))
  if(!found) return null
  const slug = found.href.split('/').filter(Boolean).pop()
  return slug
}

export async function GET(req){
  const { searchParams } = new URL(req.url)
  const city = searchParams.get('city') || 'Paris'
  const slug = await findUrbanAreaSlug(city)
  if(!slug) return NextResponse.json({ city, scores:null, note:'No Teleport urban area match.' })
  const scores = await fetch(`https://api.teleport.org/api/urban_areas/slug:${slug}/scores/`).then(r=>r.json())
  return NextResponse.json({ city, slug, scores: scores.categories.map(c=>({ name:c.name, score_out_of_10:c.score_out_of_10 })) })
}
