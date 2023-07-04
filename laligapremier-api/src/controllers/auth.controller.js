import UsuarioModel from '../models/usuario.model.js';
import bcrypt from 'bcrypt'
import { generateToken } from '../auth/jwt.js';
export async function login(req, res) {

    console.log(req.body.correo);
    const usuario = await UsuarioModel.findOne({ correo: req.body.correo })
        .select('+clave')
        .exec();

    console.log(usuario);
    
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrados' })

    const passwordIsCorrect = await bcrypt.compare(
        req.body.clave,
        usuario.clave
    );

    if (!passwordIsCorrect) return res.status(400).json({ error: 'contraseña invalida' })
    const token = generateToken(usuario)

    return res.status(200).json({usuario , token  })
}
