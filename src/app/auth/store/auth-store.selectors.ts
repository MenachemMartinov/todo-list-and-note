import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app-store.model';

export const selectAuthStateFeature = (state: AppState) => state.auth;

export const getUser = createSelector(
  selectAuthStateFeature,
  (state) => state?.user
);

export const getUserId = createSelector(
  selectAuthStateFeature,
  (state) => state?.user?.id
);
