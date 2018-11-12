// Types
import {Card} from 'doggo/context/types';

export const findCard = (cardId: string, cards: Card[]) => {
  return cards.find(({id}) => id === cardId);
};

export default findCard;
