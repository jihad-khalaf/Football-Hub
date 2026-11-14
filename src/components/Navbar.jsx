import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/matches', label: 'Matches' },
  { to: '/players', label: 'Players' },
  { to: '/news', label: 'News' },
  { to: '/clubs', label: 'Clubs' },
  { to: '/features', label: 'Features' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

// Pages that start with a full-width photo. On these the navbar sits on the
// photo, so it keeps light text in both dark and light mode.
function startsWithPhoto(pathname) {
  return pathname === '/' || pathname.startsWith('/clubs/')
}

function linkClass(isActive, onPhoto) {
  const base = 'py-3 text-[15px] font-medium transition-colors'
  if (onPhoto) return `${base} hover:text-gold ${isActive ? 'text-gold' : 'text-chalk'}`
  return `${base} hover:text-accent ${isActive ? 'text-accent' : 'text-ink'}`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onPhoto = startsWithPhoto(pathname)

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Logo onPhoto={onPhoto} />

        <div className={`flex items-center gap-3 lg:gap-8 ${onPhoto ? 'text-chalk' : 'text-ink'}`}>
          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ isActive }) => linkClass(isActive, onPhoto)}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-y border-line bg-pitch px-5 py-3 sm:px-8 lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => `block ${linkClass(isActive, false)}`}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
