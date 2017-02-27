import { StoreModule, combineReducers } from '@ngrx/store';
export { Store } from '@ngrx/store';

import { loginReducer } from './login';
export { LoginAction, LogoutAction } from './login';

export * from './state';

export const store = StoreModule.provideStore({
  currentUser: loginReducer
}, { currentUser: undefined });