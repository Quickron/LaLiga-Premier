import mongoose from 'mongoose';

const datoRelevanteSchema = new mongoose.Schema(
    {
        camisetas: {
            type: Array,
            required: true,
            ref: 'usuarios'
        },
        categoria: {
            type : String,
            required : true
        },
        descripcion: {
            type : String,
            required : true
        },
        fecha : {
            type : Date,
            default: Date.now
        }
    }
);

const DatoRelevanteModel = mongoose.model('DatoRelevante', datoRelevanteSchema, 'datos-relevantes');

export default DatoRelevanteModel;