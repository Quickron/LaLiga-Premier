import CarritoModel from "../models/carro.model.js";
import ItemBolsaModel from "../models/itemBolsa.model.js";

async function guardarItemBolsa(req, res) {
    try {
        const usuarioId = req.body.usuarioId;
        const camisetaId = req.body.camisetaId;
        const camisetaBolsa = req.body.camisetaBolsa;

        if (usuarioId === undefined || usuarioId.length < 1) {
            return res.status(400).send({ error: "¡ID de usuario inválido!" })
        } else if (camisetaId === undefined || camisetaId.length < 1) {
            return res.status(400).send({ error: "¡ID de camiseta inválida!" })
        } else if (camisetaBolsa === undefined || camisetaBolsa === null) {
            return res.status(400).send({ error: "¡camisetaBolsa inválida!" })
        }


        const itemBolsa = await ItemBolsaModel.create({
            ...req.body
        })
        return res.status(201).send(itemBolsa)
    } catch (err) {
        return res.statjjus(500).send({
            message: "Error en el servidor",
            error: err
        })
    }
}

async function listarItemsBolsaPorUsuario(req, res) {
    try {
        const usuarioId = req.params.usuarioId;
        const itemsBD = await ItemBolsaModel.find({usuarioId: usuarioId});
        res.status(200).send(itemsBD);
    } catch (err) {
        res.status(500).send({ error: err });
    }
}

async function eliminarItemBolsa(req, res) {
    try {
        let itemBolsaId = req.params.itemBolsaId;

        if (itemBolsaId === undefined) {
            res.status(400).send({ error: "Falta el parámetro itemBolsaId" });
        } else {
            let itemBolsa = null;

            itemBolsa = await ItemBolsaModel.findById(itemBolsaId);

            if (itemBolsa === null) {
                res.status(404).send({ error: "No se ha encontrado el itemBolsa en la base de datos!" });
            } else {
                await ItemBolsaModel.deleteOne(itemBolsa);
                res.status(204).send({ textoRespuesta: "ItemBolsa eliminado correctamente." });
            }

        }
    } catch (err) {
        res.status(500).send({ error: err });
    }
}

async function guardarCarrito(req, res) {
    try {
        // TODO: falta validar usuario por token
        // TODO: REALIZAR CAMBIOS HABLADOS PARA QUE FUNCIONE EL CARRITO. 
        const camisetas = req.body.camisetas;
        const usuarioId = req.body.usuario;

        if (camisetas === undefined || camisetas.length < 1) {
            return res.status(400).send({ error: "No hay camisetas en el carrito" });
        } else if (usuarioId === undefined || usuarioId.length < 1) {
            return res.status(400).send({ error: "No hay un usuario en el carrito" });
        }

        const carritoPagado = await CarritoModel.create({
            ...req.body
        })
        return res.status(201).send(carritoPagado)
    } catch (err) {
        return res.status(500).send({
            message: "Error en el servidor",
            error: err
        })
    }
}
export {
    guardarItemBolsa,
    listarItemsBolsaPorUsuario,
    eliminarItemBolsa,
    guardarCarrito,
}