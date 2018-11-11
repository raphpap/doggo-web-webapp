// Vendor
import React from 'react';

// Components
import {Provider} from './context';

// Services
import DoggoAPI, {
  ApiError,
  BattleResultData,
  CaptureResultData,
  LoginResultData
} from 'doggo-web-webapp/services/doggo-api';

// Types
import {Card, ContextState} from './types';

type State = Readonly<ContextState>;

// Constants
const INITIAL_STATE: State = {
  cards: null,
  error: null,
  loading: false,
  opponent: null
};

const handleCallPending = () => ({
  error: null,
  loading: true
});

const handleCallFailure = (error: ApiError) => ({
  error,
  loading: false
});

const handleLoginSuccess = ({cards, opponent, username}: LoginResultData) => (
  state: ContextState
) => {
  return {
    ...state,
    cards,
    loading: false,
    opponent,
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

const handleBattleSuccess = ({card, opponent}: BattleResultData) => (
  state: ContextState
) => {
  if (!state.cards) {
    throw Error(`Team was not found! Cannot battle for now.`);
  }

  return {
    ...state,
    cards: state.cards.map(
      mappedCard => (mappedCard.id === card.id ? card : mappedCard)
    ),
    loading: false,
    opponent
  };
};

export class ApplicationContextProvider extends React.Component<{}, State> {
  public readonly state: State = INITIAL_STATE;

  public render() {
    return (
      <Provider
        value={{
          actions: {
            battle: this.battle,
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

  private capture = async (name: string, image: string) => {
    this.setState(handleCallPending());

    const {data, error} = await DoggoAPI.capture(name, image);

    if (error) {
      this.setState(handleCallFailure(error));
    } else {
      this.setState(handleCaptureSuccess(data!));
    }
  };

  private battle = async (ownCard: Card, opponentCard: Card) => {
    this.setState(handleCallPending());

    const {data, error} = await DoggoAPI.battle(ownCard, opponentCard);

    if (error) {
      this.setState(handleCallFailure(error));
    } else {
      this.setState(handleBattleSuccess(data!));
    }
  };
}
