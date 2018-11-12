import {ApiError} from 'doggo-web-webapp/services/doggo-api';

export interface ApplicationContext {
  actions: ContextActions;
  state: ContextState;
}

export interface ContextActions {
  battle: (ownCard: Card, opponentCard: Card) => void;
  capture: (name: string, image: string) => void;
  login: (username: string, password: string) => void;
  selectBattleCard: (card: Card) => void;
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
