import { AFF } from '@/lib/affiliates'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const city = searchParams.get('city') ?? 'Paris'
  const checkin = searchParams.get('checkin') ?? '2025-10-10'
  const checkout = searchParams.get('checkout') ?? '2025-10-14'
  const url = `https://www.rentalcars.com/SearchResults.do?city=${encodeURIComponent(city)}&dropCity=${encodeURIComponent(city)}&puDay=${checkin.slice(-2)}&puMonth=${checkin.slice(0,7)}&doDay=${checkout.slice(-2)}&doMonth=${checkout.slice(0,7)}&affiliateCode=${encodeURIComponent(AFF.rentalcars)}`
  return new Response(null,{ status:302, headers:{ Location: url }})
}
