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
    <div class="epoca-clasica">
      <img src="@/assets//images//clasico.png" alt="Clásico" />
      <div class="contenido-clasico">
        <p class="txt-epoca">CLÁSICO</p>
        <button class="btn btn-epoca rounded-pill">Ver</button>
        <p id="descripcion-clasico">Davids, Paises Bajos</p>
      </div>
    </div>
    <div class="epoca-moderna">
      <img src="@/assets//images//moderno.png" alt="Moderno" />
      <div class="contenido-moderno">
        <p class="txt-epoca">MODERNO</p>
        <button class="btn btn-epoca rounded-pill">Ver</button>
        <p id="descripcion-moderno">Haaland, Manchester City</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LandingPage',
}
</script>

<style>
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

.txt-epoca{
  font-size: 40px;
  margin-bottom: 1%;
}

#descripcion-clasico{
  margin-bottom: 19%;
  transform: translateX(220%);
}

#descripcion-moderno{
  margin-bottom: 16%;
  transform: translateX(-165%);
}

.btn-epoca {
  background-color: #44115C;
  color: white;
  font-weight: bold;
}
</style>
