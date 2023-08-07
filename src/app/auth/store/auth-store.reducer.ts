import { createReducer } from '@ngrx/store';
import { Login } from './auth-store.actions';
import { AuthState } from './auth-store.model';
import { immerOn } from 'ngrx-immer/store';

export const AuthReducer = createReducer(
  {} as AuthState,
  immerOn(Login, (state, { user }) => {
    state.user = user;
  })
);
