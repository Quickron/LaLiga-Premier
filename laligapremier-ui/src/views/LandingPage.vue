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
      <div>
        <img src="@/assets//images/estilo_hombre.png" alt="Estilo Hombre" />
        <p>Hombre</p>
      </div>
      <div>
        <img src="@/assets//images//estilo_mujer.png" alt="Estilo Mujer" />
        <p>Mujer</p>
      </div>
      <div>
        <img src="@/assets//images//estilo_niño.png" alt="Estilo Niño" />
        <p>Niño</p>
      </div>
    </div>
  </div>
  <div class="epocas">
    <div>
      <img src="@/assets//images//clasico.png" alt="Clásico" />
      <div class="contenido-clasico">
        <p class="txt-epoca">CLÁSICO</p>
        <button class="btn btn-epoca rounded-pill">Ver</button>
        <p id="descripcion-clasico">Davids, Paises Bajos</p>
      </div>
    </div>
    <div>
      <img src="@/assets//images//moderno.png" alt="Moderno" />
      <div class="contenido-moderno">
        <p class="txt-epoca">MODERNO</p>
        <button class="btn btn-epoca rounded-pill">Ver</button>
        <p id="descripcion-moderno">Haaland, Manchester City</p>
      </div>
    </div>
  </div>
  <div class="novedades">
    <h1>NOVEDADES</h1>
    <section id="products">
      <div class="container py-3">
        <div class="row">
          <div class="offset-md-0 offset-sm-1 contenedor-camisetas">
            <div class="card tarjeta">
              <img class="img-camiseta" src="../assets/images/camiseta_colo_colo.png" />
              <div class="card-body tarjeta-cuerpo">
                <h6 class="font-weight-bold pt-1">Nombre Camiseta</h6>
                <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                    class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span
                    class="far fa-star"></span> </div>
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
                    class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span
                    class="far fa-star"></span> </div>
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
                    class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span
                    class="far fa-star"></span> </div>
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
</template>

<script>

export default {
  name: 'LandingPage',
}
</script>

<style>
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

/* ----- SECCIÓN NOVEDADES ----- */

.novedades h1 {
  font-weight: bolder;
  margin-top: 2%;
  margin-bottom: 2%;
}

.container {
  width: 100%;
}

.contenedor-camisetas {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
