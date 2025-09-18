import { AFF } from '@/lib/affiliates'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const o = (searchParams.get('origin')||'DEL').toUpperCase()
  const d = (searchParams.get('dest')||'CDG').toUpperCase()
  const depart = searchParams.get('depart')||'2025-10-10'
  const ret = searchParams.get('return')||''
  const adults = searchParams.get('adults') || '1'
  const url = `https://www.google.com/travel/flights?q=Flights%20from%20${o}%20to%20${d}%20on%20${depart}${ret?('%20return%20'+ret):''}%20${adults}%20adults&ap=${encodeURIComponent(AFF.gflights)}`
  return new Response(null,{ status:302, headers:{ Location: url }})
}
