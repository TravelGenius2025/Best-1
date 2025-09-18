import { AFF } from '@/lib/affiliates'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const city = searchParams.get('city') ?? 'Paris'
  const url = `https://www.getyourguide.com/-l0/?q=${encodeURIComponent(city)}&partner_id=${encodeURIComponent(AFF.gyg)}`
  return new Response(null,{ status:302, headers:{ Location: url }})
}
