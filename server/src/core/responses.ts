import { Response } from "express";
import { StatusCodes } from "./types/status-codes";
import logger from "../config/logger"

export class ApiResponse {
    status: StatusCodes
    message: string
    data: any

    constructor(
        status: StatusCodes,
        message: string,
        data: any,
    ) {
        this.status = status
        this.message = message
        this.data = data
    }

    public send(res: Response): Response {
        if(this.status == StatusCodes.OK) {
            logger.info(this.message, this.data)
        }
        return res.status(this.status).send(this.data)
    }
}

export class SuccessResponse extends ApiResponse {
    constructor(message: string, data: any){
        super(StatusCodes.OK, message, data)
    }
}

export class ResourceCreatedResponse extends ApiResponse {
    constructor(message: string, data: any){
        super(StatusCodes.CREATED, message, data)
    }
}

export class NotFoundResponse extends ApiResponse {
    constructor(message: string, data: any){
        super(StatusCodes.NOT_FOUND, message, data)
    }
}

export class InternalErrorResponse extends ApiResponse {
    constructor(message: string, data: any) {
        super(StatusCodes.INTERNAL_SERVER_ERROR, message, data)
    }
}

export class BadRequestResponse extends ApiResponse {
    constructor(message: string, data: any) {
        super(StatusCodes.BAD_REQUEST, message, data)
    }
}