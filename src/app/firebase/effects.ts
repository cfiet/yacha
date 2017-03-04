import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFire } from 'angularfire2';
import { database } from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { go } from '@ngrx/router-store';
import { ActionType,
         loginSuccess,
         loginRequired,
         loginFailed,
         loadRoomsCompleted,
         loadRoomsFailed
       } from '../store';

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

  @Effect()
  redirectAfterLogin$ = this.actions$.ofType(ActionType.LOGIN_SUCCESS)
    .delay(1500)
    .map(() =>
      go('/chat')
    );

  @Effect()
  loadRooms = this.actions$.ofType(ActionType.ROOMS_LOAD).mergeMap(() =>
    this.af.database.list('/rooms', {
      query: {
        orderByChild: 'createdAt'
      }
    }).map(list =>
      loadRoomsCompleted(list)
    ).catch(err =>
      Observable.of(loadRoomsFailed(err.message))
    )
  );

  constructor(
    private actions$: Actions,
    private af: AngularFire
  ) { }
}