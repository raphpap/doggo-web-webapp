import {ApiError} from 'doggo-web-webapp/services/doggo-api';

export interface ApplicationContext {
  actions: ContextActions;
  state: ContextState;
}

export interface ContextActions {
  login: (username: string, password: string) => void;
}

export interface ContextState {
  cards: Card[] | null;
  error: ApiError | null;
  loading: boolean;
}

export interface Card {
  name: string;
  hp: number;
}
