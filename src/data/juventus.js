// Everything shown on the Juventus club page (same shape as realMadrid.js).

// player and coach photos (official, from juventus.com)
import vicario from '../assets/players/juventus/vicario.webp';
import kalulu from '../assets/players/juventus/kalulu.webp';
import bremer from '../assets/players/juventus/bremer.webp';
import lucumi from '../assets/players/juventus/lucumi.webp';
import cabal from '../assets/players/juventus/cabal.webp';
import mckennie from '../assets/players/juventus/mckennie.webp';
import douglasLuiz from '../assets/players/juventus/douglas-luiz.webp';
import koopmeiners from '../assets/players/juventus/koopmeiners.webp';
import koloMuani from '../assets/players/juventus/kolo-muani.webp';
import woltemade from '../assets/players/juventus/woltemade.webp';
import boga from '../assets/players/juventus/boga.webp';
import spalletti from '../assets/players/juventus/spalletti.webp';

// legend photos
import boniperti from '../assets/legends/juventus/boniperti.jpg';
import scirea from '../assets/legends/juventus/scirea.jpg';
import platini from '../assets/legends/juventus/platini.jpg';
import baggio from '../assets/legends/juventus/baggio.jpg';
import zidane from '../assets/legends/real-madrid/zidane.jpg';
import delPiero from '../assets/legends/juventus/del-piero.jpg';
import buffon from '../assets/legends/juventus/buffon.jpg';
import nedved from '../assets/legends/juventus/nedved.jpg';

// trophy images
import serieA from '../assets/trophies/serie-a.png';
import coppaItalia from '../assets/trophies/coppa-italia.png';
import supercoppa from '../assets/trophies/supercoppa-italiana.png';
import championsLeague from '../assets/trophies/champions-league.png';
import europaLeague from '../assets/trophies/europa-league.png';
import uefaSuperCup from '../assets/trophies/uefa-super-cup.png';

// stadium photo
import juventusFans from '../assets/photos/juventus-fans.jpg';

export const juventus = {
  intro: 'Italy\'s most successful club, with more league titles than any other team in the country.',

  facts: [
    { label: 'Founded', value: '1897' },
    { label: 'League', value: 'Serie A' },
    { label: 'Stadium', value: 'Allianz Stadium' },
    { label: 'Head coach', value: 'Luciano Spalletti' },
  ],

  formation: '4-3-3',
  lineupNote: 'Reported line-up for the Serie A match away to Fiorentina, 8 November 2026.',

  // rows from the attack (top of the pitch) down to the goalkeeper
  lineup: [
    [
      { name: 'Kolo Muani', position: 'LW', photo: koloMuani },
      { name: 'Woltemade', position: 'ST', photo: woltemade },
      { name: 'Boga', position: 'RW', photo: boga },
    ],
    [
      { name: 'McKennie', position: 'CM', photo: mckennie },
      { name: 'Douglas Luiz', position: 'DM', photo: douglasLuiz },
      { name: 'Koopmeiners', position: 'CM', photo: koopmeiners },
    ],
    [
      { name: 'Cabal', position: 'LB', photo: cabal },
      { name: 'Lucumí', position: 'CB', photo: lucumi },
      { name: 'Bremer', position: 'CB', photo: bremer },
      { name: 'Kalulu', position: 'RB', photo: kalulu },
    ],
    [{ name: 'Vicario', position: 'GK', photo: vicario }],
  ],

  coach: { name: 'Luciano Spalletti', role: 'Head coach', photo: spalletti },

  trophies: [
    { name: 'Serie A', count: 36, image: serieA },
    { name: 'Coppa Italia', count: 15, image: coppaItalia },
    { name: 'Supercoppa Italiana', count: 9, image: supercoppa },
    { name: 'Champions League', count: 2, image: championsLeague },
    { name: 'UEFA Cup', count: 3, image: europaLeague },
    { name: 'UEFA Super Cup', count: 2, image: uefaSuperCup },
  ],

  stadium: {
    name: 'Allianz Stadium',
    photo: juventusFans,
    text:
      'Opened in 2011 on the site of the old Stadio delle Alpi, and the first stadium in Serie A to be owned by its club.',
    facts: [
      { label: 'Opened', value: '2011' },
      { label: 'Capacity', value: 'About 41,500' },
      { label: 'City', value: 'Turin' },
    ],
  },

  history: [
    { year: '1897', title: 'The club is founded', text: 'A group of students in Turin start the club.' },
    { year: '1923', title: 'The Agnelli era', text: 'Edoardo Agnelli becomes president, the start of a long link between the club and his family.' },
    { year: '1931', title: 'Five league titles in a row', text: 'Juventus win the league every year from 1931 to 1935.' },
    { year: '1985', title: 'The first European Cup', text: 'Juventus win the European Cup for the first time, beating Liverpool 1–0 in Brussels.' },
    { year: '1996', title: 'The second European Cup', text: 'A penalty shoot-out win against Ajax in Rome.' },
    { year: '2011', title: 'A new home, and nine in a row', text: 'The club opens its own stadium, then wins nine league titles in a row, up to 2020.' },
  ],

  legends: [
    { name: 'Giampiero Boniperti', photo: boniperti, years: '1946–1961', note: 'Scored 182 league goals and later served as club president.' },
    { name: 'Gaetano Scirea', photo: scirea, years: '1974–1988', note: 'A defender who won all three European club competitions.' },
    { name: 'Michel Platini', photo: platini, years: '1982–1987', note: 'Won the Ballon d\'Or three years in a row, 1983 to 1985.' },
    { name: 'Roberto Baggio', photo: baggio, years: '1990–1995', note: 'Won the Ballon d\'Or in 1993.' },
    { name: 'Zinedine Zidane', photo: zidane, years: '1996–2001', note: 'Won two league titles before moving to Real Madrid.' },
    { name: 'Alessandro Del Piero', photo: delPiero, years: '1993–2012', note: '705 matches and 290 goals, both club records.' },
    { name: 'Gianluigi Buffon', photo: buffon, years: '2001–2021', note: 'Ten league titles as the club\'s goalkeeper for almost two decades.' },
    { name: 'Pavel Nedvěd', photo: nedved, years: '2001–2009', note: 'Won the Ballon d\'Or in 2003 while at Juventus.' },
  ],

  rivalries: [
    { name: 'The Derby d\'Italia', against: 'Inter', text: 'The most important match between two of the biggest clubs in Italy.' },
    { name: 'The Turin derby', against: 'Torino', text: 'The city derby against Torino, the other club in Turin.' },
  ],
};
