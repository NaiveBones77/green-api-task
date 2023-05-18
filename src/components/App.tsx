import React from 'react';
import styles from './App.module.css'
import {LoginPage} from "./LoginPage/LoginPage";
import {Provider} from "react-redux";
import {persistor, store} from "../store/store";
import {PersistGate} from 'redux-persist/integration/react';
import Main from "./main-page/Main";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Chat from "./main-page/Chat/Chat";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <BrowserRouter>
                    <Routes>
                        <Route path='*' element={<Navigate to={'/messages'} replace={true}/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/messages/*' element={<Main/>}>
                            <Route path=':chatId' element={<Main/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
