export interface User {
  readonly uid: string;
  readonly photoURL: string;
  readonly displayName: string;
}

export interface Post {
  readonly sentAt: number;
  readonly receivedAt: number;
  readonly from: string;
  readonly content: string;
}

export interface RoomHeader {
  readonly title: string;
  readonly createdAt: number;
  readonly public: boolean;
}

export interface Room extends RoomHeader {
  readonly ops: { [key: string]: boolean },
  readonly joins: { [key: string]: User },
  readonly users: { [key: string]: User },
  readonly posts: Post[];
}