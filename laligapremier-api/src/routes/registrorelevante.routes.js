import { Router } from 'express';
import { crearRegistroRelevante, obtenerDatosRelevantes } from '../controllers/datorelevante.controller.js';
import { authRequired , hasRole } from '../middlewares.js';

const router = Router();

router.post('/registrar-datos',authRequired , hasRole("administrador"), crearRegistroRelevante);
router.get('/datos-relevantes/estaditicas', authRequired , hasRole("administrador"), obtenerDatosRelevantes)

export default router;