// Vendor
import React from 'react';

// Components
import {Provider} from './context';

// Services
import DoggoAPI, {
  // ApiError,
  // BattleResultData,
  // CaptureResultData,
  // LoginResultData,
  // NextOpponentResultData
} from 'doggo/services/doggo-api';

// Types
import {BattleActions, BattleCardActions, CaptureActions, GetNextOpponentActions, LoginActions} from './actions';
import {battleReducer, cardsReducer, errorReducer, loadingReducer} from './reducers';
import {
  Action,
  BattlePayload,
  BattleStatus,
  CapturePayload,
  Card,
  ContextState,
  GetNextOpponentPayload,
  LoginPayload
} from './types';

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

export class ApplicationContextProvider extends React.Component<{}, State> {
  public readonly state: State = INITIAL_STATE;

  public render() {
    return (
      <Provider
        value={{
          actions: {
            battle: this.battle,
            capture: this.capture,
            getNextOpponent: this.getNextOpponent,
            login: this.login,
            selectBattleCard: this.selectBattleCard,
            unselectBattleCard: this.unselectBattleCard
          },
          state: {...this.state}
        }}
      >
        {this.props.children}
      </Provider>
    );
  }

  private dispatch = async (action: Action) => {
    this.rootSaga(action);
    this.rootReducer(action);
  };

  private rootSaga = async (action: Action) => {
    const {type, payload} = action;

    switch (type) {
      case LoginActions.Action:
        return this.loginSaga(payload);
      case CaptureActions.Action:
        return this.captureSaga(payload);
      case BattleActions.Action:
        return this.battleSaga(payload);
      case GetNextOpponentActions.Action:
        return this.getNextOpponentSaga(payload);
      default:
        return;
    }
  }

  private rootReducer = async (action: Action) => {
    this.setState(state => ({
      ...state,
      battle: battleReducer(state.battle, action),
      cards: cardsReducer(state.cards, action),
      error: errorReducer(state.error, action),
      loading: loadingReducer(state.loading, action)
    }));
  };

  // Action Dispatchers
  private battle = async (payload: BattlePayload) => {
    this.dispatch({type: BattleActions.Action, payload});
  };

  private capture = async (payload: CapturePayload) => {
    this.dispatch({type: CaptureActions.Action, payload});
  };

  private login = async (payload: LoginPayload) => {
    this.dispatch({type: LoginActions.Action, payload});
  };

  private selectBattleCard = async (payload: Card) => {
    this.dispatch({type: BattleCardActions.Select, payload});
  };

  private unselectBattleCard = async () => {
    this.dispatch({type: BattleCardActions.Unselect, payload: null});
  };

  private getNextOpponent = async (payload: GetNextOpponentPayload) => {
    this.dispatch({type: GetNextOpponentActions.Action, payload});
  };

  // Sagas
  private loginSaga = async ({username, password}: LoginPayload) => {
    const {data, error} = await DoggoAPI.login(username, password);

    if (error) {
      this.dispatch({type: LoginActions.Error, payload: error});
    } else {
      this.dispatch({type: LoginActions.Success, payload: data!});
    }
  };

  private captureSaga = async ({name, image}: CapturePayload) => {
    const {data, error} = await DoggoAPI.capture(name, image);

    if (error) {
      this.dispatch({type: CaptureActions.Error, payload: error});
    } else {
      this.dispatch({type: CaptureActions.Success, payload: data!});
    }
  };

  private battleSaga = async ({ownCard, opponentCard}: BattlePayload) => {
    const {data, error} = await DoggoAPI.battle(ownCard, opponentCard);

    if (error) {
      this.dispatch({type: BattleActions.Error, payload: error});
    } else {
      this.dispatch({type: BattleActions.Success, payload: data!});
    }
  };

  private getNextOpponentSaga = async ({card}: GetNextOpponentPayload) => {
    const {data, error} = await DoggoAPI.nextOpponent(card);

    if (error) {
      this.dispatch({type: GetNextOpponentActions.Error, payload: error});
    } else {
      this.dispatch({type: GetNextOpponentActions.Success, payload: data!});
    }
  };
}
