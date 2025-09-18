'use client'
import { useState } from 'react'

export default function Book(){
  const [city,setCity]=useState('Paris')
  const [checkin,setCheckin]=useState('2025-10-10')
  const [checkout,setCheckout]=useState('2025-10-14')
  const [adults,setAdults]=useState(2)

  const [origin,setOrigin]=useState('DEL')
  const [dest,setDest]=useState('CDG')
  const [depart,setDepart]=useState('2025-10-10')
  const [ret,setRet]=useState('2025-10-14')
  const [adultsF,setAdultsF]=useState(1)

  return (
    <div className="grid">
      <div className="card">
        <h3>Flights</h3>
        <div className="row">
          <div><div className="label">From</div><input className="input" value={origin} onChange={e=>setOrigin(e.target.value.toUpperCase())} /></div>
          <div><div className="label">To</div><input className="input" value={dest} onChange={e=>setDest(e.target.value.toUpperCase())} /></div>
          <div><div className="label">Depart</div><input className="input" type="date" value={depart} onChange={e=>setDepart(e.target.value)} /></div>
          <div><div className="label">Return</div><input className="input" type="date" value={ret} onChange={e=>setRet(e.target.value)} /></div>
          <div><div className="label">Adults</div><input className="input" type="number" min="1" value={adultsF} onChange={e=>setAdultsF(e.target.value)} /></div>
        </div>
        <div style={{marginTop:10,display:'flex',gap:8,flexWrap:'wrap'}}>
          <a className="btn primary" href={`/api/deeplink/flights?origin=${origin}&dest=${dest}&depart=${depart}&return=${ret}&adults=${adultsF}`} target="_blank">Kayak</a>
          <a className="btn" href={`/api/deeplink/flights/skyscanner?origin=${origin}&dest=${dest}&depart=${depart}&return=${ret}&adults=${adultsF}`} target="_blank">Skyscanner</a>
          <a className="btn" href={`/api/deeplink/flights/trip?origin=${origin}&dest=${dest}&depart=${depart}&return=${ret}&adults=${adultsF}`} target="_blank">Trip.com</a>
          <a className="btn" href={`/api/deeplink/flights/google?origin=${origin}&dest=${dest}&depart=${depart}&return=${ret}&adults=${adultsF}`} target="_blank">Google Flights</a>
          <a className="btn" href={`/api/deeplink/flights/kiwi?origin=${origin}&dest=${dest}&depart=${depart}&return=${ret}&adults=${adultsF}`} target="_blank">Kiwi</a>
          <a className="btn" href={`/api/deeplink/flights/priceline?origin=${origin}&dest=${dest}&depart=${depart}&return=${ret}&adults=${adultsF}`} target="_blank">Priceline</a>
        </div>
      </div>

      <div className="card">
        <h3>Hotels</h3>
        <div className="row">
          <div><div className="label">City</div><input className="input" value={city} onChange={e=>setCity(e.target.value)} /></div>
          <div><div className="label">Check-in</div><input className="input" type="date" value={checkin} onChange={e=>setCheckin(e.target.value)} /></div>
          <div><div className="label">Check-out</div><input className="input" type="date" value={checkout} onChange={e=>setCheckout(e.target.value)} /></div>
          <div><div className="label">Adults</div><input className="input" type="number" min="1" value={adults} onChange={e=>setAdults(e.target.value)} /></div>
        </div>
        <div style={{marginTop:10,display:'flex',gap:8,flexWrap:'wrap'}}>
          <a className="btn primary" href={`/api/deeplink/hotels?city=${encodeURIComponent(city)}&checkin=${checkin}&checkout=${checkout}&adults=${adults}`} target="_blank">Links List</a>
        </div>
      </div>

      <div className="card">
        <h3>Experiences</h3>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <a className="btn" target="_blank" href={`/api/deeplink/experiences/viator?city=${encodeURIComponent(city)}`}>Viator</a>
          <a className="btn" target="_blank" href={`/api/deeplink/experiences/klook?city=${encodeURIComponent(city)}`}>Klook</a>
          <a className="btn" target="_blank" href={`/api/deeplink/experiences/gyg?city=${encodeURIComponent(city)}`}>GetYourGuide</a>
          <a className="btn" target="_blank" href={`/api/deeplink/experiences/tiqets?city=${encodeURIComponent(city)}`}>Tiqets</a>
        </div>
      </div>

      <div className="card">
        <h3>Cars & Rail</h3>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <a className="btn" target="_blank" href={`/api/deeplink/cars/rentalcars?city=${encodeURIComponent(city)}&checkin=${checkin}&checkout=${checkout}`}>Rentalcars.com</a>
          <a className="btn" target="_blank" href={`/api/deeplink/cars/discover?city=${encodeURIComponent(city)}&checkin=${checkin}&checkout=${checkout}`}>DiscoverCars</a>
          <a className="btn" target="_blank" href={`/api/deeplink/rail/trainline?origin=${encodeURIComponent(origin)}&dest=${encodeURIComponent(dest)}&depart=${depart}`}>Trainline</a>
        </div>
      </div>
    </div>
  )
}
