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
      attack: 75,
      defense: 75,
      hpLeft: 800,
      hpTotal: 800,
      id: '1',
      image: image_1,
      name: 'Pogger'
    },
    {
      attack: 75,
      defense: 65,
      hpLeft: 800,
      hpTotal: 800,
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
      hpLeft: 700,
      hpTotal: 700,
      id: '3',
      image: image_3,
      name: 'Blue Eyed White Pupper'
    }
  ],
  opponent: mockOpponent(),
  username: Users.Bravo
});

export const mockOpponent = () => ({
  attack: 90,
  defense: 95,
  hpLeft: 1000,
  hpTotal: 1000,
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
