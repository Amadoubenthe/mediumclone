import { createFeature, createReducer, on } from '@ngrx/store';
import { authActions } from './auth.actions';

export interface AuthState {
  isSubmitting: boolean;
}

const initialState: AuthState = {
  isSubmitting: false,
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
