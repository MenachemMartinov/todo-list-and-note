import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app-store.model';
import { AuthReducer } from '../auth/store/auth-store.reducer';

export const rootReducer: ActionReducerMap<AppState> = {
  auth: AuthReducer,
};
