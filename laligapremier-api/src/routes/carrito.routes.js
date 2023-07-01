import { Router } from 'express';
import { guardarCarrito } from '../controllers/carrito.controller.js';


const router = Router();

router.post('/pagar-carro', guardarCarrito);

export default router;