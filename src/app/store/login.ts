import { Reducer } from '@ngrx/store';
import { Map } from 'immutable';
import { User } from './state';
import { ActionType, Action, createAction } from './actions';

export const LoginAction = createAction<User>('SYSTEM_LOGIN');
export const LogoutAction = createAction<void>('SYSTEM_LOGOUT');

export function loginReducer(state: User, action: Action<any>) {
  if (LoginAction.is(action)) {
    return action.payload;
  }

  if (LogoutAction.is(action)) {
    return undefined;
  }

  return state;
}