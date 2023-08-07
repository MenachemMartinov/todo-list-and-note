import { createAction } from '@ngrx/store';

export enum AppActionTypes {
  RESET_APP_STATE = '[App] Reset App State',
}

export const ResetAppState = createAction(AppActionTypes.RESET_APP_STATE);
