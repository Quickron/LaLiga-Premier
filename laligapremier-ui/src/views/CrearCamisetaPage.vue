<template>
  <div class="container py-4">
          <div class="card bg-light">
              <h4 class="card-header">Crear Camiseta</h4>
              <div class="card-body">

                  <form enctype="multipart/form-data">
                      <div class="form-group row py-2">
                          <label class="col-sm-2 col-form-label">Club / Selección</label>
                          <div class="col-sm-1">
                              <select>
                                  <option>Club</option>
                                  <option>Selección</option>
                              </select>
                          </div>
                      </div>
                      <div class="form-group row py-2">
                          <label class="col-sm-2 col-form-label">Equipo</label>
                          <div class="col-sm-6">
                              <input type="text" class="form-control" />
                          </div>
                      </div>
                      <div class="form-group row py-2">
                          <label class="col-sm-2 col-form-label">Liga</label>
                          <div class="col-sm-6">
                              <input type="text" class="form-control" />
                          </div>
                      </div>
                      <div class="form-group row py-2">
                          <label class="col-sm-2 col-form-label">Dorsal</label>
                          <div class="col-sm-6">
                              <input type="text" class="form-control" />
                          </div>
                      </div>
                      <div class="form-group row py-2">
                          <label class="col-sm-2 col-form-label">Jugador</label>
                          <div class="col-sm-6">
                              <input type="text" class="form-control" />
                          </div>
                      </div>
                      <div class="form-group row py-2">
                          <label class="col-sm-2 col-form-label">Temporada</label>
                          <div class="col-sm-6">
                              <input type="text" class="form-control" />
                          </div>
                      </div>
                      <div class="form-group row py-2">
                          <label class="col-sm-2 col-form-label">Precio</label>
                          <div class="col-sm-6">
                              <input type="text" class="form-control" />
                          </div>
                      </div>
                      <div class="form-group row py-2">
                          <label class="col-sm-2 col-form-label">Talla</label>
                          <div class="col-sm-1">
                              <select>
                                <option selected>Seleccionar Talla</option>
                                  <option>XS</option>
                                  <option>S</option>
                                  <option>M</option>
                                  <option>L</option>
                                  <option>XL</option>
                              </select>
                          </div>
                      </div>
                      <div class="form-group row py-2">
                          <div class="form-group row">
                              <label class="col-sm-2 col-form-label">Marca</label>
                              <div class="col-sm-1">
                                  <select>
                                    <option selected>Seleccionar Marca</option>
                                      <option>Adidas</option>
                                      <option>Nike</option>
                                      <option>Puma</option>
                                  </select>
                              </div>
                          </div>
                          <div class="form-group row py-2">
                              <label class="col-sm-2 col-form-label">Nombre Camiseta</label>
                              <div class="col-sm-6">
                                  <input type="text" class="form-control" />
                              </div>
                          </div>
                          <div class="form-group row py-2">
                              <label class="col-sm-2 col-form-label">Descripción</label>
                              <div class="col-sm-6">
                                  <textarea type="text" rows="3" class="form-control"></textarea>
                              </div>
                          </div>
                          <div class="form-group row py-2">
                              <label class="col-sm-2 col-form-label">Cantidad</label>
                              <div class="col-sm-6">
                                  <input type="number" class="form-control">
                              </div>
                          </div>
                          <div class="form-group row py-2">
                              <label for="file" class="col-sm-2 col-form-label">Subir Foto</label>
                              <div class="col-sm-6">
                                  <input type="file" name="file" class="form-control"/>
                              </div>
                          </div>
                          <div class="form-group row py-2">
                              <label class="col-sm-2 col-form-label">Token</label>
                              <div class="col-sm-6">
                                  <input type="text" class="form-control">
                              </div>
                              <span class="col-sm-1">ó</span>
                              <div class="col-sm-1">
                                <select>
                                      <option selected>Seleccionar Token</option>
                                      <option>mati_fernandez</option>
                                      <option>messi_che</option>
                                      <option>eltoro</option>
                                  </select>
                              </div>
                          </div>
                      <div class="form-group row">
                          <div class="mt-5 btn-publicar">
                              <input type="submit" value="Publicar" class="btn btn-dark" />
                              <tr></tr>
                          </div>
                      </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
</template>

<script>

export default {
  name: 'CrearCamisetaPage',
}
</script>

<style>
  .casilla-camiseta {
    width: 500px;
}

.formato-datos-camiseta {
    margin: 60px;
    padding: 5%;
    display: flex;
    justify-content: center;
    border-radius: 15px;
}

.subir-imagen{
    border-radius: 15px;
    padding: 30%;
    height: 90%;
    margin-bottom: 10%;
}

.subir-imagen img {
    width: 150px;
    height: 150px;
}

.imagen-camiseta {
    margin-right: 50px;
    width: 50%;
}

.formulario-camiseta {
    margin-left: 50px;
}

.btn-publicar{
    display: flex;
    justify-content: start;
    margin-left: 3%;
}
</style>
