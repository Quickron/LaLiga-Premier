import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
    rol: {
      type: String,
    },
    clave: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UsuarioModel = mongoose.model('Usuario', usuarioSchema, 'usuarios');

export default UsuarioModel;