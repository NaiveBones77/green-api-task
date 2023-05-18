import React from 'react';
import styles from './ChatList.module.css'
import AddNewContact from "./AddNewContact/AddNewContact";
import ChatItem from "./ChatItem/ChatItem";
import {useChats} from "../../../hooks/useChats";
import { NavLink} from "react-router-dom";

const ChatList = () => {

    const contacts = useChats()

    return (
        <div className={styles.chatList}>
            <AddNewContact/>
            {contacts.map(c => (<NavLink
                className={styles.linkNone}
                to={`/messages/${c.chatId}`}
            >
                <ChatItem key={c.chatId} contact = {c}/>
            </NavLink>))}
        </div>
    );
};

export default ChatList;