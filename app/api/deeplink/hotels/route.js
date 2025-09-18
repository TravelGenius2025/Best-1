import { NextResponse } from 'next/server'
import { AFF } from '@/lib/affiliates'
const p = encodeURIComponent

export async function GET(req){
  const { searchParams } = new URL(req.url)
  const city = searchParams.get('city') ?? 'Paris'
  const checkin = searchParams.get('checkin') ?? '2025-10-10'
  const checkout = searchParams.get('checkout') ?? '2025-10-14'
  const adults = searchParams.get('adults') ?? '2'

  const links = [
    { name:'Google Hotels', url:`https://www.google.com/travel/hotels?destination=${p(city)}&dates=${p(checkin)}%2C${p(checkout)}&adults=${adults}` },
    { name:'Booking.com', url:`https://www.booking.com/searchresults.html?ss=${p(city)}&checkin=${p(checkin)}&checkout=${p(checkout)}&group_adults=${adults}&aid=${p(AFF.booking)}` },
    { name:'Agoda', url:`https://www.agoda.com/search?city=${p(city)}&checkIn=${p(checkin)}&checkOut=${p(checkout)}&adults=${adults}&cid=${p(AFF.agoda)}` },
    { name:'Expedia', url:`https://www.expedia.com/Hotel-Search?destination=${p(city)}&startDate=${p(checkin)}&endDate=${p(checkout)}&adults=${adults}&kampaign=${p(AFF.expedia)}` },
    { name:'Hotels.com', url:`https://www.hotels.com/Hotel-Search?destination=${p(city)}&startDate=${p(checkin)}&endDate=${p(checkout)}&adults=${adults}&kampaign=${p(AFF.hotels)}` },
    { name:'Trip.com', url:`https://www.trip.com/hotels/list?city=${p(city)}&checkin=${p(checkin)}&checkout=${p(checkout)}&adult=${adults}&allianceid=${p(AFF.trip)}&sid=${p(AFF.trip)}` },
  ]
  return NextResponse.json({ links })
}
