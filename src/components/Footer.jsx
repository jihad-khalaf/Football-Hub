import { Link } from 'react-router-dom'
import { LogoMark } from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-8 text-sm text-mute sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div className="flex items-center gap-3">
          <span className="text-accent">
            <LogoMark className="h-6 w-6" />
          </span>
          <span>Football Hub · CSCI426 project</span>
        </div>
        <p className="max-w-xl md:text-right">
          Club crests belong to their clubs. Photos are from Wikimedia Commons under Creative Commons
          licences. <Link to="/about" className="text-ink underline underline-offset-4 hover:text-accent">Full credits</Link>
        </p>
      </div>
    </footer>
  )
}
