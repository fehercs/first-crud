import { Router } from 'express';
import * as userController from '../controllers/user';

export const router:Router = Router({ mergeParams: true });

router.get('/user', userController.index);
router.get('/user/:id', userController.show);
router.post('/user', userController.create);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.destroy);