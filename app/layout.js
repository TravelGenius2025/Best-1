export const metadata = {
  title: 'TravelGenius — Comfort-first travel',
  description: 'Live comfort scoring + affiliate deeplinks for flights, stays, trains, cars & experiences.'
}
import './globals.css'
import Image from 'next/image'

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="brand">
            <Image src="/logo.svg" width={36} height={36} alt="TravelGenius" />
            <div>
              <div className="name">TravelGenius</div>
              <div className="tag">Plan by feel — not just price</div>
            </div>
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/book">Book</a>
            <a href="/explore">Explore</a>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">© {new Date().getFullYear()} TravelGenius</footer>
      </body>
    </html>
  )
}
