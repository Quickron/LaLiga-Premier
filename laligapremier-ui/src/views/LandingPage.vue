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
        <img src="@/assets//images/estilo_hombre.png" alt="Logo" class="logo" />
        <p>Hombre</p>
      </div>
      <div>
        <img src="@/assets//images//estilo_mujer.png" alt="Logo" class="logo" />
        <p>Mujer</p>
      </div>
      <div>
        <img src="@/assets//images//estilo_niño.png" alt="Logo" class="logo" />
        <p>Niño</p>
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

.estilos-imgs{
  display: flex;
  justify-content: center;
  margin-top: 3%;
}

.estilos-imgs > div{
  margin-left: 5%;
  margin-right: 5%;
}

.estilos-imgs img{
  height: 300px;
  width: 300px;
  
}

.estilos-imgs p{
  margin-top: 2%;
  font-size: large;
}
</style>
