// Sample news stories, written for this project (not real news).
// The first one is shown large on the Home page and on the News page.
import duel from '../assets/photos/duel.jpg'
import allianzRed from '../assets/photos/allianz-arena-red.jpg'
import campNouStand from '../assets/photos/camp-nou-stand.jpg'
import bernabeuPitch from '../assets/photos/bernabeu-pitch.jpg'
import juventusFans from '../assets/photos/juventus-fans.jpg'
import bernabeuWide from '../assets/photos/bernabeu-wide.jpg'

export const news = [
  {
    id: 'cl-matchday-five',
    category: 'Champions League',
    date: '14 Nov 2026',
    title: 'Matchday five: what each of our clubs needs to go through',
    photo: duel,
    photoAlt: 'Two players challenge for the ball during a Champions League match',
    summary: 'Two rounds of the league phase are left. Real Madrid and Bayern are close to the top eight; Barcelona and Juventus still have work to do.',
    body: 'Real Madrid are through to the knockout rounds with one more win. Bayern need four points from their last two games to avoid the play-off round. Barcelona host Juventus on 24 November in a match that could decide which of the two finishes in the top eight, and a draw would suit neither side.',
  },
  {
    id: 'bayern-go-top',
    category: 'Bundesliga',
    date: '14 Nov 2026',
    title: 'Bayern go top after a second-half turnaround in Munich',
    photo: allianzRed,
    photoAlt: 'The Allianz Arena lit in red at night',
    summary: 'One goal down at half-time, Bayern scored three times after the break to beat RB Leipzig 3–1.',
    body: 'Leipzig led through an early header, but Bayern took control after the break. Harry Kane equalised from the penalty spot, Michael Olise curled in the second, and Lennart Karl finished a quick counter-attack in stoppage time. Kane now has 21 goals in all competitions this season.',
  },
  {
    id: 'clasico-preview',
    category: 'La Liga',
    date: '13 Nov 2026',
    title: 'Clásico on Sunday: one point between first and second',
    photo: bernabeuWide,
    photoAlt: 'The Santiago Bernabéu stadium seen from the stands',
    summary: 'Barcelona arrive at the Bernabéu one point ahead of Real Madrid after twelve rounds.',
    body: 'Real Madrid have won four of their last five home league games. Barcelona have scored in every away match this season. Kick-off is at 21:00 on Sunday 15 November.',
  },
  {
    id: 'january-window',
    category: 'Transfers',
    date: '12 Nov 2026',
    title: 'The January window: who needs what, club by club',
    photo: campNouStand,
    photoAlt: 'A full stand at Camp Nou on a match day',
    summary: 'A centre-back for Madrid, a striker for Juventus: where each of our four clubs is short ahead of January.',
    body: 'Real Madrid have used five different centre-back pairings this season. Barcelona are expected to keep their squad as it is. Bayern are looking for cover at full-back, and Juventus have scored fewer goals than any other team in the Serie A top six, so a striker is at the top of their list.',
  },
  {
    id: 'golden-boot',
    category: 'Players',
    date: '11 Nov 2026',
    title: 'Golden Boot race: the numbers after twelve rounds',
    photo: bernabeuPitch,
    photoAlt: 'The Santiago Bernabéu pitch seen from the upper tier',
    summary: 'Harry Kane leads Kylian Mbappé by four goals in all competitions, with Raphinha the best of the rest.',
    body: 'Kane has scored 21 goals in 15 games, Mbappé 17 in 16. Raphinha is third with 11. Lamine Yamal has the most assists of any La Liga player with 10, and Michael Olise leads all four clubs with 11.',
  },
  {
    id: 'juventus-draw',
    category: 'Serie A',
    date: '8 Nov 2026',
    title: 'Juventus held in Florence after a late equaliser',
    photo: juventusFans,
    photoAlt: 'Juventus supporters inside the stadium in Turin',
    summary: 'Juventus were two minutes from a win in Florence before Fiorentina scored from a corner.',
    body: 'Randal Kolo Muani put Juventus ahead early in the second half, and the team defended well until the 88th minute, when a corner was not cleared. Luciano Spalletti said his team had played "the best forty-five minutes of the season" before the equaliser.',
  },
]
