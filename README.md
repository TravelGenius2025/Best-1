# TravelGenius (Live + Affiliates)

A minimal Next.js 14 site that’s ready for Vercel:
- Pink/indigo/violet gradient branding + SVG logo.
- Landing page that clearly states your unique value (TripComfort Index).
- Live content: Open‑Meteo weather, TCI, Teleport urban scores.
- Deeplink routes for Flights (Kayak, Skyscanner, Trip.com, Google Flights, Kiwi, Priceline),
  Hotels (Booking, Agoda, Expedia, Hotels.com, Trip.com), Experiences (Viator, Klook, GetYourGuide, Tiqets),
  Cars (Rentalcars, DiscoverCars) and Rail (Trainline).

## Deploy quickly
1) Create a new GitHub repo and upload this folder.
2) Import the repo in Vercel → deploy.
3) Add env vars from `.env.example` (or hardcode in `lib/affiliates.js`).

## Pages
- `/` — Landing
- `/book` — Generate affiliate deeplinks
- `/explore` — Live weather + TCI + urban scores
