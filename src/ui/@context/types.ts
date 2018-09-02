export interface ApplicationContext {
  actions: ContextActions;
  state: ContextState;
}

export interface ContextActions {
  login: () => void;
}

export interface ContextState {
  cards: Card[] | null;
}

export interface Card {
  name: string;
  hp: number;
}
