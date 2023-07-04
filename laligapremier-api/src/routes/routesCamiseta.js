import { Router } from 'express';
import {
    crearCamiseta,
    editarCamiseta,
    listarCamiseta,
    eliminarCamiseta
} from '../controllers/camisetaController.js'
import { authRequired, hasRole } from '../middlewares.js';

const router = Router();


router.get('/camisetas' , listarCamiseta)

router.post('/crear-camiseta' , authRequired , hasRole("administrador") ,crearCamiseta),

router.put('/editarcamiseta/:idCamiseta', editarCamiseta)

router.delete('/eliminar-camiseta/:idCamiseta' , eliminarCamiseta)
export default router;