// Types
import {Battle, BattleStatus, Card} from '../types';

// Utilities
import findCard from 'doggo-web-webapp/utilities/find-card';

export const getBattleStatus = (battle: Battle, cards: Card[]) => {
  const selectedCard = findCard(battle.cardId || '', cards);

  if (battle.status === BattleStatus.Ongoing) return BattleStatus.Ongoing;
  if (!battle.opponent) return BattleStatus.NoOpponent;
  if (!selectedCard) return BattleStatus.NoCardSelected;
  if (selectedCard.hpLeft === 0) return BattleStatus.Lost;
  if (battle.opponent.hpLeft === 0) return BattleStatus.Won;

  return BattleStatus.Ready;
};

export default getBattleStatus;
