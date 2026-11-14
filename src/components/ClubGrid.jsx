import { Link } from 'react-router-dom'
import TeamCrest from './TeamCrest.jsx'
import { clubs } from '../data/clubs.js'

function ClubTile({ club }) {
  return (
    <Link to={`/clubs/${club.id}`} className="group relative flex h-[380px] flex-col justify-end overflow-hidden lg:h-[440px]">
      <img
        src={club.photo}
        alt={club.photoAlt}
        loading="lazy"
        style={{ objectPosition: club.photoPosition }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-linear-to-t from-night/95 via-night/35 to-night/10" aria-hidden="true" />
      <span className="relative flex items-end justify-between gap-4 border-b-[5px] p-6" style={{ borderColor: club.color }}>
        <span className="flex flex-col gap-1.5">
          <span className="font-display text-[40px] font-bold uppercase leading-none text-white">{club.name}</span>
          <span className="text-sm text-[#D5D7DA]">
            {club.city} · Founded {club.founded}
          </span>
        </span>
        <TeamCrest team={club.id} onPhoto className="h-14 w-14" />
      </span>
    </Link>
  )
}

export default function ClubGrid() {
  return (
    <section id="clubs" className="mx-auto flex max-w-[1280px] flex-col gap-8 px-5 pt-20 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-12">
        <h2 className="font-display text-5xl font-bold uppercase leading-[0.95] sm:text-[64px]">Inside the clubs</h2>
        <p className="max-w-[420px] leading-normal text-mute">
          Starting eleven and coach, history, honours, legends, stadium and rivalries. One full
          section per club.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {clubs.map((club) => (
          <ClubTile key={club.id} club={club} />
        ))}
      </div>
    </section>
  )
}
