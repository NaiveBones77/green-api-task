import React from 'react';
import styles from './Main.module.css'
import ChatList from "./Contacts/ChatList";
import {useAuth} from "../../hooks/useAuth";
import {Navigate, useLocation} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useGetNotificationsQuery} from "../../api/info/info.api";
import Chat from "./Chat/Chat";

export const Main = () => {

    const {instanceId} = useAuth()
    const {logout, addMessageToChat} = useActions()
    const {data} = useGetNotificationsQuery(null, {
        pollingInterval: 5000,
        refetchOnMountOrArgChange: true
    })

    let telNumber = useLocation().pathname.split('/').pop()
    if (telNumber === undefined) {
        telNumber = ''
    }
    const ifTelNumber = (/^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/).test(telNumber)


    if ( data !== undefined && data != null) {
        addMessageToChat(data)
    }

    if (instanceId === null)
    {
        return <Navigate to={'/login'}/>
    }


    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.header}>
                    Id: {instanceId}
                    <button onClick={() => logout()} type={'button'}>Выход</button>
                </div>
                <ChatList/>
            </div>
            <div className={styles.rightSide}>
                {ifTelNumber? <Chat tel = {telNumber}/> : null}
            </div>
        </div>
    );
}

export default Main;