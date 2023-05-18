import {useTypedSelector} from "./useTypedSelector";


export const useMessages = (chatId:string) => useTypedSelector(state => state.chats
    .filter(m => m.body.senderData.chatId === chatId))


export const useLastMessage = () => useTypedSelector(state => state.chats.at(-1))