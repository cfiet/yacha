import { Action as StoreAction } from '@ngrx/store';

export type ActionType =
  'LOGIN' | 'LOGOUT' | 'NOT_AUTHORIZED' |
  'CONVERATION_CREATE' | 'CONVERSATION_USER_JOINED' | 'CONVERSATION_USER_LEFT';

export abstract class Action<Payload> implements StoreAction {
  constructor(public type: ActionType, public payload?: Payload) {
  }
}

export function createAction<Payload>(type: ActionType) {
  return class ImplementedAction extends Action<Payload> {
    static is(action: Action<any>): action is ImplementedAction {
      return action && action.type === type;
    }

    constructor(public payload?: Payload) {
      super(type, payload);
    }
  }
}