import {ApiError} from 'doggo-web-webapp/services/doggo-api';

export interface ApplicationContext {
  actions: ContextActions;
  state: ContextState;
}

export interface ContextActions {
  login: (username: string, password: string) => void;
  capture: (card: {name: string; image: string}) => void;
}

export interface ContextState {
  cards: Card[] | null;
  error: ApiError | null;
  loading: boolean;
}

export interface Card {
  id: string;
  name: string;
  image: string;
  hp: number;
  attack: number;
  defense: number;
}
