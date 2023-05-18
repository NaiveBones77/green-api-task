import {combineReducers} from "@reduxjs/toolkit";
import {authSlice} from "./auth/auth.slice";
import {api} from "../api/api";
import {chatSlice} from "./chats/chat.slice";
import {contactsSlice} from "./contacts/contacts.slice";


export const rootReducers = combineReducers({
    auth: authSlice.reducer,
    chats: chatSlice.reducer,
    contacts: contactsSlice.reducer,
    [api.reducerPath]: api.reducer
})