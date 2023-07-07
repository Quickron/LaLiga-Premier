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
            <input v-model="this.talla" class="form-check-input" type="radio" value="XS" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              XS
            </label>
          </div>

          <div class="form-check">
            <input v-model="this.talla" class="form-check-input" type="radio" value="S" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckChecked">
              S
            </label>
          </div>

          <div class="form-check">
            <input v-model="this.talla" class="form-check-input" type="radio" value="M" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              M
            </label>
          </div>

          <div class="form-check">
            <input v-model="this.talla" class="form-check-input" type="radio" value="L" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              L
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" value="XL" id="flexCheckDefault">
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
            <input v-model="this.marca" class="form-check-input" type="radio" value="ADIDAS" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Adidas
            </label>
          </div>

          <div class="form-check">
            <input v-model="this.marca" class="form-check-input" type="radio" value="NIKE" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckChecked">
              Nike
            </label>
          </div>

          <div class="form-check">
            <input v-model="this.marca" class="form-check-input" type="radio" value="PUMA" id="flexCheckDefault">
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
            <input v-model="this.rangoPrecio" :value="{ precioMinimo: 20000, precioMaximo: 30000 }" class="form-check-input"
              type="radio" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              $20.000 - $30.000
            </label>
          </div>

          <div class="form-check">
            <input v-model="this.rangoPrecio" :value="{ precioMinimo: 30000, precioMaximo: 40000 }" class="form-check-input"
              type="radio" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckChecked">
              $30.000 - $40.000
            </label>
          </div>

          <div class="form-check">
            <input v-model="this.rangoPrecio" :value="{ precioMinimo: 40000, precioMaximo: 50000 }" class="form-check-input"
              type="radio" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              $40.000 - $50.000
            </label>
          </div>

          <div class="form-check">
            <input v-model="this.rangoPrecio" :value="{ precioMinimo: 50000, precioMaximo: 60000 }" class="form-check-input"
              type="radio" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              $50.000 - $60.000
            </label>
          </div>
        </div>
      </div>

      <!-- Botones -->
      <div class="botones-filtros">
        <button @click="aplicarFiltros" class="btn btn-success me-4">Aplicar Filtros</button>
        <button @click="eliminarFiltros" class="btn btn-danger">Eliminar Filtros</button>
      </div>

    </div>

    <!-- Todas las camisetas -->
    <div class="w-100">
      <section id="products">
        <div class="container py-3">
          <div class="row">
            <div class="offset-md-0 offset-sm-1 contenedor-camisetas">

              <div class="card tarjeta" v-for="(camiseta, index) in camisetas" :key="index">
                <div class="iconos-tarjeta">
                  <i class="bi bi-heart mx-2 mt-1"></i>
                </div>
                <TarjetaCamiseta :camiseta="camiseta" />
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TarjetaCamiseta from '@/components/TarjetaCamiseta.vue';

export default {
  name: 'ListarCamisetasPage',
  components: {
    TarjetaCamiseta,
  },
  data() {
    return {
      camisetas: [],
      filtro: '',
      objFiltro: {
        tipo: '',
        publico: '',
        epoca: '',
        marca: '',
        talla: '',
        precioMaximo: null,
        precioMinimo: null,
      },
      talla: '',
      marca: '',
      rangoPrecio: Object,
    }
  },
  async mounted() {
    this.filtro = this.$route.params.filtro;
    this.listarTipos();
    this.listarPublico();
    this.listarEpocas();

  },
  methods: {
    consultaAlCargarPagina(tipo) {
      this.objFiltro.tipo = tipo;
        console.log(this.objFiltro)
        axios.get('http://localhost:3000/camisetas/filtro', { params: this.objFiltro })
          .then(response => {
            this.camisetas = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    },
    listarTipos() {
      if (this.filtro === "selecciones") {
        this.consultaAlCargarPagina("SELECCION");
      }
      if (this.filtro === "clubes") {
        this.consultaAlCargarPagina("CLUB");
      }
    },
    listarPublico() {
      if (this.filtro === "hombre") {
        this.consultaAlCargarPagina("Hombre");
      }
      if (this.filtro === "mujer") {
        this.consultaAlCargarPagina("Mujer");
      }
    },
    listarEpocas() {
      if (this.filtro === "clasicas") {
        this.consultaAlCargarPagina("CLASICO");
      }
    },
    consultaAplicarFiltros(tipo) {
      this.objFiltro.tipo = tipo;
        this.objFiltro.talla = this.talla;
        this.objFiltro.marca = this.marca;
        this.objFiltro.precioMaximo = this.rangoPrecio.precioMaximo;
        this.objFiltro.precioMinimo = this.rangoPrecio.precioMinimo;
        console.log(this.objFiltro)
        axios.get('http://localhost:3000/camisetas/filtro', { params: this.objFiltro })
          .then(response => {
            this.camisetas = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    },
    aplicarFiltros() {
      if (this.filtro === "selecciones") {
        this.consultaAplicarFiltros("SELECCION");
      }
      if (this.filtro === "clubes") {
        this.consultaAplicarFiltros("CLUB");
      }
      if (this.filtro === "hombre") {
        this.consultaAplicarFiltros("Hombre");
      }
      if (this.filtro === "mujer") {
        this.consultaAplicarFiltros("Mujer");
      }
      if (this.filtro === "clasicas") {
        this.consultaAplicarFiltros("CLASICO");
      }
    },
    eliminarFiltros() {
      this.listarTipos();
      this.listarPublico();
      this.listarEpocas();
    },
  }
}
</script>


<style scoped>
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

.opciones-filtro {
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
}

.opciones-filtro-precio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
}

.opciones-filtro-club-seleccion {
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
</style>