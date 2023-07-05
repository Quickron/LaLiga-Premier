import UsuarioModel from '../models/usuario.model.js';
import bcrypt from 'bcrypt'
import { generateToken } from '../auth/jwt.js';
async function login(req, res) {

    const usuario = await UsuarioModel.findOne({ correo: req.body.correo })
        .select('+clave')
        .exec();
    
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrados' })

    const passwordIsCorrect = await bcrypt.compare(
        req.body.clave,
        usuario.clave
    );

    if (!passwordIsCorrect) return res.status(400).json({ error: 'contraseña invalida' })
    const token = generateToken(usuario)

    return res.status(200).json({ usuario , token  })
}

async function getMe(req, res) {
  try {
		const user = await UsuarioModel.findById(req.id).exec();

		return res.status(200).json({ user });
	} catch (err) {
		return res.status(403).json(err);
	}
  }

export { login, getMe };
