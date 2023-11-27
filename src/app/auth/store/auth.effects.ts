import { Injectable, inject } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../sevices/auth.service';
import { authActions } from './auth.actions';
import { UserRequest } from 'src/app/shared/types/user-request';

export const registerEffect = createEffect(
  (ations$ = inject(Actions), authervice = inject(AuthService)) => {
    return ations$.pipe(
      ofType(authActions.registerRequest),
      switchMap((request: UserRequest) => {
        return authervice.register(request).pipe(
          map((message) => {
            return authActions.registerSuccess(message);
          }),
          catchError(() => {
            return of(authActions.registerFailure({ error: 'Error ...' }));
          })
        );
      })
    );
  },
  { functional: true }
);
