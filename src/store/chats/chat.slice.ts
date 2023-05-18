import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypeResponseNotification} from "../../api/notifications/notifications.interface";

const ChatInitialState: TypeResponseNotification[] = []

export const chatSlice = createSlice({
    name: 'chat',
    initialState: ChatInitialState,
    reducers: {
        addMessageToChat: (state, action: PayloadAction<TypeResponseNotification>) => {
            const message = action.payload

            const ifExist = state.some(r => message?.receiptId === r.receiptId)

            if (!ifExist) {
                state.push(message)
            }
        }
    }
})

export const {actions, reducer} = chatSlice