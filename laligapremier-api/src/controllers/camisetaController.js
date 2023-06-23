import CamisetaModel from "../models/camisetaModel.js";

async function crearCamiseta(req, res) {
  try {
    //completar
  } catch (err) {
    //completar
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
    const camisetasBD = await CamisetaModel.find({});
    res.status(200).send(camisetasBD);
  } catch (err) {
      res.status(500).send({ error: err });
  }
}

async function eliminarCamiseta(req, res) {
  try {
    let idCamiseta = req.params.idCamiseta;

    if (idCamiseta === undefined) {
      res.status(400).send({ error: "Falta el parámetro idCamiseta" });
    } else {
      let camiseta = null;

      camiseta = await CamisetaModel.findById(idCamiseta);

      if (camiseta === null) {
         res.status(404).send({ error: "No se ha encontrado la camiseta en la base de datos!" });
      } else {
         await CamisetaModel.deleteOne(camiseta);
         res.status(204).send("Camiseta eliminada correctamente.");
      }
      
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
}

export { crearCamiseta, editarCamiseta, listarCamiseta, eliminarCamiseta };
