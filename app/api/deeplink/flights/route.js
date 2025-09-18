import { NextResponse } from 'next/server'
import { AFF } from '@/lib/affiliates'

export async function GET(req){
  const { searchParams } = new URL(req.url)
  const origin = (searchParams.get('origin')||'DEL').toUpperCase()
  const dest = (searchParams.get('dest')||'CDG').toUpperCase()
  const depart = searchParams.get('depart') || '2025-10-10'
  const ret = searchParams.get('return') || ''
  const adults = searchParams.get('adults') || '1'
  const links = [
    { name:'Kayak', url:`https://www.kayak.com/flights/${origin}-${dest}/${depart}${ret?'/'+ret:''}?adults=${adults}&sort=bestflight_a&fs=stops=0&pid=${encodeURIComponent(AFF.kayak)}` }
  ]
  return NextResponse.json({ links })
}
