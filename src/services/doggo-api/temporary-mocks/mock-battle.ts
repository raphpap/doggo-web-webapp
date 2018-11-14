// Types
import {BattleResultData, Card} from '../doggo-api';

export const mockBattle: (
  ownCard: Card,
  opponentCard: Card
) => BattleResultData = (ownCard, opponentCard) => {
  let damageOnSelfPerTurn = opponentCard.attack - ownCard.defense;
  damageOnSelfPerTurn = damageOnSelfPerTurn <= 0 ? 10 : damageOnSelfPerTurn;

  let damageOnOpponentPerTurn = ownCard.attack - opponentCard.defense;
  damageOnOpponentPerTurn =
    damageOnOpponentPerTurn <= 0 ? 10 : damageOnOpponentPerTurn;

  let ownHpLeft = ownCard.hpLeft;
  let opponentHpLeft = opponentCard.hpLeft;

  while (ownHpLeft > 0 && opponentHpLeft > 0) {
    ownHpLeft -= damageOnSelfPerTurn;
    opponentHpLeft -= damageOnOpponentPerTurn;
  }

  if (opponentHpLeft > ownHpLeft) {
    opponentHpLeft = opponentHpLeft < 0 ? 10 : opponentHpLeft;
    ownHpLeft = 0;
  } else {
    ownHpLeft = ownHpLeft < 0 ? 10 : ownHpLeft;
    opponentHpLeft = 0;
  }

  return {
    card: {
      ...ownCard,
      hpLeft: ownHpLeft
    },
    opponent: {
      ...opponentCard,
      hpLeft: opponentHpLeft
    }
  };
};
