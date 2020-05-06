import { router as userRouter } from './user';
import { router as groupRouter } from './group';
import { router as groupUserRouter } from './groupUser';
import { router as loginRouter } from './login';
import { Router } from 'express';

export const router: Router = Router({ mergeParams: true });
router.use('/login', loginRouter);
router.use(userRouter);
router.use(groupRouter);
router.use('/group/:groupId/user', groupUserRouter);
