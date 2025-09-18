import { AFF } from '@/lib/affiliates'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const o = searchParams.get('origin') || 'Paris'
  const d = searchParams.get('dest') || 'London'
  const depart = searchParams.get('depart') || '2025-10-10'
  const url = `https://www.thetrainline.com/book/results?origin=${encodeURIComponent(o)}&destination=${encodeURIComponent(d)}&outwardDate=${encodeURIComponent(depart)}&ac=${encodeURIComponent(AFF.trainline)}`
  return new Response(null,{ status:302, headers:{ Location: url }})
}
