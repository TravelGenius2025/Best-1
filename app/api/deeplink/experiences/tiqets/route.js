import { AFF } from '@/lib/affiliates'
export async function GET(req){
  const { searchParams } = new URL(req.url)
  const city = searchParams.get('city') ?? 'Paris'
  const url = `https://www.tiqets.com/en/search/?q=${encodeURIComponent(city)}&ref=${encodeURIComponent(AFF.tiqets)}`
  return new Response(null,{ status:302, headers:{ Location: url }})
}
