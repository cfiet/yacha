import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import { ActionType, loginSuccess, loginRequired, loginFailed } from '../store';

@Injectable()
export class FirebaseEffects {
  @Effect()
  checkAuth$ = this.actions$.ofType(ActionType.LOGIN_CHECK_USER).mergeMap(() =>
      this.af.auth.take(1).map(user => 
        !user ? loginRequired() : loginSuccess(user.auth)
      )
  );

  @Effect({ dispatch: false })
  signIn$ = this.actions$.ofType(ActionType.LOGIN_START).mergeMap(a =>
    this.af.auth.login().catch(err => loginFailed(err.message))
  );

  @Effect({ dispatch: false })
  singOut$ = this.actions$.ofType(ActionType.LOGOUT).mergeMap(() =>
    this.af.auth.logout()
  );

  constructor(
    private actions$: Actions,
    private af: AngularFire
  ) { }
}