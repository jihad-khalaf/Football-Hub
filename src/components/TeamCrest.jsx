import { teams } from '../data/teams.js'

// A club crest at a fixed box size, so crests of different shapes line up.
// `onPhoto` means the crest sits on a dark photo, so a white crest must stay white.
export default function TeamCrest({ team, className = 'h-7 w-7', onPhoto = false }) {
  const { name, logo, whiteCrest } = teams[team]
  const adaptive = whiteCrest && !onPhoto ? 'crest-adaptive' : ''
  return <img src={logo} alt={`${name} crest`} loading="lazy" className={`shrink-0 object-contain ${adaptive} ${className}`} />
}
