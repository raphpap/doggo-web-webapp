// Types
import {LoginResultData} from '../doggo-api';

export const mockLogin = (
  username: string,
  password: string
): LoginResultData => ({
  cards: [
    {
      hp: 50,
      name: 'Card #1'
    },
    {
      hp: 100,
      name: 'Card #2'
    }
  ],
  username
});
