import { createAction, props } from '@ngrx/store';
import { User } from '../auth.model';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  SIGNUP = '[Auth] Signup',
  LOGOUT = '[Auth] Logout',
  EDIT_PROFILE = '[Auth] Edit Profile',
  DELETE_PROFILE = '[Auth] Delete Profile',
}

export const Login = createAction(
  AuthActionTypes.LOGIN,
  props<{ user: User }>()
);

export const Signup = createAction(
  AuthActionTypes.SIGNUP,
  props<{ user: User }>()
);

export const Logout = createAction(
  AuthActionTypes.LOGOUT,
  props<{ user: User }>()
);


