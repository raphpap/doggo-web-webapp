// Action Types
export type ActionType = LoginActions | BattleActions | CaptureActions | GetNextOpponentActions | BattleCardActions;

export enum LoginActions {
  Action = "LOGIN.ACTION",
  Success = "LOGIN.SUCCESS",
  Error = "LOGIN.ERROR"
};

export enum BattleActions {
  Action = "BATTLE.ACTION",
  Success = "BATTLE.SUCCESS",
  Error = "BATTLE.ERROR"
};

export enum CaptureActions {
  Action = "CAPTURE.ACTION",
  Success = "CAPTURE.SUCCESS",
  Error = "CAPTURE.ERROR"
};

export enum GetNextOpponentActions {
  Action = "GET_NEXT_OPPONENT.ACTION",
  Success = "GET_NEXT_OPPONENT.SUCCESS",
  Error = "GET_NEXT_OPPONENT.ERROR"
};

export enum BattleCardActions {
  Select = "BATTLE.SELECT",
  Unselect = "BATTLE.UNSELECT",
};


// Action Creators
// export const login = (params: any) => ({
//   params,
//   type: Login.Action
// });
// export const loginSuccess = (response: any) => ({
//   response,
//   type: Login.Success
// });
// export const loginError = (error: any) => ({
//   error,
//   type: Login.Error
// });
//
//
// export const battle = (params: any) => ({
//   params,
//   type: Battle.Action
// });
// export const battleSuccess = (response: any) => ({
//   response,
//   type: Battle.Success
// });
// export const battleError = (error: any) => ({
//   error,
//   type: Battle.Error
// });
//
//
// export const capture = (params: any) => ({
//   params,
//   type: Capture.Action
// });
// export const captureSuccess = (response: any) => ({
//   response,
//   type: Capture.Success
// });
// export const captureError = (error: any) => ({
//   error,
//   type: Capture.Error
// });
//
//
// export const getNextOpponent = (params: any) => ({
//   params,
//   type: GetNextOpponent.Action
// });
// export const getNextOpponentSuccess = (response: any) => ({
//   response,
//   type: GetNextOpponent.Success
// });
// export const getNextOpponentError = (error: any) => ({
//   error,
//   type: GetNextOpponent.Error
// });
//
//
// export const selectBattleCard = (params: any) => ({
//   params,
//   type: BattleCard.Select
// });
// export const unselectBattleCard = () => ({
//   type: BattleCard.Unselect
// });
