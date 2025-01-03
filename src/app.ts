import { NextFunction, Request, Response } from 'express';
import config from './app/config';
import globalErrorHandlers from './app/middlewares/globalErrorHanlders';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const express = require('express');
const cors = require('cors');
const { StudentRoutes } = require('./app/modules/student/student.route');
const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  const a = 10;
  res.json({ server: `Server is running on port ${config.port}` });
};

app.get('/', test);

// global error handler
app.use(globalErrorHandlers);

// not found handler
app.use(notFound);

export default app;
