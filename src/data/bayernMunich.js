// Everything shown on the Bayern Munich club page (same shape as realMadrid.js).

// player and coach photos (official, from bundesliga.com)
import neuer from '../assets/players/bayern-munich/neuer.webp';
import stanisic from '../assets/players/bayern-munich/stanisic.webp';
import tah from '../assets/players/bayern-munich/tah.webp';
import upamecano from '../assets/players/bayern-munich/upamecano.webp';
import laimer from '../assets/players/bayern-munich/laimer.webp';
import pavlovic from '../assets/players/bayern-munich/pavlovic.webp';
import kimmich from '../assets/players/bayern-munich/kimmich.webp';
import brown from '../assets/players/bayern-munich/brown.webp';
import karl from '../assets/players/bayern-munich/karl.webp';
import olise from '../assets/players/bayern-munich/olise.webp';
import kane from '../assets/players/bayern-munich/kane.webp';
import kompany from '../assets/legends/bayern-munich/kompany.jpg';

// legend photos
import beckenbauer from '../assets/legends/bayern-munich/beckenbauer.jpg';
import gerdMuller from '../assets/legends/bayern-munich/gerd-muller.jpg';
import maier from '../assets/legends/bayern-munich/maier.jpg';
import rummenigge from '../assets/legends/bayern-munich/rummenigge.jpg';
import matthaus from '../assets/legends/bayern-munich/matthaus.jpg';
import kahn from '../assets/legends/bayern-munich/kahn.jpg';
import lahm from '../assets/legends/bayern-munich/lahm.jpg';
import thomasMuller from '../assets/legends/bayern-munich/thomas-muller.jpg';

// trophy images
import bundesliga from '../assets/trophies/bundesliga.png';
import championsLeague from '../assets/trophies/champions-league.png';
import dfbPokal from '../assets/trophies/dfb-pokal.png';
import uefaSuperCup from '../assets/trophies/uefa-super-cup.png';
import clubWorldCup from '../assets/trophies/club-world-cup.png';
import intercontinentalCup from '../assets/trophies/intercontinental-cup.png';

// stadium photo
import allianzArenaRed from '../assets/photos/allianz-arena-red.jpg';

export const bayernMunich = {
  intro: 'Germany\'s most successful club by a wide margin, with a record number of league titles and six European Cups.',

  facts: [
    { label: 'Founded', value: '1900' },
    { label: 'League', value: 'Bundesliga' },
    { label: 'Stadium', value: 'Allianz Arena' },
    { label: 'Head coach', value: 'Vincent Kompany' },
  ],

  formation: '4-2-3-1',
  lineupNote: 'Last starting eleven in the Bundesliga, from the league\'s own season stats.',

  // rows from the attack (top of the pitch) down to the goalkeeper
  lineup: [
    [{ name: 'Kane', position: 'ST', photo: kane }],
    [
      { name: 'Brown', position: 'LW', photo: brown },
      { name: 'Karl', position: 'AM', photo: karl },
      { name: 'Olise', position: 'RW', photo: olise },
    ],
    [
      { name: 'Pavlović', position: 'CM', photo: pavlovic },
      { name: 'Kimmich', position: 'CM', photo: kimmich },
    ],
    [
      { name: 'Stanišić', position: 'LB', photo: stanisic },
      { name: 'Tah', position: 'CB', photo: tah },
      { name: 'Upamecano', position: 'CB', photo: upamecano },
      { name: 'Laimer', position: 'RB', photo: laimer },
    ],
    [{ name: 'Neuer', position: 'GK', photo: neuer }],
  ],

  // fit: 'cover' because this coach photo is not a cut-out
  coach: { name: 'Vincent Kompany', role: 'Head coach', photo: kompany, fit: 'cover' },

  trophies: [
    // 35 German championships, counting the one won in 1932 before the Bundesliga existed
    { name: 'German league titles', count: 35, image: bundesliga },
    { name: 'Champions League', count: 6, image: championsLeague },
    { name: 'DFB-Pokal', count: 21, image: dfbPokal },
    { name: 'UEFA Super Cup', count: 2, image: uefaSuperCup },
    { name: 'Club World Cup', count: 2, image: clubWorldCup },
    { name: 'Intercontinental Cup', count: 2, image: intercontinentalCup },
  ],

  stadium: {
    name: 'Allianz Arena',
    photo: allianzArenaRed,
    text:
      'Opened in 2005 and known for the outer shell of panels that glows red when Bayern play at home.',
    facts: [
      { label: 'Opened', value: '2005' },
      { label: 'Capacity', value: 'About 75,000' },
      { label: 'City', value: 'Munich' },
    ],
  },

  history: [
    { year: '1900', title: 'The club is founded', text: 'A group of footballers found the club in Munich on 27 February.' },
    { year: '1932', title: 'The first German championship', text: 'Bayern win their first national title, before the Bundesliga existed.' },
    { year: '1974', title: 'Three European Cups in a row', text: 'The team of Beckenbauer, Müller and Maier wins the European Cup in 1974, 1975 and 1976.' },
    { year: '2001', title: 'Champions of Europe again', text: 'A penalty shoot-out win against Valencia in Milan, with Oliver Kahn saving three penalties.' },
    { year: '2005', title: 'The Allianz Arena opens', text: 'Bayern move into a new stadium built for the 2006 World Cup.' },
    { year: '2013', title: 'The first treble', text: 'League, cup and Champions League in one season under coach Jupp Heynckes.' },
    { year: '2020', title: 'A second treble', text: 'Another treble, this time under coach Hansi Flick.' },
  ],

  legends: [
    { name: 'Franz Beckenbauer', photo: beckenbauer, years: '1964–1977', note: 'Captain of the team that won three European Cups in a row.' },
    { name: 'Gerd Müller', photo: gerdMuller, years: '1964–1979', note: '365 Bundesliga goals in 427 matches.' },
    { name: 'Sepp Maier', photo: maier, years: '1962–1979', note: 'Played 442 Bundesliga matches in a row.' },
    { name: 'Karl-Heinz Rummenigge', photo: rummenigge, years: '1974–1984', note: 'Named European Footballer of the Year in 1980 and 1981.' },
    { name: 'Lothar Matthäus', photo: matthaus, years: '1984–2000', note: 'A World Cup-winning captain who played for the club in two spells.' },
    { name: 'Oliver Kahn', photo: kahn, years: '1994–2008', note: 'Saved three penalties in the 2001 Champions League final shoot-out.' },
    { name: 'Philipp Lahm', photo: lahm, years: '2002–2017', note: 'Captain of the team that won the treble in 2013.' },
    { name: 'Thomas Müller', photo: thomasMuller, years: '2000–2025', note: 'Spent 25 years at the club and won the Champions League twice.' },
  ],

  rivalries: [
    { name: 'Der Klassiker', against: 'Borussia Dortmund', text: 'The biggest match in German football, between the two biggest clubs in the country.' },
    { name: 'The Munich derby', against: '1860 Munich', text: 'The city derby, played much less often now that 1860 are in the lower leagues.' },
  ],
};
