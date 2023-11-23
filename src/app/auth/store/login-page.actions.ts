import { createAction, props } from '@ngrx/store';

export const register = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);
