import UsuarioModel from '../models/usuario.model.js';
import bcrypt from 'bcrypt';

async function registrarUsuario(req, res) {
    try {
      const nombre = req.body.nombre;
      const correo = req.body.correo;
      const rol = req.body.rol;
  
      let clave = req.body.clave;
      const claveEncriptada = bcrypt.hashSync(clave, 10);
      clave = claveEncriptada;
  
      let error = "Falta el campo ";

      const usuariosBD = await UsuarioModel.find({});
  
      if(nombre === undefined){
          error += "nombre"
          res.status(400).send({error: error});
      } else if (correo === undefined){
          error += "correo"
          res.status(400).send({error: error});
      } else if (correoRepetido(correo, usuariosBD)) {
          error = "Correo ya registrado, intente con otro."
          res.status(400).send({error: error});
      } else if (clave === undefined) {
          error += "clave"
          res.status(400).send({error: error});
      } else {

        if (rol != undefined){
            await UsuarioModel.create({nombre: nombre, correo: correo, rol: rol, clave: clave});
            res.send(true);
          } else {
            await UsuarioModel.create({nombre: nombre, correo: correo, rol: "usuario", clave: clave});
            res.send(true);
          }  

      }
    
    } catch (err) {
      res.status(500).send({error: err});
    }
}




// TODO: mover esta funcion a un package de logica como SERVICES
function correoRepetido(correo, usuarios) {
    return usuarios.some(usuario => usuario.correo === correo);
  }

export { registrarUsuario };