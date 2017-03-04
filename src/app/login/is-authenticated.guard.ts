import { Injectable } from '@angular/core';
import { Router,
         CanActivate,
         CanActivateChild,
         RouterStateSnapshot,
         ActivatedRouteSnapshot
       } from '@angular/router';

import { go } from '@ngrx/router-store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { AppState, Store, checkUser } from '../store';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate, CanActivateChild {
  constructor(private store: Store<AppState>, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store
      .select(s => s.login)
      .map(i => !!i.user)
      .do(a => {
        if (!a) {
          go('/login');
        }
      });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }
}