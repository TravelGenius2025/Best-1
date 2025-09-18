import { AFF } from '@/lib/affiliates'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const o = (searchParams.get('origin')||'DEL').toUpperCase()
  const d = (searchParams.get('dest')||'CDG').toUpperCase()
  const depart = searchParams.get('depart')||'2025-10-10'
  const ret = searchParams.get('return')||''
  const adults = searchParams.get('adults') || '1'
  const url = `https://www.priceline.com/m/fly/search/${o}-${d}-${depart}${ret?('-'+ret):''}?t_id=${encodeURIComponent(AFF.priceline)}&nojs=true&cabin=ECO&numadults=${adults}`
  return new Response(null,{ status:302, headers:{ Location: url }})
}
