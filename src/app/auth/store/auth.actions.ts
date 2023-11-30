import { createActionGroup, props } from '@ngrx/store';
import { CreatedSuccessMessage } from 'src/app/shared/types/created-success-message';
import { UserRequest } from 'src/app/shared/types/user-request';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Register Request': props<UserRequest>(),
    'Register Success': props<{ response: CreatedSuccessMessage }>(),
    'Register Failure': props<{ errors: { message: string } }>(),
  },
});
