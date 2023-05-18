import axios from "axios";

const API_URL = process.env["BASE_URL"]
const BASE_URL = 'https://api.green-api.com'

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})