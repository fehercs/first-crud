import * as express from 'express';
import { Application } from 'express';
import { router as userRouter } from './app/routers/user';
import { router as groupRouter } from './app/routers/group';

const app: Application = express();
app.use(express.json());
const { PORT = 3000 } = process.env;

app.use(userRouter);
app.use(groupRouter);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});