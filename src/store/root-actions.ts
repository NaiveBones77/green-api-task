import * as authActions from './auth/auth.actions'
import {actions as chatActions} from './chats/chat.slice'
import {actions as contactsActions} from './contacts/contacts.slice'

export const rootActions = {
    ...authActions,
    ...chatActions,
    ...contactsActions
}