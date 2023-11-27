import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectFeature = (state: { auth: AuthState }) => state.auth;

export const selectIsSubmitting = createSelector(
  selectFeature,
  (state) => state.isSubmitting
);
