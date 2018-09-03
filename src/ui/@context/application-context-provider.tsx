// Vendor
import React from 'react';

// Components
import {Provider} from './context';

// Services
import DoggoAPI, {
  ApiError,
  LoginResultData
} from 'doggo-web-webapp/services/doggo-api';

// Types
import {ContextState} from './types';

type State = Readonly<ContextState>;

// Constants
const INITIAL_STATE: State = {
  cards: null,
  error: null,
  loading: false
};

const handleLoginPending = () => ({
  error: null,
  loading: true
});

const handleLoginFailure = (error: ApiError) => ({
  error,
  loading: false
});

const handleLoginSuccess = ({cards, username}: LoginResultData) => (
  state: ContextState
) => {
  return {
    ...state,
    cards,
    loading: false,
    username
  };
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

  private login = async (username: string, password: string) => {
    this.setState(handleLoginPending());

    const {data, error} = await DoggoAPI.login(username, password);

    if (error) {
      this.setState(handleLoginFailure(error));
    } else {
      this.setState(handleLoginSuccess(data!));
    }
  };
}
