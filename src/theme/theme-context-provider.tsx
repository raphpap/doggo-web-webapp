// Vendor
import React from 'react';

// Components
import {Provider} from './context';

// Types
import {Theme} from './types';

// Default Theme
import theme from './theme';

// Constants
const INITIAL_STATE: Theme = theme;

export class ThemeContextProvider extends React.Component<{}, Theme> {
  public readonly theme: Theme = INITIAL_STATE;

  public render() {
    return (
      <Provider
        value={{
          theme: {...this.state}
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
