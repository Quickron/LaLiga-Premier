<template>
  <div class="contenedor-vista-camisetas">

    <!-- Filtros -->
    <div class="filtros">
      <h3><i class="bi bi-filter"></i> FILTROS</h3>

      <!-- Tallas -->
      <div class="contenedor-filtro">
        <h4>Talla</h4>

        <div class="opciones-filtro">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              XS
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckChecked">
              S
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              M
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              L
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              XL
            </label>
          </div>
        </div>
      </div>

      <!-- Marcas -->
      <div class="contenedor-filtro">
        <h4>Marca</h4>

        <div class="opciones-filtro">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Adidas
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckChecked">
              Nike
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Puma
            </label>
          </div>

        </div>
      </div>

      <!-- Precios -->
      <div class="contenedor-filtro">
        <h4>Precio</h4>

        <div class="opciones-filtro-precio">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              $20.000 - $30.000
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckChecked">
              $30.000 - $40.000
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              $40.000 - $50.000
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              $50.000 - $60.000
            </label>
          </div>
        </div>
      </div>

      <!-- Club o Selección -->
      <div class="contenedor-filtro">
        <h4>Club / Selección</h4>

        <div class="opciones-filtro-club-seleccion">
          <div class="form-check me-3">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Club
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckChecked">
              Selección
            </label>
          </div>

        </div>
      </div>

      <!-- Botones -->
      <div class="botones-filtros">
        <button class="btn btn-success me-4">Aplicar Filtros</button>
        <button class="btn btn-danger">Eliminar Filtros</button>
      </div>

    </div>

    <!-- Camisetas Novedades -->
    <div class="novedades">
      <section id="products">
        <div class="container py-3">
          <div class="row">
            <div class="offset-md-0 offset-sm-1 contenedor-camisetas">

              <div class="card tarjeta">
                <div class="iconos-tarjeta">
                  <i class="bi bi-heart mx-2 mt-1"></i>
                  <i class="bi bi-bag mx-3 mb-1"></i>
                </div>
                <img class="img-camiseta" src="../assets/images/camiseta_colo_colo.png" />
                <div class="card-body tarjeta-cuerpo">
                  <h6 class="nombreCamisetaListado pt-1">Nombre Camiseta</h6>
                  <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                      class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                    <span class="far fa-star"></span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                    <div class="d-flex flex-column">
                      <div>
                        <strong class="fs-4">$56765765</strong>
                      </div>
                    </div>
                    <router-link to="/detalle/id">
                      <a class="btn btn-detalles px-2">Ver Detalles</a>
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="card tarjeta">
                <div class="iconos-tarjeta">
                  <i class="bi bi-heart mx-2 mt-1"></i>
                  <i class="bi bi-bag mx-3 mb-1"></i>
                </div>
                <img class="img-camiseta" src="../assets/images/camiseta_barcelona.png" />
                <div class="card-body tarjeta-cuerpo">
                  <h6 class="nombreCamisetaListado pt-1">Nombre Camiseta</h6>
                  <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                      class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                    <span class="far fa-star"></span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                    <div class="d-flex flex-column">
                      <div>
                        <strong class="fs-4">$56765765</strong>
                      </div>
                    </div>
                    <router-link to="/detalle/id">
                      <a class="btn btn-detalles px-2">Ver Detalles</a>
                    </router-link>
                  </div>
                </div>

              </div>
              <div class="card tarjeta">
                <div class="iconos-tarjeta">
                  <i class="bi bi-heart mx-2 mt-1"></i>
                  <i class="bi bi-bag mx-3 mb-1"></i>
                </div>
                <img class="img-camiseta" src="../assets/images/camiseta_brasil.png" />
                <div class="card-body tarjeta-cuerpo">
                  <h6 class="nombreCamisetaListado pt-1">Nombre Camiseta</h6>
                  <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                      class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                    <span class="far fa-star"></span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                    <div class="d-flex flex-column">
                      <div>
                        <strong class="fs-4">$56765765</strong>
                      </div>
                    </div>
                    <router-link to="/detalle/id">
                      <a class="btn btn-detalles px-2">Ver Detalles</a>
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="card tarjeta">
                <div class="iconos-tarjeta">
                  <i class="bi bi-heart mx-2 mt-1"></i>
                  <i class="bi bi-bag mx-3 mb-1"></i>
                </div>
                <img class="img-camiseta" src="../assets/images/camiseta_colo_colo.png" />
                <div class="card-body tarjeta-cuerpo">
                  <h6 class="nombreCamisetaListado pt-1">Nombre Camiseta</h6>
                  <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                      class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                    <span class="far fa-star"></span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                    <div class="d-flex flex-column">
                      <div>
                        <strong class="fs-4">$56765765</strong>
                      </div>
                    </div>
                    <router-link to="/detalle/id">
                      <a class="btn btn-detalles px-2">Ver Detalles</a>
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="card tarjeta">
                <div class="iconos-tarjeta">
                  <i class="bi bi-heart mx-2 mt-1"></i>
                  <i class="bi bi-bag mx-3 mb-1"></i>
                </div>
                <img class="img-camiseta" src="../assets/images/camiseta_barcelona.png" />
                <div class="card-body tarjeta-cuerpo">
                  <h6 class="nombreCamisetaListado pt-1">Nombre Camiseta</h6>
                  <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                      class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                    <span class="far fa-star"></span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                    <div class="d-flex flex-column">
                      <div>
                        <strong class="fs-4">$56765765</strong>
                      </div>
                    </div>
                    <router-link to="/detalle/id">
                      <a class="btn btn-detalles px-2">Ver Detalles</a>
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="card tarjeta">
                <div class="iconos-tarjeta">
                  <i class="bi bi-heart mx-2 mt-1"></i>
                  <i class="bi bi-bag mx-3 mb-1"></i>
                </div>
                <img class="img-camiseta" src="../assets/images/camiseta_brasil.png" />
                <div class="card-body tarjeta-cuerpo">
                  <h6 class="nombreCamisetaListado pt-1">Nombre Camiseta</h6>
                  <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                      class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                    <span class="far fa-star"></span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                    <div class="d-flex flex-column">
                      <div>
                        <strong class="fs-4">$56765765</strong>
                      </div>
                    </div>
                    <router-link to="/detalle/id">
                      <a class="btn btn-detalles px-2">Ver Detalles</a>
                    </router-link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ListarCamisetasPage',
}
</script>


