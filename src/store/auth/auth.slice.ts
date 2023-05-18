import {createSlice} from "@reduxjs/toolkit";
import {IAuthInitialState} from "./auth.interface";
import {login, logout} from "./auth.actions";

const initialState: IAuthInitialState = {
    instanceId: null,
    apiTokenInstance: null,
    isLoading: false,
    error: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.pending, state => {
            state.isLoading = true
        })
        builder.addCase(login.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.instanceId = payload.instanceId
            state.apiTokenInstance = payload.apiTokenInstance
            state.error = undefined
        })
        builder.addCase(login.rejected, (state, payload) => {
            state.isLoading=false
            state.instanceId = null
            state.apiTokenInstance = null
            state.error = payload.error.message
        })
        builder.addCase(logout.pending, state => {
            state.isLoading = true
        })
        builder.addCase(logout.fulfilled, (state) => {
            state.isLoading = false
            state.instanceId = null
            state.apiTokenInstance = null
            state.error = undefined
        })
        builder.addCase(logout.rejected, state => {
            state.isLoading=false
            state.instanceId = null
            state.apiTokenInstance = null
        })
    }
})