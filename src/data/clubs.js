// The four clubs that get a full club page (/clubs/:id).
import bernabeu from '../assets/photos/bernabeu-pitch.jpg'
import campNou from '../assets/photos/camp-nou.jpg'
import allianzArena from '../assets/photos/allianz-arena.jpg'
import juventusStadium from '../assets/photos/juventus-stadium.jpg'

export const clubs = [
  {
    id: 'real-madrid',
    name: 'Real Madrid',
    city: 'Madrid',
    founded: 1902,
    stadium: 'Santiago Bernabéu',
    color: '#E8E6DF',
    photo: bernabeu,
    photoAlt: 'The Santiago Bernabéu pitch seen from the upper tier',
  },
  {
    id: 'barcelona',
    name: 'FC Barcelona',
    city: 'Barcelona',
    founded: 1899,
    stadium: 'Spotify Camp Nou',
    color: '#A50044',
    photo: campNou,
    photoAlt: 'A full stand at Camp Nou on a match day',
    photoPosition: '30% center',
  },
  {
    id: 'bayern-munich',
    name: 'Bayern Munich',
    city: 'Munich',
    founded: 1900,
    stadium: 'Allianz Arena',
    color: '#DC052D',
    photo: allianzArena,
    photoAlt: 'The Allianz Arena lit in red at night',
    photoPosition: '38% center',
  },
  {
    id: 'juventus',
    name: 'Juventus',
    city: 'Turin',
    founded: 1897,
    stadium: 'Allianz Stadium',
    color: '#FFFFFF',
    photo: juventusStadium,
    photoAlt: 'Inside the Juventus stadium before a night match',
  },
]
