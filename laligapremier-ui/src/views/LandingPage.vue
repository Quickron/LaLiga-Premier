<template>
  <div class="bienvenida">
    <img class="img-bienvenida" src="../assets/images/bienvenida.png" alt="Imagen de Bienvenida">
    <div class="textos-bienvenida">
      <p class="textoEncima">¡PONTE</p>
      <p class="textoEncima">EN MODO</p>
      <p class="textoEncima">FÚTBOL!</p>
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
    </div>
  </div>

  <div class="estilos">
    <h1>DESCUBRE TU ESTILO</h1>
    <div class="estilos-imgs">
      <div class="estilo">
        <router-link to="/camisetas" style="text-decoration: none;">
          <img src="@/assets//images/estilo_hombre.png" alt="Estilo Hombre" />
          <p>Hombre</p>
        </router-link>
      </div>
      <div class="estilo">
        <router-link to="/camisetas" style="text-decoration: none;">
          <img src="@/assets//images/estilo_mujer.png" alt="Estilo Mujer" />
          <p>Mujer</p>
        </router-link>
      </div>
    </div>
  </div>

  <div class="epocas">
    <div>
      <img src="@/assets//images//clasico.png" alt="Clásico" />
      <div class="contenido-clasico">
        <p class="txt-epoca">CLÁSICO</p>
        <router-link to="/camisetas">
          <button class="btn btn-epoca rounded-pill">Ver</button>
        </router-link>
        <p id="descripcion-clasico">Davids, Paises Bajos</p>
      </div>
    </div>
    <div>
      <img src="@/assets//images//moderno.png" alt="Moderno" />
      <div class="contenido-moderno">
        <p class="txt-epoca">MODERNO</p>
        <router-link to="/camisetas">
          <button class="btn btn-epoca rounded-pill">Ver</button>
        </router-link>
        <p id="descripcion-moderno">Haaland, Manchester City</p>
      </div>
    </div>
  </div>

  <div class="novedades">
    <h1>NOVEDADES</h1>
    <section id="products">
      <div class=" py-3">
        <div class="row">
          <div class="offset-md-0 offset-sm-1 contenedor-camisetas-novedades">

            <div class="card tarjeta" v-for="(camiseta, index) in camisetasNovedades" :key="index">
              <div class="iconos-tarjeta">
                <i class="bi bi-heart mx-2 mt-1"></i>
                <i class="bi bi-bag mx-3 mb-1"></i>
              </div>
              <TarjetaCamiseta :camiseta="camiseta" />
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TarjetaCamiseta from '@/components/TarjetaCamiseta.vue';
import { obtenerCamisetasNovedades } from '@/mocks/camiseta'

export default {
  name: 'LandingPage',
  components: {
    TarjetaCamiseta,
  },
  data() {
    return {
      camisetasNovedades: [],
    }
  },
  async mounted() {
    this.camisetasNovedades = obtenerCamisetasNovedades;
  },
}
</script>


<style scoped>
/* ----- SECCIÓN BIENVENIDA ----- */
.img-bienvenida {
  width: 100%;
}

.textos-bienvenida {
  position: absolute;
  top: 22%;
  transform: translateX(200%);
  color: white;
  text-align: start;
}

.textoEncima {
  margin: 0;
  font-size: 120px;
}

.textos-bienvenida img {
  margin-top: 25%;
  width: 90%;
  height: 200px;
  margin-left: 90px;
}

/* ----- SECCIÓN ESTILOS (HOMBRE, MUJER y NIÑO) ----- */
.estilos h1 {
  font-weight: bolder;
  margin-top: 2%;
}

.estilos-imgs {
  display: flex;
  justify-content: center;
  margin-top: 3%;
}

.estilos-imgs>div {
  margin-left: 5%;
  margin-right: 5%;
}

.estilos-imgs img {
  height: 300px;
  width: 300px;

}

.estilos-imgs p {
  margin-top: 2%;
  font-size: large;
  color: black;
  text-decoration: none;
}

.estilo img:hover {
  height: 350px;
  width: 350px;
  border: 2px solid black;
}

.estilo:hover {
  font-weight: bold;
}

/* ----- SECCIÓN ÉPOCAS (CLÁSICO - MODERNO) ----- */

.epocas {
  display: flex;
  justify-content: center;
  margin-top: 3%;
}

.contenido-clasico {
  position: absolute;
  margin-left: 2%;
  transform: translateY(-100%);
  color: white;
  text-align: start;
}

.contenido-moderno {
  position: absolute;
  margin-left: 19%;
  transform: translateY(-100%);
  color: white;
  text-align: end;
}

.txt-epoca {
  font-size: 40px;
  margin-bottom: 1%;
}

#descripcion-clasico {
  margin-bottom: 19%;
  transform: translateX(220%);
}

#descripcion-moderno {
  margin-bottom: 16%;
  transform: translateX(-165%);
}

.btn-epoca {
  background-color: #44115C;
  color: white;
  font-weight: bold;
}

.btn-epoca:hover {
  background-color: black;
  color: white;
  font-weight: bold;
}

/* ----- SECCIÓN NOVEDADES ----- */

.novedades h1 {
  font-weight: bolder;
  margin-top: 2%;
  margin-bottom: 2%;
}

.contenedor-camisetas-novedades {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
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
