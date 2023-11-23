import { createFeature, createReducer, on } from '@ngrx/store';
import { register } from './login-page.actions';

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
    on(register, (state) => ({ ...state, isSubmitting: true }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
} = authFeature;
