import { Router } from 'express';
import { 
    guardarCarrito, 
    guardarItemBolsa, 
    listarItemsBolsaPorUsuario,
    eliminarItemBolsa,
 } from '../controllers/carrito.controller.js';
import { authRequired } from '../middlewares.js';

const router = Router();

router.post('/pagar-carro', authRequired, guardarCarrito);

router.post('/guardar-item', authRequired, guardarItemBolsa);

router.get('/items-bolsa/:usuarioId', authRequired, listarItemsBolsaPorUsuario);

router.delete('/eliminar-item-bolsa/:itemBolsaId', authRequired, eliminarItemBolsa);

export default router;