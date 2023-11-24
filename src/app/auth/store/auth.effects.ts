import { Injectable, inject } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService, User } from '../sevices/auth.service';
import { authActions } from './auth.actions';

export const registerEffect = createEffect(
  (ations$ = inject(Actions), authervice = inject(AuthService)) => {
    return ations$.pipe(
      ofType(authActions.registerRequest),
      switchMap((request) => {
        return authervice.register(request).pipe(
          map((user: User) => {
            return authActions.registerSuccess(user);
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

// @Injectable()
// export class MoviesEffects {
//   loadMovies$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType('[Movies Page] Load Movies'),
//       exhaustMap(() =>
//         this.authService.register().pipe(
//           map((movies) => ({
//             type: '[Movies API] Movies Loaded Success',
//             payload: movies,
//           })),
//           catchError(() => EMPTY)
//         )
//       )
//     )
//   );

//   constructor(private actions$: Actions, private authService: AuthService) {}
// }
