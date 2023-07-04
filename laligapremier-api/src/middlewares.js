import {verifyToken} from './auth/jwt.js'

export function authRequired(req, res, next ){
    const authorizationHeader = req.headers.authorization || req.headers.Authorization;

    try{
        const token = authorizationHeader.split(' ')[1];
        if(!token) throw new Error('sin token')
        const {id} = verifyToken(token)

        req.id = id
        return next();
    }catch(err){
        return res.status(403).send({error : 'no tienes los permisos (falta token o esta expirado)'});
    }
}

export function hasRole(role) {
	return async function (req, res, next) {
		const { roles } = await UsuarioModel.findById(req.id).exec();
		if (roles.includes(role)) return next();

		return res.status(401).send({
			error: `Usuario no tiene el rol de ${role}`
		})

	};
}

export function hasAnyRole(roleToCheck){
	return async function(req , res , next){
		const {roles} = await UsuarioModel.findById(req.id).exec();
		if(roleToCheck.some((role) => roles.includes(role))) return next();

		return res.status(401).send({
			error : `Usuario no tiene ningun de los siguientes roles: [${roleToCheck.join()}]`
		})
	}
}