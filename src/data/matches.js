// Sample match data. Team ids match the keys in teams.js.

export const featuredMatch = {
  competition: 'La Liga',
  round: 'Round 13',
  home: 'real-madrid',
  away: 'barcelona',
  date: 'Sunday 15 November',
  kickoff: '21:00',
  stadium: 'Santiago Bernabéu',
}

export const todaysScores = [
  { id: 1, status: 'live', label: "Live 63'", home: 'athletic-club', away: 'getafe', homeGoals: 1, awayGoals: 0 },
  { id: 2, status: 'finished', label: 'Full time', home: 'bayern-munich', away: 'rb-leipzig', homeGoals: 3, awayGoals: 1 },
  { id: 3, status: 'finished', label: 'Full time', home: 'villarreal', away: 'real-betis', homeGoals: 2, awayGoals: 0 },
  { id: 4, status: 'finished', label: 'Full time', home: 'real-sociedad', away: 'sevilla', homeGoals: 1, awayGoals: 1 },
]

// Short preview text for the featured match (shown on the Matches page)
export const matchPreview =
  'The first Clásico of the season. Barcelona lead the table by one point, so a home win would take Real Madrid back to the top. ' +
  'Madrid have won four of their last five league games at the Bernabéu; Barcelona have scored in every away match this season.'

// The last five meetings between the two featured clubs (sample data)
export const headToHead = [
  { id: 1, date: '11 May 2026', home: 'barcelona', away: 'real-madrid', homeGoals: 4, awayGoals: 3 },
  { id: 2, date: '26 Apr 2026', home: 'real-madrid', away: 'barcelona', homeGoals: 2, awayGoals: 1 },
  { id: 3, date: '12 Jan 2026', home: 'real-madrid', away: 'barcelona', homeGoals: 2, awayGoals: 5 },
  { id: 4, date: '26 Oct 2025', home: 'real-madrid', away: 'barcelona', homeGoals: 2, awayGoals: 1 },
  { id: 5, date: '11 May 2025', home: 'barcelona', away: 'real-madrid', homeGoals: 4, awayGoals: 3 },
]

// Finished matches, newest first (sample data)
export const results = [
  { id: 1, date: 'Sat 14 Nov', competition: 'Bundesliga', home: 'bayern-munich', away: 'rb-leipzig', homeGoals: 3, awayGoals: 1 },
  { id: 2, date: 'Sat 14 Nov', competition: 'La Liga', home: 'villarreal', away: 'real-betis', homeGoals: 2, awayGoals: 0 },
  { id: 3, date: 'Sat 14 Nov', competition: 'La Liga', home: 'real-sociedad', away: 'sevilla', homeGoals: 1, awayGoals: 1 },
  { id: 4, date: 'Sun 8 Nov', competition: 'La Liga', home: 'barcelona', away: 'athletic-club', homeGoals: 3, awayGoals: 0 },
  { id: 5, date: 'Sun 8 Nov', competition: 'La Liga', home: 'atletico-madrid', away: 'real-madrid', homeGoals: 1, awayGoals: 2 },
  { id: 6, date: 'Wed 4 Nov', competition: 'Champions League', home: 'juventus', away: 'bayern-munich', homeGoals: 1, awayGoals: 1 },
  { id: 7, date: 'Tue 3 Nov', competition: 'Champions League', home: 'real-madrid', away: 'rb-leipzig', homeGoals: 3, awayGoals: 0 },
  { id: 8, date: 'Sat 31 Oct', competition: 'La Liga', home: 'getafe', away: 'barcelona', homeGoals: 0, awayGoals: 2 },
]

// Matches still to be played, soonest first (sample data)
export const fixtures = [
  { id: 1, date: 'Sun 15 Nov', kickoff: '21:00', competition: 'La Liga', home: 'real-madrid', away: 'barcelona' },
  { id: 2, date: 'Sun 15 Nov', kickoff: '16:15', competition: 'La Liga', home: 'sevilla', away: 'atletico-madrid' },
  { id: 3, date: 'Sat 21 Nov', kickoff: '18:30', competition: 'Bundesliga', home: 'rb-leipzig', away: 'bayern-munich' },
  { id: 4, date: 'Sat 21 Nov', kickoff: '14:00', competition: 'La Liga', home: 'real-betis', away: 'real-sociedad' },
  { id: 5, date: 'Tue 24 Nov', kickoff: '21:00', competition: 'Champions League', home: 'barcelona', away: 'juventus' },
  { id: 6, date: 'Wed 25 Nov', kickoff: '21:00', competition: 'Champions League', home: 'bayern-munich', away: 'real-madrid' },
  { id: 7, date: 'Sun 29 Nov', kickoff: '21:00', competition: 'La Liga', home: 'athletic-club', away: 'real-madrid' },
]
