import { AFF } from '@/lib/affiliates'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const o = (searchParams.get('origin')||'DEL').toUpperCase()
  const d = (searchParams.get('dest')||'CDG').toUpperCase()
  const depart = searchParams.get('depart')||'2025-10-10'
  const ret = searchParams.get('return')||''
  const adults = searchParams.get('adults') || '1'
  const url = `https://www.trip.com/flights/${o}-${d}/?dcity=${o}&acity=${d}&date=${depart}${ret?('&rdate='+ret):''}&adult=${adults}&allianceid=${encodeURIComponent(AFF.trip)}&sid=${encodeURIComponent(AFF.trip)}`
  return new Response(null,{ status:302, headers:{ Location: url }})
}
