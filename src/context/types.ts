import {ApiError} from 'doggo/services/doggo-api';
import {ActionType} from './actions';

export interface Action {
  type: ActionType,
  payload: any
};

export interface LoginPayload {
  username: string;
  password: string;
}

export interface CapturePayload {
  name: string;
  image: string;
}

export interface BattlePayload {
  ownCard: Card;
  opponentCard: Card;
}

export interface GetNextOpponentPayload {
  card: Card;
}

export interface ApplicationContext {
  actions: ContextActions;
  state: ContextState;
}

export interface ContextActions {
  battle: (payload: BattlePayload) => void;
  capture: (payload: CapturePayload) => void;
  getNextOpponent: (payload: GetNextOpponentPayload) => void;
  login: (payload: LoginPayload) => void;
  selectBattleCard: (card: Card) => void;
  unselectBattleCard: () => void;
}

export interface ContextState {
  cards: Card[] | null;
  error: ApiError | null;
  loading: boolean;
  battle: Battle;
}

export interface Card {
  id: string;
  name: string;
  image: string;
  hpTotal: number;
  hpLeft: number;
  attack: number;
  defense: number;
}

export interface Battle {
  cardId: string | null;
  opponent: Card | null;
  status: BattleStatus;
}

export enum BattleStatus {
  NoOpponent = 'no-opponent',
  NoCardSelected = 'no-card-selected',
  Ready = 'ready',
  Ongoing = 'ongoing',
  Won = 'won',
  Lost = 'lost'
}
