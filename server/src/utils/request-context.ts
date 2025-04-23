import { Request, Response } from "express";

export interface RequestContextOptions {
  includeBody?: boolean;
  includeQuery?: boolean;
  includeParams?: boolean;
  includeHeaders?: boolean;
}

export function getRequestContext(
  req: Request,
  options: RequestContextOptions
): Record<string, any> {
  const {
    includeBody = true,
    includeQuery = true,
    includeParams = true,
    includeHeaders = false,
  } = options;

  const context = {
    method: req.method,
    url: req.url,
    ip: req.ip,
  } as Record<string, any>;

  if (includeBody) {
    context.body = req.body;
  }

  if (includeQuery) {
    context.query = req.query;
  }

  if (includeParams) {
    context.params = req.params;
  }

  if (includeHeaders) {
    context.headers = req.headers;
  }

  return context;
}
