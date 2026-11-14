import { Link } from 'react-router-dom'

// The centre-circle mark on its own. Colour follows the surrounding text colour.
export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="21" stroke="currentColor" strokeWidth="5" />
      <path d="M32 3v58" stroke="currentColor" strokeWidth="5" />
      <circle cx="32" cy="32" r="6" fill="currentColor" />
    </svg>
  )
}

// Full logo: mark plus wordmark, linking back to the Home page.
// `onPhoto` keeps the light-on-dark colours when the logo sits on a hero photo.
export default function Logo({ onPhoto = false }) {
  const accent = onPhoto ? 'text-gold' : 'text-accent'
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Football Hub, home">
      <span className={accent}>
        <LogoMark />
      </span>
      <span className={`font-display text-[26px] font-bold uppercase leading-none tracking-[0.04em] ${onPhoto ? 'text-chalk' : 'text-ink'}`}>
        Football <span className={accent}>Hub</span>
      </span>
    </Link>
  )
}
