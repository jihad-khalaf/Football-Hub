import { Link } from 'react-router-dom'

// Temporary page for routes that are not built yet.
export default function ComingSoon() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1280px] flex-col items-start justify-center gap-5 px-5 pt-28 sm:px-8 lg:px-12">
      <h1 className="font-display text-6xl font-bold uppercase leading-none">This page is next</h1>
      <p className="max-w-md text-mute">We are building the site one page at a time. The Home page is ready to look at.</p>
      <Link to="/" className="inline-flex h-[52px] items-center bg-gold px-7 text-[15px] font-semibold text-pitch hover:bg-ink">
        Back to Home
      </Link>
    </section>
  )
}
