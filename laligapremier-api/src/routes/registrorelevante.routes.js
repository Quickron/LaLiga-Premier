import { Router } from 'express';
import { crearRegistroRelevante, obtenerDatosRelevantes } from '../controllers/datorelevante.controller.js';

const router = Router();

router.post('/registrar-datos', crearRegistroRelevante);
router.get('/datos-relevantes/estaditicas', obtenerDatosRelevantes)

export default router;