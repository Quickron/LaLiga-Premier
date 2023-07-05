import { Router } from 'express';
import { registrarUsuario } from '../controllers/usuario.controller.js';
import { login, getMe } from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares.js';
const router = Router();

router.post('/register', registrarUsuario);

router.post('/login' , login )

router.get('/getMe' , authRequired, getMe )

export default router;