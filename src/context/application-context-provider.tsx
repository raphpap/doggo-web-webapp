// Vendor
import React from 'react';

// Components
import {Provider} from './context';

// Services
import DoggoAPI, {
  ApiError,
  CaptureResultData,
  LoginResultData
} from 'doggo-web-webapp/services/doggo-api';

// Types
import {ContextState} from './types';

type State = Readonly<ContextState>;

// Constants
const INITIAL_STATE: State = {
  cards: null,
  error: null,
  loading: false,
  nextOpponent: null
};

const handleCallPending = () => ({
  error: null,
  loading: true
});

const handleCallFailure = (error: ApiError) => ({
  error,
  loading: false
});

const handleLoginSuccess = ({cards, nextOpponent, username}: LoginResultData) => (
  state: ContextState
) => {
  return {
    ...state,
    cards,
    loading: false,
    nextOpponent,
    username
  };
};

const handleCaptureSuccess = ({card}: CaptureResultData) => (
  state: ContextState
) => {
  if (!state.cards) {
    throw Error(`Team was not found! Cannot capture a new doggo for now.`);
  }

  return {
    ...state,
    cards: state.cards.concat([card]),
    loading: false
  };
};

export class ApplicationContextProvider extends React.Component<{}, State> {
  public readonly state: State = INITIAL_STATE;

  public render() {
    return (
      <Provider
        value={{
          actions: {
            capture: this.capture,
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
    this.setState(handleCallPending());

    const {data, error} = await DoggoAPI.login(username, password);

    if (error) {
      this.setState(handleCallFailure(error));
    } else {
      this.setState(handleLoginSuccess(data!));
    }
  };

  private capture = async (card: {name: string; image: string}) => {
    this.setState(handleCallPending());

    const {data, error} = await DoggoAPI.capture(card);

    if (error) {
      this.setState(handleCallFailure(error));
    } else {
      this.setState(handleCaptureSuccess(data!));
    }
  };
}
