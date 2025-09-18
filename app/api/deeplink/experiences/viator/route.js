import { AFF } from '@/lib/affiliates'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const city = searchParams.get('city') ?? 'Paris'
  const url = `https://www.viator.com/searchResults/all?text=${encodeURIComponent(city)}&pid=${encodeURIComponent(AFF.viator)}`
  return new Response(null,{ status:302, headers:{ Location: url }})
}
