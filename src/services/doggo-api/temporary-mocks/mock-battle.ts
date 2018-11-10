// Types
import {BattleResultData, Card} from '../doggo-api';

export const mockBattle: (
    ownCard: Card,
    opponentCard: Card
  ) => BattleResultData = (ownCard, opponentCard) => {
  return {
    card: {
      ...ownCard,
      hp: 20
    },
    opponent: {
      ...opponentCard,
      hp: 0
    }
  };
};
