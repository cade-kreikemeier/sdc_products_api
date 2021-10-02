import express, { Request, Response } from 'express';
import router from './routes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('SDC!');
});

app.use('/products', router);

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}!`);
});
