import axios from "axios";
import { ApiError } from "../core/api-error";
import dotenv from "dotenv";
import path from "path";

const url = process.env.DEV_SERVER_URL? process.env.DEV_SERVER_URL : process.env.SERVER_URL;
const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const apiError = ApiError.handle(error);
        return Promise.reject(apiError);
    }
);

export default api;
