import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

const middlewareArmy = (req: Request, res: Response, next: NextFunction) => {
  console.log('This is Army!');
  next();
};

router.post('/create-student', middlewareArmy, UserControllers.createStudent);

export const UserRoutes = router;
