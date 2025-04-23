import { Response } from "express";
import { ErrorType } from "./types/errors";
import logger from "../config/logger";
import { InternalErrorResponse, NotFoundResponse, BadRequestResponse } from "./responses";

export class ApiError extends Error {
  constructor(
    public message: string = "error",
    public context: Record<string, any> = {},
    public type: ErrorType,
  ) {
    super(message);
  }

  public static handle(error: ApiError, res: Response) {
    logger.error(error.message, {
        ...error.context,
        stack: error.stack,
    });

    switch(error.type) {
        case ErrorType.INTERNAL:
            return new InternalErrorResponse(error.message, error.context).send(res)
        case ErrorType.NOT_FOUND:
            return new NotFoundResponse(error.message, error.context).send(res)
        case ErrorType.BAD_REQUEST:
            return new BadRequestResponse(error.message, error.context).send(res)
    }
  }
}

export class NotFoundError extends ApiError {
  constructor(message = "Not found", context = {}) {
    super(message, context, ErrorType.NOT_FOUND);
  }
}

export class InternalError extends ApiError {
  constructor(message = "Internal Server Error", context = {}) {
    super(message, context, ErrorType.INTERNAL);
  }
}

export class BadRequestError extends ApiError {
  constructor(message = "Bad Request", context = {}) {
    super(message, context, ErrorType.BAD_REQUEST);
  }
}
