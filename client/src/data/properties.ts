import api from "../config/api";
import { ApiError } from "../core/api-error";
import { ErrorType } from "../core/types/errors";

export const getProperties = async () => {
    try {
        const response = await api.get("/listings/all");
        return response.data;
    } catch (error) {
        if (error instanceof ApiError) {
            switch (error.type) {
                case ErrorType.NOT_FOUND:
                    console.error("Properties not found:", error.message);
                    break;
                case ErrorType.NETWORK:
                    console.error("Network error:", error.message);
                    break;
                case ErrorType.BAD_REQUEST:
                    console.error("Bad request:", error.message);
                    break;
                default:
                    console.error("Error fetching properties:", error.message);
            }
        }
        throw error;
    }
};

export const getPropertyDetails = async (id: string) => {
    try {
        const response = await api.get(`/listings/${id}`);
        return response.data;
    } catch (error) {
        if (error instanceof ApiError) {
            switch (error.type) {
                case ErrorType.NOT_FOUND:
                    console.error(`Property ${id} not found:`, error.message);
                    break;
                case ErrorType.NETWORK:
                    console.error("Network error:", error.message);
                    break;
                case ErrorType.BAD_REQUEST:
                    console.error("Bad request:", error.message);
                    break;
                default:
                    console.error("Error fetching property details:", error.message);
            }
        }
        throw error;
    }
};
