import express, { Request, Response, NextFunction } from 'express';

const app = express();

// Enable CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'API working!' });
});

app.get('/api', (req: Request, res: Response) => {
  res.json({ status: 'API working!' });
});

app.get('/api/test', (req: Request, res: Response) => {
  res.json({ status: 'API working!' });
});

export default app;
