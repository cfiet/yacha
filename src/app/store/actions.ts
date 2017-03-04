import { Action } from '@ngrx/store';
export { Action } from '@ngrx/store';

import { User, RoomHeader, Room } from './data';

export const ActionType = {
  LOGIN_CHECK_USER: 'LOGIN_CHECK_USER',
  LOGIN_REQUIRE: 'LOGIN_REQUIRE',
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT: 'LOGOUT',

  ROOMS_LOAD: 'ROOMS_LOAD',
  ROOMS_LOAD_SUCCESS: 'ROOMS_LOAD_SUCCESS',
  ROOMS_LOAD_FAILED: 'ROOMS_LOAD_FAILED',

  ROOM_CREATE: 'ROOM_CREATE',
  ROOM_OPENED: 'ROOM_OPENED',
  ROOM_JOIN: 'ROOM_JOIN'
};

function createAction<T>(type: string, payload: T): Action {
  return { type, payload };
}

function createEmptyAction(type: string): Action {
  return createAction(type, {});
}

export const checkUser = (): Action =>
  createEmptyAction(ActionType.LOGIN_CHECK_USER);

export const loginRequired = (): Action =>
  createEmptyAction(ActionType.LOGIN_REQUIRE);

export const loginStart = (): Action =>
  createEmptyAction(ActionType.LOGIN_START);

export const loginSuccess = (
    user: any,
    redirectTo: string = '/',
    redirectTimeout: number = 1000
  ): Action =>
    createAction(ActionType.LOGIN_SUCCESS, user);

export const loginFailed = (reason: string): Action =>
  createAction(ActionType.LOGIN_FAILED, reason);

export const logout = (): Action =>
  createEmptyAction(ActionType.LOGOUT);

export const loadRooms = (): Action =>
  createEmptyAction(ActionType.ROOMS_LOAD);

export const loadRoomsCompleted = (rooms: RoomHeader[]): Action =>
  createAction(ActionType.ROOMS_LOAD_SUCCESS, rooms);

export const loadRoomsFailed = (reason: string): Action =>
  createAction(ActionType.ROOMS_LOAD_FAILED, reason);

export const createRoom = (
    title: string,
    isPublic: boolean = false
  ) =>
    createAction(ActionType.ROOM_CREATE, { title, isPublic });