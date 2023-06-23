import { Router } from 'express';
import {
    crearCamiseta,
    editarCamiseta,
    listarCamiseta,
    eliminarCamiseta
} from '../controllers/camisetaController.js'

const router = Router();


router.get('/camisetas' , listarCamiseta)

router.post('/crear-camiseta' , crearCamiseta),

router.put('/editarcamiseta/:idCamiseta', editarCamiseta)

router.delete('/eliminar-camiseta/:idCamiseta' , eliminarCamiseta)