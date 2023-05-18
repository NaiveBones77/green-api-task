import {api} from "../api";
import {TypeRootState} from "../../store/store";
import {axiosInstance} from "../axios/axios";
import {IMessage, TypeResponseNotification} from "../notifications/notifications.interface";



export const infoApi = api.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<TypeResponseNotification, any>({
            queryFn: async (arg, api, extraOptions, baseQuery) => {
                const {instanceId,apiTokenInstance} = (api.getState() as TypeRootState).auth
                const response = await axiosInstance.get(`waInstance${instanceId}/ReceiveNotification/${apiTokenInstance}`)
                if (response.data !==null) {
                    const idToDelete = response.data.receiptId
                    const deleteNotification = await axiosInstance.delete(
                        `waInstance${instanceId}/DeleteNotification/${apiTokenInstance}/${idToDelete}`)
                }
                return response
            }
        }),
        sendMessage: build.mutation<any, IMessage>({
            queryFn: async (arg, api, extraOptions, baseQuery) => {
                const {instanceId,apiTokenInstance} = (api.getState() as TypeRootState).auth
                const response = await axiosInstance.post(`waInstance${instanceId}/SendMessage/${apiTokenInstance}`,
                    arg, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                return response
            }
        })
    }),
})

export const {useGetNotificationsQuery,useSendMessageMutation} = infoApi