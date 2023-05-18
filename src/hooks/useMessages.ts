import {useTypedSelector} from "./useTypedSelector";


export const useMessages = (chatId:string) => useTypedSelector(state => state.chats
    .filter(m => m.body.senderData.chatId === chatId))


export const useLastMessage = (chatId:string) => useTypedSelector(state => {
    let filteredMessages = state.chats.filter(m => m.body.senderData.chatId === chatId)
    filteredMessages.reverse()
    return filteredMessages[0]
})