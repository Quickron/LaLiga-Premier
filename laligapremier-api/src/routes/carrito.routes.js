import { Router } from 'express';
import { 
    guardarCarrito, 
    guardarItemBolsa, 
    listarItemsBolsaPorUsuario,
    eliminarItemBolsa,
    listarPedidos,
    calcularGanancias,
 } from '../controllers/carrito.controller.js';
import { authRequired, hasRole } from '../middlewares.js';

const router = Router();

router.post('/pagar-carro', authRequired, guardarCarrito);

router.post('/guardar-item', authRequired, guardarItemBolsa);

router.get('/items-bolsa/:usuarioId', authRequired, listarItemsBolsaPorUsuario);

router.delete('/eliminar-item-bolsa/:itemBolsaId', authRequired, eliminarItemBolsa);

router.get('/pedidos', authRequired, hasRole("administrador"), listarPedidos);

router.get('/ganancias', authRequired, hasRole("administrador"), calcularGanancias);

export default router;