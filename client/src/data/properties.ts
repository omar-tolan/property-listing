import api from "../config/api";
import { ApiError } from "../core/api-error";
import { ErrorType } from "../core/types/errors";
import { Params } from "@/app/home/page";

type Query = {
    title?: string,
    type?: string[],
    minPrice?: number,
    maxPrice?: number,
    sortBy?: string,
    sortDir?: string,
    page?: number,
    limit?: number,
}

export const getProperties = async (params: Params) => {
    try {
        console.log(params);
        const query: Query = {}
        if(params.searchString) query["title"] = params.searchString;
        if(params.type) query["type"] = params.type;
        if(params.minPrice) query["minPrice"] = params.minPrice;
        if(params.maxPrice) query["maxPrice"] = params.maxPrice;
        if(params.location) {
            query["sortBy"] = "location";
            query["sortDir"] = params.location;
        };
        if(params.recent) {
            query["sortBy"] = "createdAt";
            query["sortDir"] = params.recent;
        }
        if(params.price) {
            query["sortBy"] = "price";
            query["sortDir"] = params.price;
        }
        const response = await api.get("/listings/all", {params: query});
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
