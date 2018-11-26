// Vendor
import React from 'react';

// Types
import {
  ApplicationContext,
  BattlePayload,
  BattleStatus,
  CapturePayload,
  Card,
  GetNextOpponentPayload,
  LoginPayload
} from './types';

const defaultValue: ApplicationContext = {
  actions: {
    battle: (payload: BattlePayload) => Promise.reject(),
    capture: (payload: CapturePayload) => Promise.reject(),
    getNextOpponent: (payload: GetNextOpponentPayload) => Promise.reject(),
    login: (payload: LoginPayload) => Promise.reject(),
    selectBattleCard: (card: Card) => Promise.reject(),
    unselectBattleCard: () => Promise.reject()
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
