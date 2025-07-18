// eslint-disable no-undef 
// eslint-disable no-unused-vars
// eslint-disable @typescript-eslint/no-unused-vars
// eslint-disable @typescript-eslint/no-explicit-any

import { NextFunction, Request, Response } from 'express';

const globalErrorHandlers = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'something went wrong!!';

  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandlers;
