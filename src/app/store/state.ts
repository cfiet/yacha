export type UserId = string;
export interface User {
  readonly id: UserId;
  readonly name: string;
  readonly avatarUri?: string;
}
export type UsersData = { [key: string]: User };

export interface Message {
  readonly from: User;
  readonly at: Date;
  readonly content: string;
}

export type ConversationId = string;
export interface Conversation {
  readonly id: ConversationId;
  readonly isOwner: boolean;
  readonly at: Date;
  readonly members: User[];
  readonly messages: Message[];
}
export type ConversationData = { [key: string]: Conversation };

export interface AppState {
  currentUser: UserId;
  users: UsersData;

  currentConversation: ConversationId;
  conversations: ConversationData;
}