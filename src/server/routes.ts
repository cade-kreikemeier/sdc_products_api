import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.get('/', controller.getProducts);

router.get('/:id(\\d+$)', controller.getProductById);

router.get('/:id(\\d+)/styles', controller.getProductStyles);

router.get('/:id(\\d+)/related', controller.getRelatedProducts);

export default router;
