// Types
import {ApplicationContext, BattleStatus} from 'doggo/context';

// Mocks
import {mockCard, mockContextWithoutData} from '.';

export const mockLoggedIn = (): ApplicationContext => {
  const context = mockContextWithoutData();

  return {
    ...context,
    state: {
      ...context.state,
      battle: {
        ...context.state.battle,
        opponent: mockCard(99),
        status: BattleStatus.NoCardSelected
      },
      cards: [
        mockCard(1),
        mockCard(2)
      ]
    }
  };
};
