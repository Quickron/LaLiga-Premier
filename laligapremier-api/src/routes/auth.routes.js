import { Router } from 'express';
import { registrarUsuario } from '../controllers/usuario.controller.js';

const router = Router();

router.post('/register', registrarUsuario);

export default router;