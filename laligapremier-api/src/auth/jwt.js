import jsonwebtoken from "jsonwebtoken";
import environments from "../configs/environments.js";

const SECRET = environments.SECRET_KEY

export function generateToken(user) {

	const { _id, correo } = user;
	return jsonwebtoken.sign({ id: _id, correo }, SECRET, {
		expiresIn: "30m",
	})
}

export function verifyToken(token) {
	return jsonwebtoken.verify(token, SECRET);
}
