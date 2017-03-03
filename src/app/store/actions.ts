import { Action } from '@ngrx/store';
export { Action } from '@ngrx/store';

export const ActionType = {
  LOGIN_CHECK_USER: 'LOGIN_CHECK_USER',
  LOGIN_REQUIRE: 'LOGIN_REQUIRE',
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT: 'LOGOUT'
};

function createAction<T>(type: string, payload: T): Action {
  return { type, payload };
}

function createEmptyAction(type: string): Action {
  return createAction(type, {});
}

export function checkUser(): Action {
  return createEmptyAction(ActionType.LOGIN_CHECK_USER);
}

export function loginRequired(): Action {
  return createEmptyAction(ActionType.LOGIN_REQUIRE);
}

export function loginStart(): Action {
  return createEmptyAction(ActionType.LOGIN_START);
}

export function loginSuccess(user: any): Action {
  return createAction(ActionType.LOGIN_SUCCESS, user);
}

export function loginFailed(reason: string): Action {
  return createAction(ActionType.LOGIN_FAILED, reason);
}

export function logout(): Action {
  return createEmptyAction(ActionType.LOGOUT);
}