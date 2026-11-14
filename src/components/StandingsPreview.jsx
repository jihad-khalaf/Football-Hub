import { Link } from 'react-router-dom'
import TeamCrest from './TeamCrest.jsx'
import { teams } from '../data/teams.js'
import { laLigaStandings, CHAMPIONS_LEAGUE_PLACES } from '../data/standings.js'

function formatGoalDifference(value) {
  return value > 0 ? `+${value}` : `${value}`
}

export default function StandingsPreview() {
  return (
    <section id="standings" className="flex min-w-0 flex-col gap-5">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-[44px] font-bold uppercase leading-none">La Liga standings</h2>
        <Link to="/matches" className="shrink-0 font-semibold text-gold hover:text-ink">
          Full table
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line-strong text-xs font-semibold uppercase tracking-widest text-mute">
              <th scope="col" className="w-10 py-3 font-semibold">#</th>
              <th scope="col" className="py-3 font-semibold">Club</th>
              <th scope="col" className="w-11 py-3 text-right font-semibold">P</th>
              <th scope="col" className="w-11 py-3 text-right font-semibold">W</th>
              <th scope="col" className="w-11 py-3 text-right font-semibold">D</th>
              <th scope="col" className="w-11 py-3 text-right font-semibold">L</th>
              <th scope="col" className="w-14 py-3 text-right font-semibold">GD</th>
              <th scope="col" className="w-14 py-3 text-right font-semibold">Pts</th>
            </tr>
          </thead>
          <tbody>
            {laLigaStandings.map((row, index) => {
              const position = index + 1
              const played = row.won + row.drawn + row.lost
              const points = row.won * 3 + row.drawn
              return (
                <tr key={row.team} className="border-b border-line">
                  <td className={`py-3 font-display text-xl font-semibold ${position <= CHAMPIONS_LEAGUE_PLACES ? 'text-gold' : 'text-mute'}`}>
                    {position}
                  </td>
                  <th scope="row" className="py-3 font-medium">
                    <span className="flex items-center gap-3">
                      <TeamCrest team={row.team} className="h-6 w-6" />
                      {teams[row.team].name}
                    </span>
                  </th>
                  <td className="py-3 text-right text-mute">{played}</td>
                  <td className="py-3 text-right text-mute">{row.won}</td>
                  <td className="py-3 text-right text-mute">{row.drawn}</td>
                  <td className="py-3 text-right text-mute">{row.lost}</td>
                  <td className="py-3 text-right text-mute">{formatGoalDifference(row.goalDifference)}</td>
                  <td className="py-3 text-right font-display text-[22px] font-bold">{points}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="flex items-center gap-2 text-sm text-mute">
        <span className="h-2.5 w-2.5 bg-gold" aria-hidden="true" />
        Champions League places
      </p>
    </section>
  )
}
