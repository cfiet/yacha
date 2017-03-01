import { Reducer } from '@ngrx/store';
import { Conversation, ConversationId, User, UserId } from './state';
import { Action, createAction } from './actions';

export const CreateConversationAction = createAction<Conversation>('CONVERATION_CREATE');
export const UserJoinedAction = createAction<{ conversationId: ConversationId, user: User }>('CONVERSATION_USER_JOINED');
export const UserLeftAction = createAction<{ conversationId: ConversationId, userId: UserId}>('CONVERSATION_USER_LEFT');

export function conversationsReducer(state: Conversation[], action: Action<any>) {
  if (CreateConversationAction.is(action)) {
    return state.concat([action.payload]);
  }

  if (UserJoinedAction.is(action)) {
    const conversation = state.filter(i => i.id === action.payload.conversationId)[0];
    if (!conversation) {
      return state;
    }
    conversation.members.concat([ action.payload.user ]);
  }

  return state;
}