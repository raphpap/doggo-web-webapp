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
import {BattleStatus, Card, ContextState} from './types';

type State = Readonly<ContextState>;

// Constants
const INITIAL_STATE: State = {
  battle: {
    cardId: null,
    opponent: null,
    status: BattleStatus.NoOpponent
  },
  cards: null,
  error: null,
  loading: false
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
    battle: {
      cardId: null,
      opponent,
      status: BattleStatus.NoCardSelected
    },
    cards,
    loading: false,
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

const handleBeginBattle = () => (state: ContextState) => {
  return {
    ...state,
    ...handleCallPending(),
    battle: {
      ...state.battle,
      status: BattleStatus.Ongoing
    }
  };
};

const handleSelectCard = (card: Card) => (state: ContextState) => {
  return {
    ...state,
    battle: {
      ...state.battle,
      cardId: card.id
    }
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
    battle: {
      ...state.battle,
      opponent,
      status: opponent.hpLeft === 0 ? BattleStatus.Won : BattleStatus.Lost
    },
    cards: state.cards.map(mappedCard =>
      mappedCard.id === card.id ? card : mappedCard
    ),
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
            battle: this.battle,
            capture: this.capture,
            login: this.login,
            selectBattleCard: this.selectBattleCard
          },
          state: {...this.state}
        }}
      >
        {this.props.children}
      </Provider>
    );
  }

  private battle = async (ownCard: Card, opponentCard: Card) => {
    this.setState(handleBeginBattle());

    const {data, error} = await DoggoAPI.battle(ownCard, opponentCard);

    if (error) {
      this.setState(handleCallFailure(error));
    } else {
      this.setState(handleBattleSuccess(data!));
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

  private login = async (username: string, password: string) => {
    this.setState(handleCallPending());

    const {data, error} = await DoggoAPI.login(username, password);

    if (error) {
      this.setState(handleCallFailure(error));
    } else {
      this.setState(handleLoginSuccess(data!));
    }
  };

  private selectBattleCard = async (card: Card) => {
    this.setState(handleSelectCard(card));
  };
}
