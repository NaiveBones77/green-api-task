import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BASE_URL = 'https://api.green-api.com/'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        headers: {
            "Content-Type": "application/json"
        }
    }),
    endpoints: () => ({})
})

export const {reducerPath, reducer} = api