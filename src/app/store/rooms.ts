import { ActionType, Action } from './actions';

import { Room, RoomHeader } from './data';

export interface RoomsState {
  loading: boolean;
  failReason: string;
  rooms: RoomHeader[];
}

const initialState = {
  loading: false,
  failReason: undefined,
  rooms: []
}

export const roomsReducer = (state: RoomsState = initialState, action: Action): RoomsState => {
  switch(action.type) {
    case ActionType.ROOMS_LOAD:
      return Object.assign({}, state, { loading: true });

    case ActionType.ROOMS_LOAD_FAILED:
      return Object.assign({}, state, { loading: false, failReason: action.payload });

    case ActionType.ROOMS_LOAD_SUCCESS:
      return Object.assign({}, state, { loading: false, rooms: action.payload });

    default:
      return state;
  }
};