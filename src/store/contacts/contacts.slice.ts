import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContact} from "./contacts.interface";

const initialState: IContact[] = [

]

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
        addContact: (state, action:PayloadAction<IContact>) => {
            const contact = action.payload

            const ifExists = state.some(c => contact.chatId === c.chatId)
            if (!ifExists) {
                state.push(contact)
            }
        }
    }
})

export const {actions, reducer} = contactsSlice