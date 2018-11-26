import {ApiError} from 'doggo/services/doggo-api';
import {BattleActions, BattleCardActions, CaptureActions, GetNextOpponentActions, LoginActions} from './actions';
import {Action, Battle, BattleStatus, Card} from './types';

export const loadingReducer = (loading: boolean, action: Action) => {
  switch (action.type) {
    case LoginActions.Action:
    case BattleActions.Action:
    case CaptureActions.Action:
    case GetNextOpponentActions.Action:
      return true;
    case LoginActions.Success:
    case LoginActions.Error:
    case BattleActions.Success:
    case BattleActions.Error:
    case CaptureActions.Success:
    case CaptureActions.Error:
    case GetNextOpponentActions.Success:
    case GetNextOpponentActions.Error:
      return false;
    default:
      return loading;
  };
};

export const errorReducer = (error: ApiError | null, action: Action) => {
  switch (action.type) {
    case LoginActions.Action:
    case BattleActions.Action:
    case CaptureActions.Action:
    case GetNextOpponentActions.Action:
      return null;
    case LoginActions.Error:
    case BattleActions.Error:
    case CaptureActions.Error:
    case GetNextOpponentActions.Error:
      return action.payload;
    default:
      return error;
  };
};

export const cardsReducer = (cards: Card[] | null, action: Action) => {
  switch (action.type) {
    case LoginActions.Success:
      return action.payload.cards;
    case CaptureActions.Success:
      return cards!.concat([action.payload.card]);
    case BattleActions.Success:
      return cards!.map(mappedCard => mappedCard.id === action.payload.card.id ? action.payload.card : mappedCard);
    default:
      return cards;
  };
};

export const battleReducer = (battle: Battle, action: Action) => {
  switch (action.type) {
    case LoginActions.Success:
      return {
        cardId: null,
        opponent: action.payload.opponent,
        status: BattleStatus.NoCardSelected
      };
    case BattleActions.Action:
      return {
        ...battle,
        status: BattleStatus.Ongoing
      };
    case BattleCardActions.Select:
      return {
        ...battle,
        cardId: action.payload.id,
        status: BattleStatus.Ready
      };
    case BattleCardActions.Unselect:
      return {
        ...battle,
        cardId: null,
        status: BattleStatus.NoCardSelected
      };
    case BattleActions.Success:
      return {
        ...battle,
        opponent: action.payload.opponent,
        status: action.payload.opponent.hpLeft === 0 ? BattleStatus.Won : BattleStatus.Lost
      };
    case GetNextOpponentActions.Success:
      return {
        ...battle,
        opponent: action.payload.opponent,
        status: BattleStatus.Ready
      }
    default:
      return battle;
  };
};
