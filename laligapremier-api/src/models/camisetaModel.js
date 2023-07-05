import mongoose from 'mongoose'

const camisetaSchema = new mongoose.Schema(
    {
        imagenes: {
            type: Array,
            require: true
        },
        nombre: {
            type: String,
            require: true
        },
        descripcion: {
            type: String,
            require: true
        },
        equipo: {
            type: String,
            require: true
        },
        liga: {
            type: String,
            require: true
        },
        precio: {
            type: Number,
            require: true
        },
        temporada: {
            type: String,
            require: true
        },
        tipo: {
            type: String,
            require: true
        },
        marca: {
            type: String,
            require: true
        },
        dorsal: {
            type: Number,
            require: false
        },
        jugador: {
            type: String,
            require: false
        },
        epoca: {
            type: String,
            require: true
        },
        itemsCamiseta: {
            type: Array,
            require: true
        },
        fecha : {
            type : Date,
            default: Date.now
        }
    }
)
const CamisetaModel = mongoose.model('laligapremier', camisetaSchema , 'camisetas' )

export default CamisetaModel; 