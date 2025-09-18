import { AFF } from '@/lib/affiliates'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const city = searchParams.get('city') ?? 'Paris'
  const url = `https://www.klook.com/search/?query=${encodeURIComponent(city)}&aid=${encodeURIComponent(AFF.klook)}`
  return new Response(null,{ status:302, headers:{ Location: url }})
}
