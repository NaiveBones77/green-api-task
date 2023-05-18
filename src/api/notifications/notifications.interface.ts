

interface IOutGoingApiMessage {
    receiptId: number
    body: {
        typeWebhook: string,
        instanceData: {
            idInstance: number,
            wid: string,
            typeInstance: string
        }
        timestamp: number,
        idMessage: string,
        senderData: {
            chatId: string,
            sender: string,
            chatName: string,
            senderName: string
        }
    }
}

interface IOutGoingApiMessageExtended extends IOutGoingApiMessage{
    messageData: {
        typeMessage: string,
        extendedTextMessageData: {
            text: string,
            description: string,
            title: string,
            previewType: string,
            jpegThumbnail: string
        }
    }
}

interface IOutGoingApiMessageDefault extends IOutGoingApiMessage{
    messageData: {
        typeMessage: string,
        textMessageData: {
            textMessage: string
        }
    }
}


export interface IResponseNotification {
    receiptId: number
    body: {
        typeWebhook: string,
        instanceData: {
            idInstance: number,
            wid: string,
            typeInstance: string
        }
        timestamp: number,
        idMessage: string,
        senderData: {
            chatId: string,
            sender: string,
            chatName: string,
            senderName: string
        }
        messageData: {
            typeMessage: string,
            textMessageData?: {
                textMessage: string
            }
            extendedTextMessageData?: {
                text: string,
                description: string,
                title: string,
                previewType: string,
                jpegThumbnail: string
            }
        }
    }
}

// export type IResponseNotification = IOutGoingApiMessageExtended & IOutGoingApiMessageDefault
export interface IMessage {
    chatId: string
    message: string
}

export type TypeResponseNotification = IResponseNotification
