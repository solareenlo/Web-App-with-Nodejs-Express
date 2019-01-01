import { Response, Request, NextFunction } from 'express';

export const router = require('express').Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  console.log((new Date()).toISOString());
  next();
});

router.get('/', (req: Request, res: Response) => {
  res.send('/');
});

router.get('/about', (req: Request, res: Response) => {
  res.send('/about');
});
