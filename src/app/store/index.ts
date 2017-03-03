import { StoreModule } from '@ngrx/store';

export * from './actions';

import { LoginState, loginReducer as login } from './login';
export { LoginState } from './login';

export interface AppState {
  login: LoginState;
}

export const store =  StoreModule.provideStore({
  login
});