import { StoreModule, Reducer, combineReducers } from '@ngrx/store';
export { Store } from '@ngrx/store';

import { currentUserLoginReducer, usersLoginReducer } from './login';
export * from './login';

import { AppState } from './state';
export * from './state';


export const store = StoreModule.provideStore(
  {
    currentUser: currentUserLoginReducer,
    users: usersLoginReducer
  },
  <AppState> {
    currentUser: undefined,
    users: {},
    currentConversation: undefined,
    conversations: {}
  }
);