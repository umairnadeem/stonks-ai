import express, { Application } from 'express';
import path from 'path';
import router from './routes';

const app: Application = express();
const PORT: number = parseInt(<string>process.env.PORT, 10) || 3000;

app.use(express.static(path.resolve(__dirname, '/dist/public')));
app.use(router);

app.listen(PORT, () => console.info(`Listening on ${PORT}`));