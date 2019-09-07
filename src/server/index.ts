import express, { Application } from 'express';
import path from 'path';
import routes from './routes';

const app: Application = express();
const API_PRE: string = 'api/v1';
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.use(express.static(path.resolve(__dirname, '../../dist/public')));
app.use(API_PRE, routes);

app.listen(PORT, () => console.info(`Listening on ${PORT}`));
