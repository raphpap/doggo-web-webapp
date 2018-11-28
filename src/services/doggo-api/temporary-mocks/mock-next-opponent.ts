// Types
import {Card, NextOpponentResultData} from '../doggo-api';

import image_1 from './dogs/dog_1';
import image_2 from './dogs/dog_2';
import image_3 from './dogs/dog_3';
import image_5 from './dogs/dog_5';
import image_6 from './dogs/dog_6';

const opponents: Card[] = [
  {
    attack: 50,
    defense: 100,
    hpLeft: 500,
    hpTotal: 500,
    id: '96',
    image: image_3,
    name: 'Blue Eyed White Pupper'
  },
  {
    attack: 50,
    defense: 100,
    hpLeft: 500,
    hpTotal: 500,
    id: '98',
    image: image_5,
    name: 'Tiny Tank'
  },
  {
    attack: 90,
    defense: 95,
    hpLeft: 1000,
    hpTotal: 1000,
    id: '99',
    image: image_6,
    name: 'Ronaldoggo'
  },
  {
    attack: 50,
    defense: 50,
    hpLeft: 50,
    hpTotal: 50,
    id: '94',
    image: image_1,
    name: 'Pogger'
  },
  {
    attack: 70,
    defense: 80,
    hpLeft: 50,
    hpTotal: 50,
    id: '95',
    image: image_2,
    name: 'El Borko'
  }
];

const getNextOpponent = (id: string) => {
  const currentIndex = opponents.findIndex(({id: foundId}) => foundId === id);
  const nextIndex = (currentIndex + 1) % opponents.length;

  return opponents[nextIndex];
};

export const mockNextOpponent: (
  opponentCard: Card
) => NextOpponentResultData = currentOpponentCard => {
  return {
    opponent: getNextOpponent(currentOpponentCard.id)
  };
};
