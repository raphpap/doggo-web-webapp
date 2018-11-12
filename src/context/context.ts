// Vendor
import React from 'react';

// Types
import {ApplicationContext, BattleStatus, Card} from './types';

const defaultValue: ApplicationContext = {
  actions: {
    battle: (ownCard: Card, opponentCard: Card) => Promise.reject(),
    capture: (name: string, image: string) => Promise.reject(),
    login: (username: string, password: string) => Promise.reject(),
    selectBattleCard: (card: Card) => Promise.reject()
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
};

const Context = React.createContext(defaultValue);

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
