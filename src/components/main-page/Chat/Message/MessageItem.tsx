import React from 'react';
import styles from './MessageItem.module.css'
import {IResponseNotification} from "../../../../api/notifications/notifications.interface";

interface IResponseNotificationItem {
    message: IResponseNotification
}

const MessageItem = ({message}:IResponseNotificationItem) => {

    const date = new Date(message.body.timestamp* 1000)
    const hours = date.getHours()
    const minutes = '0' +  date.getMinutes()
    const formattedTime = hours + ':' + minutes.slice(-2)


    return (
        <div key={message.receiptId} className={`${styles.message} ${
            message.body.typeWebhook === 'outgoingAPIMessageReceived'? styles.my_message : styles.frw_message
        }`}>
            {message.body.messageData.textMessageData?
                <p>{message.body.messageData.textMessageData.textMessage}<br/><span>{formattedTime}</span></p>
                :
            message.body.messageData.extendedTextMessageData?
                <p>{message.body.messageData.extendedTextMessageData.text}<br/><span>{formattedTime}</span></p>
                : null}
        </div>
    );
};

export default MessageItem;