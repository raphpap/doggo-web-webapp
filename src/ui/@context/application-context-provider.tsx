// Vendor
import React from 'react';

// Components
import {Provider} from './context';

// Types
import {ContextState} from './types';

type State = Readonly<ContextState>;

// Constants
const INITIAL_STATE: State = {
  cards: null
};

export class ApplicationContextProvider extends React.Component<{}, State> {
  public readonly state: State = INITIAL_STATE;

  public render() {
    return (
      <Provider
        value={{
          actions: {
            login: this.login
          },
          state: {...this.state}
        }}
      >
        {this.props.children}
      </Provider>
    );
  }

  private login = async () => {
    setTimeout(() => {
      this.setState({
        cards: [
          {
            hp: 50,
            name: 'Card 1'
          },
          {
            hp: 100,
            name: 'Card 2'
          }
        ]
      });
    }, 1000);
  };
}
