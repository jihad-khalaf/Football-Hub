// Everything shown on the FC Barcelona club page (same shape as realMadrid.js).

// player and coach photos (official, from fcbarcelona.com)
import joanGarcia from '../assets/players/barcelona/joan-garcia.webp';
import cancelo from '../assets/players/barcelona/cancelo.webp';
import cubarsi from '../assets/players/barcelona/cubarsi.webp';
import farinas from '../assets/players/barcelona/farinas.webp';
import gerardMartin from '../assets/players/barcelona/gerard-martin.webp';
import deJong from '../assets/players/barcelona/de-jong.webp';
import pedri from '../assets/players/barcelona/pedri.webp';
import yamal from '../assets/players/barcelona/yamal.webp';
import fermin from '../assets/players/barcelona/fermin.webp';
import gordon from '../assets/players/barcelona/gordon.webp';
import raphinha from '../assets/players/barcelona/raphinha.webp';
import flick from '../assets/players/barcelona/flick.webp';

// legend photos
import kubala from '../assets/legends/barcelona/kubala.jpg';
import cruyff from '../assets/legends/barcelona/cruyff.jpg';
import koeman from '../assets/legends/barcelona/koeman.jpg';
import ronaldinho from '../assets/legends/barcelona/ronaldinho.jpg';
import xavi from '../assets/legends/barcelona/xavi.jpg';
import puyol from '../assets/legends/barcelona/puyol.jpg';
import iniesta from '../assets/legends/barcelona/iniesta.jpg';
import messi from '../assets/legends/barcelona/messi.jpg';

// trophy images (the same competitions as Real Madrid, so the same files)
import laLiga from '../assets/trophies/la-liga.png';
import championsLeague from '../assets/trophies/champions-league.png';
import copaDelRey from '../assets/trophies/copa-del-rey.png';
import supercopa from '../assets/trophies/supercopa.png';
import uefaSuperCup from '../assets/trophies/uefa-super-cup.png';
import clubWorldCup from '../assets/trophies/club-world-cup.png';

// stadium photo
import campNouStand from '../assets/photos/camp-nou-stand.jpg';

export const barcelona = {
  intro:
    'Owned by its members, never relegated from La Liga, and home to La Masia, one of the best-known academies in the world.',

  facts: [
    { label: 'Founded', value: '1899' },
    { label: 'League', value: 'La Liga' },
    { label: 'Stadium', value: 'Spotify Camp Nou' },
    { label: 'Head coach', value: 'Hansi Flick' },
  ],

  formation: '4-2-3-1',
  lineupNote: 'Likely line-up for the La Liga match away to Atlético Madrid, 8 November 2026.',

  // rows from the attack (top of the pitch) down to the goalkeeper
  lineup: [
    [{ name: 'Raphinha', position: 'ST', photo: raphinha }],
    [
      { name: 'Gordon', position: 'LW', photo: gordon },
      { name: 'Fermín', position: 'AM', photo: fermin },
      { name: 'Yamal', position: 'RW', photo: yamal },
    ],
    [
      { name: 'Pedri', position: 'CM', photo: pedri },
      { name: 'De Jong', position: 'CM', photo: deJong },
    ],
    [
      { name: 'Gerard Martín', position: 'LB', photo: gerardMartin },
      { name: 'Cubarsí', position: 'CB', photo: cubarsi },
      { name: 'Fariñas', position: 'CB', photo: farinas },
      { name: 'Cancelo', position: 'RB', photo: cancelo },
    ],
    [{ name: 'Joan García', position: 'GK', photo: joanGarcia }],
  ],

  // fit: 'cover' because this coach photo is wide, not a cut-out
  coach: { name: 'Hansi Flick', role: 'Head coach', photo: flick, fit: 'cover' },

  trophies: [
    { name: 'La Liga', count: 29, image: laLiga },
    { name: 'Champions League', count: 5, image: championsLeague },
    { name: 'Copa del Rey', count: 32, image: copaDelRey },
    { name: 'Supercopa de España', count: 16, image: supercopa },
    { name: 'UEFA Super Cup', count: 5, image: uefaSuperCup },
    { name: 'Club World Cup', count: 3, image: clubWorldCup },
  ],

  stadium: {
    name: 'Spotify Camp Nou',
    photo: campNouStand,
    text:
      'The largest stadium in Europe and the club\'s home since 1957. A major rebuild is raising the capacity to around 105,000.',
    facts: [
      { label: 'Opened', value: '1957' },
      { label: 'Capacity', value: 'About 105,000' },
      { label: 'City', value: 'Barcelona' },
    ],
  },

  history: [
    { year: '1899', title: 'The club is founded', text: 'Joan Gamper and a group of footballers found FC Barcelona on 29 November.' },
    { year: '1957', title: 'Camp Nou opens', text: 'The club moves into its new stadium, built to hold far more fans than the old ground.' },
    { year: '1992', title: 'The first European Cup', text: 'Ronald Koeman scores in extra time at Wembley to beat Sampdoria 1–0.' },
    { year: '2009', title: 'Six trophies in one year', text: 'Pep Guardiola\'s team wins all six competitions it enters in a single calendar year.' },
    { year: '2015', title: 'Another treble', text: 'League, cup and Champions League under coach Luis Enrique.' },
    { year: '2021', title: 'Messi leaves', text: 'After 17 years, the club\'s all-time top scorer leaves in August.' },
  ],

  legends: [
    { name: 'László Kubala', photo: kubala, years: '1951–1961', note: 'Won four league titles in the 1950s.' },
    { name: 'Johan Cruyff', photo: cruyff, years: '1973–1978', note: 'A league winner as a player, then he built the Dream Team as coach.' },
    { name: 'Ronald Koeman', photo: koeman, years: '1989–1995', note: 'His free kick won the 1992 European Cup final.' },
    { name: 'Ronaldinho', photo: ronaldinho, years: '2003–2008', note: 'Ballon d\'Or in 2005 and the 2006 Champions League.' },
    { name: 'Xavi', photo: xavi, years: '1998–2015', note: '767 matches and 25 trophies for the club.' },
    { name: 'Carles Puyol', photo: puyol, years: '1999–2014', note: 'Captain of the team that won six trophies in 2009.' },
    { name: 'Andrés Iniesta', photo: iniesta, years: '2002–2018', note: 'Nine league titles and four Champions League wins.' },
    { name: 'Lionel Messi', photo: messi, years: '2004–2021', note: 'The all-time top scorer, with 672 goals.' },
  ],

  rivalries: [
    { name: 'El Clásico', against: 'Real Madrid', text: 'The biggest match in Spanish football, between the two most successful clubs in the country.' },
    { name: 'The Barcelona derby', against: 'Espanyol', text: 'The city derby against Espanyol, the other big club in Barcelona.' },
  ],
};
