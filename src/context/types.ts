import {ApiError} from 'doggo-web-webapp/services/doggo-api';

export interface ApplicationContext {
  actions: ContextActions;
  state: ContextState;
}

export interface ContextActions {
  login: (username: string, password: string) => void;
  capture: (name: string, image: string) => void;
  battle: (ownCard: Card, opponentCard: Card) => void;
}

export interface ContextState {
  cards: Card[] | null;
  error: ApiError | null;
  loading: boolean;
  opponent: Card | null;
}

export interface Card {
  id: string;
  name: string;
  image: string;
  hp: number;
  attack: number;
  defense: number;
}
