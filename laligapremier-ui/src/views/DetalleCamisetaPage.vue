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

          <DetalleCamisetaForm :camiseta="this.camiseta" @camiseta-bolsa="agregarCamisetaBolsa"></DetalleCamisetaForm>

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
import { obtenerCamisetaPorId } from '@/mocks/camiseta'
import { obtenerUsuarioSesion } from '@/mocks/usuario'
import DetalleCamisetaForm from '@/components/DetalleCamisetaForm.vue'
export default {
  name: 'DetalleCamisetaPage',
  components: {
    DetalleCamisetaForm
  },
  data() {
    return {
      camisetaId: "",
      camiseta: Object,
      camisetaBolsa: Object,
      itemBolsa: Object,
      usuario: Object
    }
  },
  async mounted() {
    this.camisetaId = "2";
    this.camiseta = obtenerCamisetaPorId(this.camisetaId);
    this.usuario = obtenerUsuarioSesion;
  },
  computed: {
    nombreInvalido() {
      return this.camiseta.nombre.length < 1;
    },
  },
  methods: {
    agregarCamisetaBolsa(item) {
      this.camisetaBolsa = item;
      this.rellenarItemBolsa()
    },
    rellenarItemBolsa() {
      this.itemBolsa = {
        usuario: this.usuario,
        camisetaId: this.camisetaId,
        camisetaBolsa: this.camisetaBolsa,
      }
    }
  }
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
