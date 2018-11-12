// Images
import image_1 from './dogs/dog_1';
import image_2 from './dogs/dog_2';
import image_3 from './dogs/dog_3';
import image_6 from './dogs/dog_6';

export enum Users {
  Alfa = 'alfa',
  Bravo = 'bravo'
}

export const mockAlfa = () => ({
  cards: [
    {
      attack: 50,
      defense: 50,
      hpLeft: 50,
      hpTotal: 50,
      id: '1',
      image: image_1,
      name: 'Pogger'
    },
    {
      attack: 70,
      defense: 80,
      hpLeft: 50,
      hpTotal: 50,
      id: '2',
      image: image_2,
      name: 'El Borko'
    }
  ],
  opponent: mockOpponent(),
  username: Users.Alfa
});

export const mockBravo = () => ({
  cards: [
    {
      attack: 50,
      defense: 100,
      hpLeft: 70,
      hpTotal: 70,
      id: '3',
      image: image_3,
      name: 'Blue Eyed White Pupper'
    }
  ],
  opponent: mockOpponent(),
  username: Users.Bravo
});

export const mockOpponent = () => ({
  attack: 100,
  defense: 100,
  hpLeft: 100,
  hpTotal: 100,
  id: '99',
  image: image_6,
  name: 'Ronaldoggo'
});

export const mockError = () => ({
  status: 401
});

export const mockLogin = (username: string, password: string) => {
  switch (username) {
    case Users.Alfa:
      return mockAlfa();
    case Users.Bravo:
      return mockBravo();
    default:
      return mockError();
  }
};
