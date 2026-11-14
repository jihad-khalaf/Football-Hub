import { teams } from '../data/teams.js'

// A club crest at a fixed box size, so crests of different shapes line up.
export default function TeamCrest({ team, className = 'h-7 w-7' }) {
  const { name, logo } = teams[team]
  return <img src={logo} alt={`${name} crest`} loading="lazy" className={`shrink-0 object-contain ${className}`} />
}
