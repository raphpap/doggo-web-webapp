// Vendor
import React from 'react';

// Types
import {ApplicationContext, Card} from './types';

const defaultValue: ApplicationContext = {
  actions: {
    battle: (ownCard: Card, opponentCard: Card) => Promise.reject(),
    capture: (name: string, image: string) => Promise.reject(),
    login: (username: string, password: string) => Promise.reject(),
  },
  state: {
    cards: null,
    error: null,
    loading: false,
    opponent: null
  }
};

const Context = React.createContext(defaultValue);

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
