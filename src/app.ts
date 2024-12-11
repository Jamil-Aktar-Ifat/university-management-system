import { Request, Response } from 'express';
import config from './app/config';

const express = require('express');
const cors = require('cors');
const { StudentRoutes } = require('./app/modules/student/student.route');
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;
  // res.json({ value: a });
  res.json({ server: `Server is running on port ${config.port}` });
};

app.get('/', getAController);
export default app;
