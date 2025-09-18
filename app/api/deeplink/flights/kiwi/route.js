import { AFF } from '@/lib/affiliates'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const o = (searchParams.get('origin')||'DEL').toUpperCase()
  const d = (searchParams.get('dest')||'CDG').toUpperCase()
  const depart = (searchParams.get('depart')||'2025-10-10').replaceAll('-','.')
  const ret = (searchParams.get('return')||'').replaceAll('-','.')
  const adults = searchParams.get('adults') || '1'
  const url = `https://www.kiwi.com/en/search/results/${o}/${d}/${depart}${ret?('/'+ret):''}?adults=${adults}&affilid=${encodeURIComponent(AFF.kiwi)}`
  return new Response(null,{ status:302, headers:{ Location: url }})
}
