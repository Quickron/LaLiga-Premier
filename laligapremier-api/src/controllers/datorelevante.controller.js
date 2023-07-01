import DatoRelevanteModel from "../models/datorelevante.model.js";


async function crearRegistroRelevante(req, res) {
    try{
        const camisetas = req.body.camisetas;
        if (camisetas === undefined || camisetas.length < 1) {
            return res.status(400).send({ error: "No hay camisetas en el registro" })
        }
        const registroValioso = await DatoRelevanteModel.create({
            ...req.body
        })
        return res.status(201).send(registroValioso)
    }catch(err){
        return res.status(500).send({
            message: "Error en el servidor",
            error: err
        })
    }
}


async function obtenerDatosRelevantes(_, res) {
    // TODO: falta validar usuario por token 
    try{
        const datosRelevantesBD = await DatoRelevanteModel.find({}); 
        return res.status(200).send(datosRelevantesBD);
    }
    catch(err){
        res.status(500).send({
            error : err
        })
    }
}

export {
    crearRegistroRelevante,
    obtenerDatosRelevantes
}