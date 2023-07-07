import { Router } from 'express';
import {
    crearCamiseta,
    editarCamiseta,
    listarCamiseta,
    eliminarCamiseta,
    obtenerCamisetaPorId,
    obtenerTallasCamiseta,
    obtenerStockCamiseta,
    listarNovedades,
    filtro
} from '../controllers/camisetaController.js'
import { authRequired, hasRole } from '../middlewares.js';

const router = Router();


router.get('/camisetas/filtro' , filtro)


router.get('/camisetas' , listarCamiseta)


router.post('/crear-camiseta' , authRequired , hasRole("administrador") ,crearCamiseta),

router.put('/editarcamiseta/:idCamiseta', authRequired , hasRole("administrador"), editarCamiseta)

router.delete('/eliminar-camiseta/:idCamiseta' , authRequired , hasRole("administrador"), eliminarCamiseta)

router.get('/obtener-camiseta/:idCamiseta' , obtenerCamisetaPorId)

router.get('/obtener-tallas/:idCamiseta' , obtenerTallasCamiseta)

router.post('/obtener-stock/:idCamiseta' , obtenerStockCamiseta)

router.get('/novedades' , listarNovedades)

export default router;