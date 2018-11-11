// Vendor
import React from 'react';

// Types
import {ThemeContext} from './types';

// Default theme
import theme from './theme';

const defaultValue: ThemeContext = {
  theme
};

const Context = React.createContext(defaultValue);

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
