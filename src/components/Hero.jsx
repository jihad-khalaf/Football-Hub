import { Link } from 'react-router-dom'
import TeamCrest from './TeamCrest.jsx'
import { teams } from '../data/teams.js'
import { featuredMatch } from '../data/matches.js'
import heroPhoto from '../assets/photos/bernabeu-wide.jpg'

function MatchFact({ label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-fog">{label}</dt>
      <dd className="text-lg font-semibold sm:text-xl">{value}</dd>
    </div>
  )
}

// The hero sits on a photo, so it uses the fixed night/chalk colours and
// looks the same in dark and light mode.
export default function Hero() {
  const home = teams[featuredMatch.home]
  const away = teams[featuredMatch.away]

  return (
    <section className="relative flex min-h-[640px] flex-col justify-end overflow-hidden bg-night text-chalk lg:min-h-[760px]">
      <img
        src={heroPhoto}
        alt="Inside the Santiago Bernabéu stadium"
        className="absolute inset-0 h-full w-full object-cover object-[center_60%]"
      />
      {/* Darken the photo so the text stays readable. */}
      <div className="absolute inset-0 bg-night/65" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-linear-to-t from-night to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-7 px-5 pb-12 pt-32 sm:px-8 lg:px-12 lg:pb-14">
        <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em]">
          <span className="h-[3px] w-9 bg-gold" aria-hidden="true" />
          {featuredMatch.competition} · {featuredMatch.round}
        </p>

        <div className="flex items-center gap-4">
          <TeamCrest team={featuredMatch.home} onPhoto className="h-16 w-16 sm:h-20 sm:w-20" />
          <span className="font-display text-2xl font-semibold uppercase text-fog">vs</span>
          <TeamCrest team={featuredMatch.away} onPhoto className="h-16 w-16 sm:h-20 sm:w-20" />
        </div>

        <h1 className="font-display text-[clamp(3.5rem,10.5vw,8.5rem)] font-bold uppercase leading-[0.88]">
          {home.name}
          <br />
          <span className="text-gold">vs</span> {away.name}
        </h1>

        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <dl className="flex flex-wrap gap-x-11 gap-y-4">
            <MatchFact label="Date" value={featuredMatch.date} />
            <MatchFact label="Kick-off" value={featuredMatch.kickoff} />
            <MatchFact label="Stadium" value={featuredMatch.stadium} />
          </dl>
          <div className="flex flex-wrap gap-3">
            <Link to="/matches" className="inline-flex h-[52px] items-center bg-gold px-7 text-[15px] font-semibold text-night transition-colors hover:bg-chalk">
              Match preview
            </Link>
            <Link to="/clubs/real-madrid" className="inline-flex h-[52px] items-center border border-chalk px-7 text-[15px] font-semibold transition-colors hover:border-gold hover:text-gold">
              Head to head
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
