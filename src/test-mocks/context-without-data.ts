// Types
import {ApplicationContext, BattleStatus} from 'doggo/context';

export const mockContextWithoutData = (): ApplicationContext => ({
  actions: {
    battle: jest.fn(),
    capture: jest.fn(),
    getNextOpponent: jest.fn(),
    login: jest.fn(),
    selectBattleCard: jest.fn(),
    unselectBattleCard: jest.fn(),
  },
  state: {
    battle: {
      cardId: null,
      opponent: null,
      status: BattleStatus.NoOpponent
    },
    cards: null,
    error: null,
    loading: false
  }
});
