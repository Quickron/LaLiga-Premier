import { verifyToken } from './auth/jwt.js'
import UsuarioModel from './models/usuario.model.js';

export function authRequired(req, res, next) {
	const authorizationHeader = req.headers.authorization || req.headers.Authorization;

	try {
		const token = authorizationHeader.split(' ')[1];
		if (!token) throw new Error('sin token')
		const { id } = verifyToken(token)

		req.id = id
		return next();
	} catch (err) {
		return res.status(403).send({ error: 'no tienes los permisos (falta token o esta expirado)' });
	}
}

export function hasRole(role) {
	return async function (req, res, next) {
		const { rol } = await UsuarioModel.findById(req.id).exec();

		if (!rol) {
			return res.status(401).send({
				error: 'Usuario no encontrado o no tiene roles'
			});
		}

		if (rol.includes(role)) return next();

		return res.status(401).send({
			error: `Usuario no tiene el rol de ${role}`
		})

	};
}

export function hasAnyRole(roleToCheck) {
	return async function (req, res, next) {
		const { rol } = await UsuarioModel.findById(req.id).exec();
		if (roleToCheck.some((role) => rol.includes(role))) return next();

		return res.status(401).send({
			error: `Usuario no tiene ningun de los siguientes roles: [${roleToCheck.join()}]`
		})
	}
}