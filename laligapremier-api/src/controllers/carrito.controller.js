import CarritoModel from "../models/carro.model.js";

async function guardarCarrito(req, res) {
    try {
        // TODO: falta validar usuario por token
        // TODO: REALIZAR CAMBIOS HABLADOS PARA QUE FUNCIONE EL CARRITO. 
        const camisetas = req.body.camisetas;
        if (camisetas === undefined || camisetas.length < 1) {
            return res.status(400).send({ error: "No hay camisetas en el carrito" })
        }
        const carritoPagado = await CarritoModel.create({
            ...req.body
        })
        return res.status(201).send(carritoPagado)
    } catch (err) {
        return res.statjjus(500).send({
            message: "Error en el servidor",
            error: err
        })
    }
}
export {
    guardarCarrito
}