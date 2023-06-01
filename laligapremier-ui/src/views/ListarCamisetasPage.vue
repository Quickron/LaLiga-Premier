<template>
  <div class="contenedor-vista-camisetas">
    <div class="filtros">
      <h3>FILTROS</h3>
    </div>
    <div class="novedades">
      <section id="products">
        <div class="container py-3">
          <div class="row">
            <div class="offset-md-0 offset-sm-1 contenedor-camisetas">

              <div class="card tarjeta">
                <img class="img-camiseta" src="../assets/images/camiseta_colo_colo.png" />
                <div class="card-body tarjeta-cuerpo">
                  <h6 class="font-weight-bold pt-1">Nombre Camiseta</h6>
                  <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                      class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                    <span class="far fa-star"></span> </div>
                  <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                    <div class="d-flex flex-column">
                      <div>
                        <strong class="fs-4">$56765765</strong>
                      </div>
                    </div>
                    <a class="btn btn-primary px-2">Ver Detalles</a>
                  </div>
                </div>
              </div>

              <div class="card tarjeta">
                <img class="img-camiseta" src="../assets/images/camiseta_barcelona.png" />
                <div class="card-body tarjeta-cuerpo">
                  <h6 class="font-weight-bold pt-1">Nombre Camiseta</h6>
                  <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                      class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                    <span class="far fa-star"></span> </div>
                  <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                    <div class="d-flex flex-column">
                      <div>
                        <strong class="fs-4">$56765765</strong>
                      </div>
                    </div>
                    <a class="btn btn-primary px-2">Ver Detalles</a>
                  </div>
                </div>

              </div>
              <div class="card tarjeta">
                <img class="img-camiseta" src="../assets/images/camiseta_brasil.png" />
                <div class="card-body tarjeta-cuerpo">
                  <h6 class="font-weight-bold pt-1">Nombre Camiseta</h6>
                  <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                      class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                    <span class="far fa-star"></span> </div>
                  <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                    <div class="d-flex flex-column">
                      <div>
                        <strong class="fs-4">$56765765</strong>
                      </div>
                    </div>
                    <a class="btn btn-primary px-2">Ver Detalles</a>
                  </div>
                </div>
              </div>

              <div class="card tarjeta">
                <img class="img-camiseta" src="../assets/images/camiseta_colo_colo.png" />
                <div class="card-body tarjeta-cuerpo">
                  <h6 class="font-weight-bold pt-1">Nombre Camiseta</h6>
                  <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                      class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                    <span class="far fa-star"></span> </div>
                  <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                    <div class="d-flex flex-column">
                      <div>
                        <strong class="fs-4">$56765765</strong>
                      </div>
                    </div>
                    <a class="btn btn-primary px-2">Ver Detalles</a>
                  </div>
                </div>
              </div>

              <div class="card tarjeta">
                <img class="img-camiseta" src="../assets/images/camiseta_barcelona.png" />
                <div class="card-body tarjeta-cuerpo">
                  <h6 class="font-weight-bold pt-1">Nombre Camiseta</h6>
                  <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                      class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                    <span class="far fa-star"></span> </div>
                  <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                    <div class="d-flex flex-column">
                      <div>
                        <strong class="fs-4">$56765765</strong>
                      </div>
                    </div>
                    <a class="btn btn-primary px-2">Ver Detalles</a>
                  </div>
                </div>

              </div>
              <div class="card tarjeta">
                <img class="img-camiseta" src="../assets/images/camiseta_brasil.png" />
                <div class="card-body tarjeta-cuerpo">
                  <h6 class="font-weight-bold pt-1">Nombre Camiseta</h6>
                  <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                      class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                    <span class="far fa-star"></span> </div>
                  <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                    <div class="d-flex flex-column">
                      <div>
                        <strong class="fs-4">$56765765</strong>
                      </div>
                    </div>
                    <a class="btn btn-primary px-2">Ver Detalles</a>
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
  margin-bottom: 2%;
}

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

.img-camiseta {
  height: 300px;
  width: 100%;
  padding: 5%;
  padding-left: 8%;
  padding-right: 8%;
  margin-top: 10%;
}
</style>