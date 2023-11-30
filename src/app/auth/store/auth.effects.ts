import { inject } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { authActions } from './auth.actions';
import { UserRequest } from 'src/app/shared/types/user-request';
import { AuthService } from '../services/auth.service';
import { CreatedSuccessMessage } from 'src/app/shared/types/created-success-message';
import { HttpErrorResponse } from '@angular/common/http';

export const registerEffect = createEffect(
  (ations$ = inject(Actions), authervice = inject(AuthService)) => {
    return ations$.pipe(
      ofType(authActions.registerRequest),
      switchMap((request: UserRequest) => {
        return authervice.register(request).pipe(
          map((response: CreatedSuccessMessage) => {
            return authActions.registerSuccess({ response });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({
                errors: errorResponse.error,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
