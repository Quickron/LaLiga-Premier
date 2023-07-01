import mongoose from 'mongoose';

const carritoSchema = new mongoose.Schema(
    {
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'usuarios'
        },
        camisetas: {
            type : [],
            required : true
        },
        fecha : {
            type : Date,
            default: Date.now
        }
    }
);

const CarritoModel = mongoose.model('Carrito', carritoSchema, 'carritos');

export default CarritoModel;