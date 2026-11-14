import { Link } from 'react-router-dom'
import TeamCrest from './TeamCrest.jsx'
import { teams } from '../data/teams.js'
import { todaysScores } from '../data/matches.js'

function TeamLine({ team, goals }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="flex min-w-0 items-center gap-3">
        <TeamCrest team={team} className="h-6 w-6" />
        <span className="truncate font-medium">{teams[team].name}</span>
      </span>
      <span className="font-display text-2xl font-bold">{goals}</span>
    </div>
  )
}

// Today's matches in one row under the hero.
export default function ScoreStrip() {
  return (
    <section aria-label="Today's scores" className="border-y border-line">
      <ul className="mx-auto grid max-w-[1280px] sm:grid-cols-2 lg:grid-cols-4">
        {todaysScores.map((match) => (
          <li key={match.id} className="border-b border-line last:border-b-0 sm:border-r lg:border-b-0 lg:last:border-r-0">
            <Link to="/matches" className="flex flex-col gap-2.5 px-5 py-5 transition-colors hover:bg-panel sm:px-7">
              <span className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest ${match.status === 'live' ? 'text-accent' : 'text-mute'}`}>
                {match.status === 'live' && <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />}
                {match.label}
              </span>
              <TeamLine team={match.home} goals={match.homeGoals} />
              <TeamLine team={match.away} goals={match.awayGoals} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
