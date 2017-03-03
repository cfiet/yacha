import { User, UserId, UsersData } from './state';
import { ActionType, Action } from './actions';

export interface LoginState {
  readonly user: any;
  readonly checking: boolean;
  readonly failReason: string;
}

const initialState: LoginState = {
  user: undefined,
  checking: false,
  failReason: undefined,
};

export function loginReducer(state: LoginState = initialState, action: Action): LoginState {
  switch(action.type) {
    case ActionType.LOGIN_CHECK_USER:
      return { user: undefined, checking: true, failReason: undefined };

    case ActionType.LOGIN_REQUIRE:
      return { user: undefined, checking: false, failReason: undefined };

    case ActionType.LOGIN_START:
      return { user: undefined, checking: true, failReason: undefined };

    case ActionType.LOGIN_SUCCESS:
      return { user: action.payload, checking: false, failReason: undefined };

    case ActionType.LOGIN_FAILED:
      return { user: undefined, checking: false, failReason: action.payload };

    case ActionType.LOGOUT:
      return {user: undefined, checking: false, failReason: undefined };

    default:
      return state;
  }
}
