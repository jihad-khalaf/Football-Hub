// Everything shown on the Real Madrid club page.
// The other clubs will each get a file with the same shape.

// player and coach photos
import courtois from '../assets/players/real-madrid/courtois.jpg';
import valverde from '../assets/players/real-madrid/valverde.jpg';
import huijsen from '../assets/players/real-madrid/huijsen.jpg';
import konate from '../assets/players/real-madrid/konate.jpg';
import cucurella from '../assets/players/real-madrid/cucurella.jpg';
import tchouameni from '../assets/players/real-madrid/tchouameni.jpg';
import bernardoSilva from '../assets/players/real-madrid/bernardo-silva.jpg';
import bellingham from '../assets/players/real-madrid/bellingham.jpg';
import diomande from '../assets/players/real-madrid/diomande.jpg';
import guler from '../assets/players/real-madrid/guler.jpg';
import mbappe from '../assets/players/real-madrid/mbappe.jpg';
import mourinho from '../assets/players/real-madrid/mourinho.jpg';

// trophy images (transparent background)
import laLiga from '../assets/trophies/la-liga.png';
import championsLeague from '../assets/trophies/champions-league.png';
import copaDelRey from '../assets/trophies/copa-del-rey.png';
import supercopa from '../assets/trophies/supercopa.png';
import uefaSuperCup from '../assets/trophies/uefa-super-cup.png';
import clubWorldCup from '../assets/trophies/club-world-cup.png';

// stadium photo
import bernabeuWide from '../assets/photos/bernabeu-wide.jpg';

export const realMadrid = {
  intro:
    'The most successful club in European Cup history, and the only one to win the trophy five times in a row.',

  // short facts shown under the club name
  facts: [
    { label: 'Founded', value: '1902' },
    { label: 'League', value: 'La Liga' },
    { label: 'Stadium', value: 'Santiago Bernabéu' },
    { label: 'Head coach', value: 'José Mourinho' },
  ],

  formation: '4-3-3',
  lineupNote: 'Line-up from the La Liga match away to Valencia, 7 November 2026.',

  // The starting eleven as ROWS, from the attack (top of the pitch) down to
  // the goalkeeper. Each row is drawn left to right.
  lineup: [
    [
      { name: 'Diomandé', position: 'LW', photo: diomande },
      { name: 'Mbappé', position: 'ST', photo: mbappe },
      { name: 'Güler', position: 'RW', photo: guler },
    ],
    [
      { name: 'Bellingham', position: 'CM', photo: bellingham },
      { name: 'Tchouaméni', position: 'DM', photo: tchouameni },
      { name: 'Bernardo Silva', position: 'CM', photo: bernardoSilva },
    ],
    [
      { name: 'Cucurella', position: 'LB', photo: cucurella },
      { name: 'Huijsen', position: 'CB', photo: huijsen },
      { name: 'Konaté', position: 'CB', photo: konate },
      { name: 'Valverde', position: 'RB', photo: valverde },
    ],
    [{ name: 'Courtois', position: 'GK', photo: courtois }],
  ],

  coach: { name: 'José Mourinho', role: 'Head coach', photo: mourinho },

  trophies: [
    { name: 'La Liga', count: 36, image: laLiga },
    { name: 'Champions League', count: 15, image: championsLeague },
    { name: 'Copa del Rey', count: 20, image: copaDelRey },
    { name: 'Supercopa de España', count: 13, image: supercopa },
    { name: 'UEFA Super Cup', count: 6, image: uefaSuperCup },
    { name: 'Club World Cup', count: 5, image: clubWorldCup },
  ],

  stadium: {
    name: 'Santiago Bernabéu',
    photo: bernabeuWide,
    text:
      'Home since 1947 and named after the president who built it. A rebuild finished in 2024 added a retractable roof and a pitch that slides away underground, so the stadium can host other events.',
    facts: [
      { label: 'Opened', value: '1947' },
      { label: 'Capacity', value: 'About 80,000' },
      { label: 'City', value: 'Madrid' },
    ],
  },

  history: [
    { year: '1902', title: 'The club is founded', text: 'Madrid Football Club is officially founded on 6 March.' },
    { year: '1920', title: 'It becomes "Real"', text: 'King Alfonso XIII gives the club the title Real, meaning royal, and a crown is added to the crest.' },
    { year: '1947', title: 'A new home', text: 'The new stadium opens in Chamartín. In 1955 it is renamed after club president Santiago Bernabéu.' },
    { year: '1956', title: 'Five in a row', text: 'Real Madrid win the first European Cup, then the next four as well, up to 1960.' },
    { year: '2000', title: 'Club of the century', text: 'FIFA names Real Madrid the best club of the 20th century.' },
    { year: '2018', title: 'Three in a row', text: 'A third Champions League title in a row under coach Zinedine Zidane.' },
    { year: '2024', title: 'Number fifteen', text: 'A 15th European Cup, won against Borussia Dortmund at Wembley.' },
  ],

  legends: [
    { name: 'Alfredo Di Stéfano', years: '1953–1964', note: 'Scored in five European Cup finals in a row.' },
    { name: 'Ferenc Puskás', years: '1958–1966', note: 'Four goals in the 1960 European Cup final.' },
    { name: 'Paco Gento', years: '1953–1971', note: 'The first player to win six European Cups.' },
    { name: 'Raúl', years: '1994–2010', note: 'Captain and scorer of 323 goals for the club.' },
    { name: 'Zinedine Zidane', years: '2001–2006', note: 'The volley that won the 2002 Champions League final.' },
    { name: 'Iker Casillas', years: '1999–2015', note: '725 matches in goal for his boyhood club.' },
    { name: 'Cristiano Ronaldo', years: '2009–2018', note: 'The record scorer, with 450 goals.' },
    { name: 'Sergio Ramos', years: '2005–2021', note: 'The 93rd-minute header in the 2014 final.' },
  ],

  rivalries: [
    { name: 'El Clásico', against: 'FC Barcelona', text: 'The biggest match in Spanish football, between the two most successful clubs in the country.' },
    { name: 'The Madrid derby', against: 'Atlético Madrid', text: 'The city rivalry, played in two Champions League finals, in 2014 and 2016. Real Madrid won both.' },
  ],
};
