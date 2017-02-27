import { Action as StoreAction } from '@ngrx/store';

export type ActionType =
  'SYSTEM_LOGIN' | 'SYSTEM_LOGOUT';

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