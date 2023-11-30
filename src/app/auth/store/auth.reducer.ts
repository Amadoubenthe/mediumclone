import { createFeature, createReducer, on } from '@ngrx/store';
import { authActions } from './auth.actions';
import { AuthState } from 'src/app/shared/types/auth-state';

const initialState: AuthState = {
  isSubmitting: false,
  isLoading: false,
  token: null,
  validationErrors: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.registerRequest, (state) => ({
      ...state,
      isSubmitting: true,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
} = authFeature;
