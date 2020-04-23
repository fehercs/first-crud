import { router as userRouter } from './user';
import { router as groupRouter } from './group';
import { Router } from 'express';

export const router: Router = Router({ mergeParams: true });
router.use(userRouter);
router.use(groupRouter);
