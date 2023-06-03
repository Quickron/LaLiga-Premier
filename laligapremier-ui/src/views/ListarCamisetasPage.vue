<template>
  <div class="contenedor-vista-camisetas">
    <div class="filtros">
      <h3><i class="bi bi-filter"></i> FILTROS</h3>

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle menu-talla" type="button" id="talla" data-bs-toggle="dropdown"
          aria-expanded="false">
          Talla
        </button>

        <div class="dropdown-menu contenedor-talla" aria-labelledby="talla">

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              XS
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
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

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle menu-talla" type="button" id="marca" data-bs-toggle="dropdown"
          aria-expanded="false">
          Marca
        </button>

        <div class="dropdown-menu contenedor-talla" aria-labelledby="marca">

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Adidas
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
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

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle menu-talla" type="button" id="precio" data-bs-toggle="dropdown"
          aria-expanded="false">
          Precio
        </button>

        <div class="dropdown-menu contenedor-talla" aria-labelledby="precio">

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              $20.000 - $30.000
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
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

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle menu-talla" type="button" id="marca" data-bs-toggle="dropdown"
          aria-expanded="false">
          Club / Selección
        </button>

        <div class="dropdown-menu contenedor-talla" aria-labelledby="marca">

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Club
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
              Selección
            </label>
          </div>

        </div>
      </div>

    </div>
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

.menu-talla {
  width: 80%;
}

.contenedor-talla {
  width: 80%;
  padding: 5%;
}

.dropdown {
  margin-bottom: 50%;
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