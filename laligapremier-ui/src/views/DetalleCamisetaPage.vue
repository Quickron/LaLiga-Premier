<template>
  <div>
    <div class=" contenedorCamiseta">

      <div class="fotosCamiseta">

        <!-- Imagen Camiseta-->
        <div id="carouselExampleDark" class="carousel carousel-dark slide carruselCamiseta" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000" v-for="(imagen, index) in camiseta.imagenes"
              :key="index">
              <img :src="imagen" class="d-block w-100" alt="Imagen Camiseta">
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>


      </div>

      <div class="card card-ver-camiseta descripcionCamiseta">

        <!-- Descripción Camiseta-->
        <div class="details">

          <form @submit.prevent="enviarForm">

            <h3 class="titulo-ver-camiseta">{{ camiseta.nombre }}</h3>

            <p class="desc-ver-camiseta">{{ camiseta.descripcion }}</p>

            <h4 class="precio">${{ camiseta.precio }}</h4>

            <div class="tallas mt-4" v-if="camiseta.stock > 0">
              <h6 class="talla-txt">Para</h6>

              <label class="radio talla mx-1">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="talla" v-model="publico">
                <span class="form-check-label mx-1" for="talla">Hombre</span>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="talla" v-model="publico">
                <span class="form-check-label mx-1" for="talla">Mujer</span>
              </label>

            </div>

            <div class="tallas mt-4" v-if="camiseta.stock > 0">
              <h6 class="talla-txt">Talla</h6>

              <label class="radio talla mx-1" v-for="(talla, index) in tallas" :key="index">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="talla" v-model="this.talla">
                <span class="form-check-label mx-1" for="talla">{{ talla }}</span>
              </label>

            </div>

            <div class="mt-4 bloque-cantidad" v-if="camiseta.stock > 0">
              <div class="cantidad-input">
                <h6 class="cantidad">Cantidad </h6>
                <input type="number" min="1" class="casilla-cantidad" v-model="cantidad">
                <button class="btn btn-cantidad rounded-pill">+</button>
                <button class="btn btn-cantidad rounded-pill">-</button>
                <div class="alert alert-danger" role="alert" v-if="cantidad > camiseta.stock">
                  ¡No quedan suficientes unidades! Selecciona un valor menor.
                </div>
              </div>
            </div>
            <div class="col-md-12" v-else>
              <div class="alert alert-danger" role="alert">
                ¡Camiseta Agotada! Consulta más tarde.
              </div>
            </div>

            <div class="action d-flex justify-content-center" v-if="camiseta.stock > 0 && camiseta.stock >= cantidad">
              <button class="btn btn-bolsa-camiseta" type="submit">Añadir a la bolsa</button>
            </div>
            <div class="action d-flex justify-content-center" v-else>
              <button class="btn btn-bolsa-camiseta disabled" type="submit">Añadir a la bolsa</button>
            </div>

          </form>

          <div class="mt-5">
            <!-- Botón desplegable -->
            <p>
              <a class="btn btn-detalles" data-bs-toggle="collapse" href="#dropdownDetalles" role="button"
                aria-expanded="true" aria-controls="collapseExample">
                <span class="fas fa-bars"><span class="ps-3">+ Detalles</span></span>
                <span class="fas fa-chevron-down"></span>
              </a>
            </p>

            <!-- Info camiseta -->
            <div class="collapse" id="dropdownDetalles">


              <table class="table info-mas-detalles">
                <tr>
                  <th scope="row">Club / Selección</th>
                  <td>{{ camiseta.tipo }}</td>
                </tr>
                <tr>
                  <th scope="row">Equipo</th>
                  <td>{{ camiseta.equipo }}</td>
                </tr>
                <tr>
                  <th scope="row">Liga</th>
                  <td>{{ camiseta.liga }}</td>
                </tr>
                <tr>
                  <th scope="row">Temporada</th>
                  <td>{{ camiseta.temporada }}</td>
                </tr>
                <tr>
                  <th scope="row">Marca</th>
                  <td>{{ camiseta.marca }}</td>
                </tr>
                <tr>
                  <th scope="row">Dorsal</th>
                  <td>{{ camiseta.dorsal }}</td>
                </tr>
                <tr>
                  <th scope="row">Jugador</th>
                  <td>{{ camiseta.jugador }}</td>
                </tr>
              </table>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { obtenerCamistasPorToken, obtenerTallasPorToken, obtenerCamisetaPorTalla } from '@/mocks/camiseta'
export default {
  name: 'DetalleCamisetaPage',
  data() {
    return {
      tallas: [],
      camisetas: [],
      camiseta: Object,
      cantidad: 1,
      talla: "",
      publico: "Hombre",
      stock: 0
    }
  },
  async mounted() {
    this.camisetas = obtenerCamistasPorToken("gavi_fcb").camisetas;
    this.camiseta = this.camisetas[0];
    this.tallas = obtenerTallasPorToken("gavi_fcb").tallas;
    this.stock = obtenerCamisetaPorTalla(this.talla).camiseta.stock;
  },
}
</script>

<style scoped>
.contenedorCamiseta {
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
}

/* ----- Carrusel Camiseta ----- */
.fotosCamiseta {
  margin-left: 10%;
  margin-right: 5%;
  margin-top: 4%;
  width: 40%;
}

.carruselCamiseta {
  width: 100%;
}

/* ----- Descripción Camiseta ----- */
.descripcionCamiseta {
  margin-left: 5%;
  margin-right: 10%;
  width: 60%;
  padding: 5%;
  background-color: lightgray;
  text-align: start;
}

.titulo-ver-camiseta {
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 5%;
}

.precio {
  font-weight: bold;
}

.bloque-cantidad {
  display: flex;
  justify-content: start;
  width: 100%;
}

.cantidad {
  font-weight: bold;
  margin-right: 3%;
  margin-top: 2%;
}

.cantidad-input {
  display: flex;
  justify-content: start;
}

.casilla-cantidad {
  width: 16%;
  height: 50%;
  margin-right: 5%;
  margin-top: 2%;
}

.btn-cantidad {
  background-color: white;
  margin-right: 2%;
  height: 80%;
  font-weight: bold;
  padding-bottom: 3%;
}

.tallas {
  display: flex;
  justify-content: space-between;
  margin-right: 15%;
}

.talla-txt {
  font-weight: bold;
  text-align: start;
}

.btn-bolsa-camiseta {
  margin-top: 8%;
  background-color: black;
  font-weight: bold;
  color: white;
}

.btn-bolsa-camiseta:hover {
  background-color: #180026;
  font-weight: bold;
  color: white;
}

.btn-detalles {
  background-color: #180026;
  color: white;
  width: 100%;
}

.info-mas-detalles,
.info-mas-detalles:hover {
  padding: 5%;
  margin-left: 1%;
}
</style>
