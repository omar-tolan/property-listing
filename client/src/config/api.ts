import axios from "axios";
import { ApiError } from "../core/api-error";
import dotenv from "dotenv";
import path from "path";

const devEnvPath = path.resolve(__dirname, "..", "dev.env");
// if(!process.env.SERVER_URL) dotenv.config({ path: path.join(__dirname, "../../../docker.env") })
const url = process.env.SERVER_URL;
console.log(url)
const api = axios.create({
    baseURL: process.env.SERVER_URL,
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
