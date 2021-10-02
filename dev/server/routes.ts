import { Router } from 'express';
import { getProductById, getProducts } from './controller';

const router = Router();

router.get('/', getProducts);

router.get('/:id(\\d+$)', getProductById);

export default router;
