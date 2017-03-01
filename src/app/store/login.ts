import { User, UserId, UsersData } from './state';
import { Action, createAction } from './actions';

export const LoginAction = createAction<User>('LOGIN');
export const LogoutAction = createAction<void>('LOGOUT');
export const NotAuthorizedAction = createAction<void>('NOT_AUTHORIZED');

export function usersLoginReducer(state: UsersData, action: Action<any>): UsersData {
  if (LoginAction.is(action)) {
    return Object.assign({}, state, {
      [action.payload.id]: action.payload
    });
  }

  return state;
}

export function currentUserLoginReducer(state: UserId, action: Action<any>): UserId {
  if (LoginAction.is(action)) {
    return action.payload.id;
  }

  if (LogoutAction.is(action)) {
    return null;
  }

  if (NotAuthorizedAction.is(action)) {
    return null;
  }

  return state;
}