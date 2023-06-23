import CamisetaModel from "../models/camisetaModel.js";

async function crearCamiseta(req, res) {
    try {
        const imagenesCamiseta = req.body.imagenes;
        const nombreCamiseta = req.body.nombre;
        const descripcionCamiseta = req.body.descripcion;
        const equipoCamiseta = req.body.equipo;
        const ligaCamiseta = req.body.liga;
        const precioCamiseta = req.body.precio;
        const temporadaCamiseta = req.body.temporada;
        const tipoCamiseta = req.body.tipo;
        const marcaCamiseta = req.body.marca; 
        const itemsCamisetaCam = req.body.itemsCamista; 

        if (
            imagenesCamiseta === undefined ||
            nombreCamiseta === undefined  ||
            descripcionCamiseta === undefined ||
            equipoCamiseta === undefined || 
            ligaCamiseta === undefined || 
            precioCamiseta === undefined || 
            temporadaCamiseta === undefined  ||
            tipoCamiseta === undefined  ||
            marcaCamiseta === undefined  ||
            itemsCamisetaCam === undefined 
        ) {
            res.status(400).send('Faltan parámetros para crear la camiseta');
            return;
        }else{
            const camisetaCreada = await CamisetaModel.create({ ...req.body });
            res.status(201).send(camisetaCreada);

        }

    } catch (err) {
        res.status(500).send(err);
        return;
    }
}

async function editarCamiseta(req, res) {
    try {
        //completar
    } catch (err) {
        //completar
    }
}

async function listarCamiseta(req, res) {
    try {
        //completar
    } catch (err) {
        //completar
    }
}

async function eliminarCamiseta(req, res) {
    try {
        //completar
    } catch (err) {
        //completar
    }
}


export {
    crearCamiseta,
    editarCamiseta,
    listarCamiseta,
    eliminarCamiseta
}