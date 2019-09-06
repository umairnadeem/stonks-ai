import express, { Application } from 'express';
import path from 'path';
import router from './routes';

const app: Application = express();
const API_PRE: string = 'api/v1';
const PORT: number = parseInt(<string>process.env.PORT, 10) || 3000;

app.use(express.static(path.resolve(__dirname, '../../dist/public')));
app.use(API_PRE, router);

app.listen(PORT, () => console.info(`Listening on ${PORT}`));