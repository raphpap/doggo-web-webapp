// Vendor
import React from 'react';

// Types
import {ApplicationContext} from './types';

const defaultValue: ApplicationContext = {
  actions: {
    login: () => Promise.reject()
  },
  state: {
    cards: null
  }
};

const Context = React.createContext(defaultValue);

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
