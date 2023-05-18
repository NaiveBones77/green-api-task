import {createAsyncThunk} from "@reduxjs/toolkit";
import {IAuthData} from "../../services/auth/auth.helper";
import {TypeInputs} from "../../components/LoginPage/LoginPage.interface";
import {AuthService} from "../../services/auth/auth.service";


export const login = createAsyncThunk<IAuthData, TypeInputs>(
    'auth/login',
    async ({instanceId, apiTokenInstance}, thunkAPI) => {
        try {
            const response = await AuthService.login(instanceId, apiTokenInstance)
            return {...response, apiTokenInstance, instanceId}
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const logout = createAsyncThunk(
    '/auth/logout',
    async () => {
        return {}
    }
)