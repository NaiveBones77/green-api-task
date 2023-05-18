import {api} from "../api";


export interface IUserRequest {
    instanceId: string,
    apiTokenInstance: string
}

export interface IUserResponse {
    stateInstance: string
}

export const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.query<IUserResponse, IUserRequest>({
            query: (credentials) => ({
                url: `/waInstance${credentials.instanceId}/getStateInstance/${credentials.apiTokenInstance}`,
                method: 'GET',
            })
        }),
    }),
})

export const {useLoginQuery} = authApi