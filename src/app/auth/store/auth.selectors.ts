import { createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/shared/types/auth-state';

export const selectFeature = (state: { auth: AuthState }) => state.auth;

export const selectIsSubmitting = createSelector(
  selectFeature,
  (state) => state.isSubmitting
);
