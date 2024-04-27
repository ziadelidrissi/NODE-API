import { Router } from 'express';
import { productController } from '../controllers/productController.js';

const router = Router();

router.get('/products', productController.index);

router.get('/products/:id', productController.show);

// POST = add data
router.post('/product', productController.store)

// PUT (or PATCH) = update data
router.put('/products/:id', productController.update)

// DELETE = delete data
router.delete('/products/:id', productController.destroy)

export { router };