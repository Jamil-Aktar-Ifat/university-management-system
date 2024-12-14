import { Request, Response } from 'express';
import config from './app/config';
import { UserRoutes } from './app/modules/user/user.route';

const express = require('express');
const cors = require('cors');
const { StudentRoutes } = require('./app/modules/student/student.route');
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
// app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  // res.json({ value: a });
  res.json({ server: `Server is running on port ${config.port}` });
};

app.get('/', getAController);
export default app;
