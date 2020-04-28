import { Router } from 'express';
import * as groupUserController from '../controllers/groupUser';

export const router: Router = Router({ mergeParams: true });

router.get('/', groupUserController.index);
router.get('/:id', groupUserController.show);
router.post('/', groupUserController.create);
router.put('/:id', groupUserController.update);
router.delete('/:id', groupUserController.destroy);