import { AFF } from '@/lib/affiliates'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const city = searchParams.get('city') ?? 'Paris'
  const checkin = searchParams.get('checkin') ?? '2025-10-10'
  const checkout = searchParams.get('checkout') ?? '2025-10-14'
  const url = `https://www.discovercars.com/?a_aid=${encodeURIComponent(AFF.discovercars)}&pickup_city=${encodeURIComponent(city)}&from=${encodeURIComponent(checkin)}&to=${encodeURIComponent(checkout)}`
  return new Response(null,{ status:302, headers:{ Location: url }})
}
