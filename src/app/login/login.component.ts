import { Component, OnInit } from '@angular/core';
import { Map } from 'immutable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

import { Store, User, LoginAction, NotAuthorizedAction, AppState } from '../store';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoggingIn = false;
  currentUser: Observable<User>;

  constructor(private store: Store<AppState>, private userService: UserService) {
    this.currentUser = userService.currentUser;
    this.currentUser.subscribe(i => console.log(i));

    this.store.dispatch(new NotAuthorizedAction());
  }

  startLogin(): void {
    this.isLoggingIn = true;
    setTimeout(this.completeLogin.bind(this, {
      id: 'qwerty',
      name: 'User McUserface'
    }), 1000);
  }

  completeLogin(user: User): void {
    this.store.dispatch(new LoginAction(user));
    this.isLoggingIn = false;
  }
}
