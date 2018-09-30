// Types
import {LoginResultData} from '../doggo-api';

// Images
import image_1 from './dogs/dog_1';
import image_2 from './dogs/dog_2';
import image_3 from './dogs/dog_3';
import image_4 from './dogs/dog_4';
import image_5 from './dogs/dog_5';
import image_6 from './dogs/dog_6';

export const mockLogin = (
  username: string,
  password: string
): LoginResultData => ({
  cards: [
    {
      attack: 50,
      defense: 50,
      hp: 50,
      image: image_1,
      name: 'Pogger'
    },
    {
      attack: 70,
      defense: 80,
      hp: 50,
      image: image_2,
      name: 'El Borko'
    },
    {
      attack: 50,
      defense: 100,
      hp: 70,
      image: image_3,
      name: 'Blue Eyed White Pupper'
    },
    {
      attack: 80,
      defense: 80,
      hp: 80,
      image: image_4,
      name: 'King Karl'
    },
    {
      attack: 70,
      defense: 100,
      hp: 60,
      image: image_5,
      name: 'Tiny Tank'
    },
    {
      attack: 100,
      defense: 100,
      hp: 100,
      image: image_6,
      name: 'Ronaldoggo'
    }
  ],
  username
});
