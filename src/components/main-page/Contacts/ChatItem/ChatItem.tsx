import React from 'react';
import styles from './ChatItem.module.css'
import {IContact} from "../../../../store/contacts/contacts.interface";
import {useLastMessage} from "../../../../hooks/useMessages";

interface IContactItem{
    contact: IContact
}

const ChatItem = ({contact}:IContactItem) => {

    const lastNotification = useLastMessage(contact.chatId.concat('@c.us'))
    let lastMessage:string | undefined = ''
    let formattedTime = ' '
    if (lastNotification !== undefined) {
        lastMessage = lastNotification.body.messageData.textMessageData?
            lastNotification.body.messageData.textMessageData.textMessage
            :
            lastNotification.body.messageData.extendedTextMessageData?.text
        let date = new Date(lastNotification.body.timestamp * 1000)
        let hours = date.getHours()
        let minutes = '0' +  date.getMinutes()
        formattedTime = hours + ':' + minutes.slice(-2)
    }


    return (
        <div className={styles.block}>
            <div className={styles.details}>
                <div className={styles.listHead}>
                    <h4>{contact.tel}</h4>
                    {/*<p className={styles.time}>10:44</p>*/}
                </div>
            </div>
            <div className={styles.message}>
                <p>{lastMessage}</p><span>{formattedTime}</span>
            </div>
        </div>
    );
};

export default ChatItem;