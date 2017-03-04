import { ActionType, Action } from './actions';
import { User } from './data';

export interface LoginState {
  readonly user: User;
  readonly checking: boolean;
  readonly redirecting: boolean;
  readonly failReason: string;
}

const initialState: LoginState = {
  user: undefined,
  checking: false,
  redirecting: false,
  failReason: undefined,
};

export function loginReducer(state: LoginState = initialState, action: Action): LoginState {
  switch(action.type) {
    case ActionType.LOGIN_CHECK_USER:
      return { user: undefined, checking: true, redirecting: false, failReason: undefined };

    case ActionType.LOGIN_REQUIRE:
      return { user: undefined, checking: false, redirecting: false, failReason: undefined };

    case ActionType.LOGIN_START:
      return { user: undefined, checking: true, redirecting: false, failReason: undefined };

    case ActionType.LOGIN_SUCCESS:
      return { user: action.payload, checking: false, redirecting: false, failReason: undefined };

    case ActionType.LOGIN_FAILED:
      return { user: undefined, checking: false, redirecting: false, failReason: action.payload };

    case ActionType.LOGOUT:
      return {user: undefined, checking: false, redirecting: false, failReason: undefined };

    default:
      return state;
  }
}
