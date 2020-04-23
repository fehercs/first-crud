import { Router } from 'express';
import * as groupController from '../controllers/group';

export const router:Router = Router({ mergeParams: true });

router.get('/group', groupController.index);
router.get('/group/:id', groupController.show);
router.post('/group', groupController.create);
router.put('/group/:id', groupController.update);
router.delete('/group/:id', groupController.destroy);