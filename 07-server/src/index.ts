import express from 'express';
import { router } from './routes/loginRoutes';

const app = express();

app.use(express.urlencoded());

// routers
app.use(router);

app.listen(3000, () => console.log('Server is running on port 3000'));
