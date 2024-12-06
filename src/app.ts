import { Request, Response } from 'express';

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
  res.json({ value: a });
};

app.get('/', getAController);
export default app;
