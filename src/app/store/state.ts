export type UserId = string;
export interface User {
  readonly id: UserId;
  readonly name: string;
  readonly avatarUri?: string;
}

export interface Message {
  readonly from: User;
  readonly at: Date;
  readonly content: string;
}

export type ConversationId = string;
export interface Conversation {
  readonly id: ConversationId;
  readonly at: Date;
  readonly members: User[];
  readonly messages: Message[];
}

export interface Invitation {
  readonly from: User;
  readonly at: Date;
  readonly text: string;
}