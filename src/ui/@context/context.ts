// Vendor
import React from 'react';

// Types
import {ApplicationContext} from './types';

const defaultValue: ApplicationContext = {
  actions: {
    capture: (card: {name: string; image: string}) => Promise.reject(),
    login: (username: string, password: string) => Promise.reject()
  },
  state: {
    cards: null,
    error: null,
    loading: false
  }
};

const Context = React.createContext(defaultValue);

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
