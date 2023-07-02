import { Router } from 'express';
import { guardarCarrito } from '../controllers/carrito.controller.js';
import { authRequired } from '../middlewares.js';

const router = Router();

router.post('/pagar-carro',authRequired, guardarCarrito);

export default router;