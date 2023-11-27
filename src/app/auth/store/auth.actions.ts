import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { UserRequest } from 'src/app/shared/types/user-request';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Register Request': props<UserRequest>(),
    'Register Success': props<{ message: string }>(),
    'Register Failure': props<{ error: string }>(),

    // defining events with payload using the `props` function
    //'Login Success': props<{ userId: number; token: string }>(),
    //'Login Failure': props<{ error: string }>(),

    // defining an event without payload using the `emptyProps` function
    //'Logout Success': emptyProps(),

    // defining an event with payload using the props factory
    //'Logout Failure': (error: Error) => ({ error }),
  },
});
