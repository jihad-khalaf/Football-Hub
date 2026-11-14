// Player stats for this season. SAMPLE numbers made for this project.
// club = the club id from clubs.js, so we can show the crest and filter by club.
import mbappe from '../assets/players/real-madrid/mbappe.webp';
import bellingham from '../assets/players/real-madrid/bellingham.webp';
import guler from '../assets/players/real-madrid/guler.webp';
import valverde from '../assets/players/real-madrid/valverde.webp';
import yamal from '../assets/players/barcelona/yamal.webp';
import raphinha from '../assets/players/barcelona/raphinha.webp';
import pedri from '../assets/players/barcelona/pedri.webp';
import fermin from '../assets/players/barcelona/fermin.webp';
import gordon from '../assets/players/barcelona/gordon.webp';
import kane from '../assets/players/bayern-munich/kane.webp';
import olise from '../assets/players/bayern-munich/olise.webp';
import karl from '../assets/players/bayern-munich/karl.webp';
import kimmich from '../assets/players/bayern-munich/kimmich.webp';
import koloMuani from '../assets/players/juventus/kolo-muani.webp';
import koopmeiners from '../assets/players/juventus/koopmeiners.webp';
import woltemade from '../assets/players/juventus/woltemade.webp';
import mckennie from '../assets/players/juventus/mckennie.webp';
import boga from '../assets/players/juventus/boga.webp';

export const players = [
  { id: 1, name: 'Kylian Mbappé', club: 'real-madrid', position: 'Forward', photo: mbappe, apps: 16, goals: 17, assists: 4 },
  { id: 2, name: 'Jude Bellingham', club: 'real-madrid', position: 'Midfielder', photo: bellingham, apps: 15, goals: 6, assists: 5 },
  { id: 3, name: 'Arda Güler', club: 'real-madrid', position: 'Midfielder', photo: guler, apps: 16, goals: 5, assists: 8 },
  { id: 4, name: 'Federico Valverde', club: 'real-madrid', position: 'Midfielder', photo: valverde, apps: 16, goals: 3, assists: 4 },
  { id: 5, name: 'Lamine Yamal', club: 'barcelona', position: 'Forward', photo: yamal, apps: 15, goals: 9, assists: 10 },
  { id: 6, name: 'Raphinha', club: 'barcelona', position: 'Forward', photo: raphinha, apps: 14, goals: 11, assists: 5 },
  { id: 7, name: 'Pedri', club: 'barcelona', position: 'Midfielder', photo: pedri, apps: 15, goals: 3, assists: 7 },
  { id: 8, name: 'Fermín López', club: 'barcelona', position: 'Midfielder', photo: fermin, apps: 13, goals: 6, assists: 3 },
  { id: 9, name: 'Anthony Gordon', club: 'barcelona', position: 'Forward', photo: gordon, apps: 12, goals: 5, assists: 2 },
  { id: 10, name: 'Harry Kane', club: 'bayern-munich', position: 'Forward', photo: kane, apps: 15, goals: 21, assists: 3 },
  { id: 11, name: 'Michael Olise', club: 'bayern-munich', position: 'Forward', photo: olise, apps: 15, goals: 8, assists: 11 },
  { id: 12, name: 'Lennart Karl', club: 'bayern-munich', position: 'Midfielder', photo: karl, apps: 13, goals: 5, assists: 3 },
  { id: 13, name: 'Joshua Kimmich', club: 'bayern-munich', position: 'Midfielder', photo: kimmich, apps: 15, goals: 1, assists: 6 },
  { id: 14, name: 'Randal Kolo Muani', club: 'juventus', position: 'Forward', photo: koloMuani, apps: 14, goals: 7, assists: 2 },
  { id: 15, name: 'Teun Koopmeiners', club: 'juventus', position: 'Midfielder', photo: koopmeiners, apps: 14, goals: 4, assists: 3 },
  { id: 16, name: 'Nick Woltemade', club: 'juventus', position: 'Forward', photo: woltemade, apps: 13, goals: 6, assists: 1 },
  { id: 17, name: 'Weston McKennie', club: 'juventus', position: 'Midfielder', photo: mckennie, apps: 14, goals: 2, assists: 4 },
  { id: 18, name: 'Jérémie Boga', club: 'juventus', position: 'Forward', photo: boga, apps: 12, goals: 3, assists: 3 },
];
