import { createProductSchema, formatZodError } from "@lib/common";
import { HttpException } from "../helpers/http-exception";

export function createProductPipe(req, res, next) {
  const data = req.body;
  const result = createProductSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}

export function updateProductPipe(req, res, next) {
    const data = req.body;
    const result = createProductSchema.safeParse(data);
    if (!result.success) {
      throw new HttpException(formatZodError(result.error), 400);
    }
    req.body = result.data;
    next();
  }