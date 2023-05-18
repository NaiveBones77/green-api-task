import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from 'redux-persist'
import {rootReducers} from "./root-reducers";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import {infoApi} from "../api/info/info.api";
import {api} from "../api/api";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE]
        }
    }).concat(api.middleware)
})


export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof store.getState>