import { createFeature, createReducer, on } from '@ngrx/store';
import { authActions } from './auth.actions';
import { AuthState } from 'src/app/shared/types/auth-state';

const initialState: AuthState = {
  isSubmitting: false,
  isLoading: false,
  message: null,
  validationErrors: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.registerRequest, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),

    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      message: action.response,
    })),

    on(authActions.registerFailure, (state, action) => {
      console.log('action: ' + JSON.stringify(action));

      return {
        ...state,
        isSubmitting: false,
        validationErrors: action.errors,
      };
    })
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectValidationErrors,
} = authFeature;
