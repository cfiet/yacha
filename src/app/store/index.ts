import { StoreModule } from '@ngrx/store';
import { routerReducer as router, RouterState } from '@ngrx/router-store';
import { LoginState, loginReducer as login } from './login';
import { RoomsState, roomsReducer as rooms } from './rooms';

export * from './data';
export * from './actions';
export { Store } from '@ngrx/store';
export { LoginState } from './login';
export { RoomsState } from './rooms';

export interface AppState {
  login: LoginState;
  state: RouterState;
  rooms: RoomsState;
}

export const store =  StoreModule.provideStore({
  login,
  router,
  rooms
});
