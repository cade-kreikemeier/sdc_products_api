import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.get('/', controller.getProducts);

router.get('/:id(\\d+$)', controller.getProductById);

router.get('/:id(\\d+)/styles', controller.getProductStyles);

export default router;