<style>
.contenedor-vista-camisetas {
  display: flex;
  flex-direction: row;
}

/* ----- FILTROS ----- */
.filtros {
  width: 19%;
  background-color: #E6E6E6;
  margin: 1%;
  border: 1px solid #8a8a8a;
  border-radius: 10px;
}

.filtros h3 {
  font-weight: bolder;
  margin-top: 2%;
  margin-bottom: 10%;
}

.contenedor-filtro {
  margin-bottom: 30%;
}

.opciones-filtro{
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
}

.opciones-filtro-precio{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
}

.opciones-filtro-club-seleccion{
  display: flex;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
}

/* ----- CAMISETAS ----- */
.container {
  margin-left: 8%;
}

.contenedor-camisetas {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.tarjeta {
  width: calc(33.33% - 5%);
  margin-bottom: 5%;
  background-color: #E6E6E6;
}

.iconos-tarjeta {
  display: flex;
  justify-content: end;
  margin: 5%;
  font-size: 30px;
}

.nombreCamisetaListado{
  font-weight: bold;
}

.img-camiseta {
  height: 300px;
  width: 100%;
  padding: 5%;
  padding-left: 8%;
  padding-right: 8%;
  margin-top: -8%;
}

.btn-detalles{
  background-color: black;
  color: white;
  font-weight: bold;
}

.btn-detalles:hover{
  background-color: #180026;
  color: white;
  font-weight: bold;
}
</style>