import { Router} from 'express';
import * as PostsController from '../../../controllers/posts.controller';

const router = Router();

router.post('/', PostsController.createOne);
router.get('/:id', PostsController.findOne);
router.get('/', PostsController.findMany);
router.patch('/:id', PostsController.updateOne);
router.delete('/:id', PostsController.deleteOne);

export default router;