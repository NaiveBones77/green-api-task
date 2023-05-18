import React, {useEffect, useState} from 'react';
import styles from './Chat.module.css'
import {useLocation} from "react-router-dom";
import {useSendMessageMutation} from "../../../api/info/info.api";
import {useForm} from "react-hook-form";
import {IMessage, IResponseNotification} from "../../../api/notifications/notifications.interface";
import {useMessages} from "../../../hooks/useMessages";
import MessageItem from "./Message/MessageItem";

interface Itel {
    tel: string
}

const Chat = ({tel}:Itel) => {

    const location = useLocation().pathname.split('/').pop()
    // @ts-ignore
    const ifTelNumber = (/^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/).test(location)

    const [createMessage] = useSendMessageMutation()

    const [message, setMessage] = useState<IMessage>({chatId: tel, message: ''})

    const messages = useMessages(tel.concat('@c.us'))


    const {register, handleSubmit, watch, formState: {errors}} = useForm()



    const onSendClicked = (data:any) => {
        if (location !==undefined){
            const newMessage = {chatId: location.concat('@c.us'), message: data.message}
            setMessage({message:'', chatId: location})
            createMessage(newMessage)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage((prev) => ({...prev, message:e.target.value}))
    }

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.headerContact}>
                    {'+'.concat(tel)}
                </div>
            </div>
            <div className={styles.messagesBox}>
                {messages.map(m => (<MessageItem message = {m}/>))}
            </div>
            <div className={styles.chatBoxInput}>
                <form onSubmit={handleSubmit(onSendClicked)}>
                    <input
                        placeholder={'Введите сообщение'}
                        {...register('message', {required: true})}
                        value={message.message}
                        onChange={handleInputChange}
                    />
                    <button type={'submit'}>Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;