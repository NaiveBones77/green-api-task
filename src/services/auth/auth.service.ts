import {axiosInstance} from "../../api/axios/axios";
import {IAuthData} from "./auth.helper";

export const AuthService = {
    async login(instanceId:string, apiTokenInstance: string) {
        const response = await axiosInstance.get<IAuthData>(
            `/waInstance${instanceId}/getStateInstance/${apiTokenInstance}`)
        return response.data
    }

}