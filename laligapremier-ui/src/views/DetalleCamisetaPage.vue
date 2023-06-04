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
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="@/assets/images/camiseta_barcelona.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="@/assets/images/camiseta_colo_colo.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/images/camiseta_brasil.png" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        

      </div>

      <div class="card card-ver-camiseta descripcionCamiseta">

        <!-- Descripción Camiseta-->
        <div class="details">

          <form>

            <h3 class="titulo-ver-camiseta">Nombre Camiseta</h3>
            
            <p class="desc-ver-camiseta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo consectetur
              minima fuga id assumenda perspiciatis facere, quae consequatur tempore. Perferendis ex mollitia dolorem
              ipsam debitis velit similique consequatur, et praesentium!</p>

            <h4 class="precio">$4354835483</h4>

            <div class="mt-4 bloque-cantidad">
              <div class="cantidad-input">
                <h6 class="cantidad">Cantidad </h6>
                <input type="number" min="1" class="casilla-cantidad">
                <button class="btn btn-cantidad rounded-pill">+</button>
                <button class="btn btn-cantidad rounded-pill">-</button>
              </div>
            </div>

            <div class="tallas mt-4">
              <h6 class="talla-txt">Talla</h6>

              <label class="radio talla mx-1">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <span class="form-check-label" for="flexRadioDefault1">
                  XS
                </span>
              </label>
              <label class="radio talla mx-1">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <span class="form-check-label" for="flexRadioDefault1">
                  S
                </span>
              </label>
              <label class="radio talla mx-1">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <span class="form-check-label" for="flexRadioDefault1">
                  M
                </span>
              </label>
              <label class="radio talla mx-1">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <span class="form-check-label" for="flexRadioDefault1">
                  L
                </span>
              </label>
              <label class="radio talla mx-1">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <span class="form-check-label" for="flexRadioDefault1">
                  XL
                </span>
              </label>
            </div>

            <div class="action d-flex justify-content-center">
              <button class="btn btn-bolsa-camiseta" type="submit">Añadir a la bolsa</button>
            </div>

          </form>

          <div class="mt-5">
            <!-- Botón desplegable -->
            <p>
              <a class="btn btn-detalles"
                data-bs-toggle="collapse" href="#dropdownDetalles" role="button" aria-expanded="true"
                aria-controls="collapseExample">
                <span class="fas fa-bars"><span class="ps-3">+ Detalles</span></span>
                <span class="fas fa-chevron-down"></span>
              </a>
            </p>

            <!-- Info camiseta -->
            <div class="collapse" id="dropdownDetalles">


              <table class="table info-mas-detalles">
                <tr>
                  <th scope="row">Club / Selección</th>
                  <td>Club</td>
                </tr>
                <tr>
                  <th scope="row">Liga</th>
                  <td>La Liga</td>
                </tr>
                <tr>
                  <th scope="row">Temporada</th>
                  <td>2022-2023</td>
                </tr>
                <tr>
                  <th scope="row">Marca</th>
                  <td>Nike</td>
                </tr>
                <tr>
                  <th scope="row">Dorsal</th>
                  <td>10</td>
                </tr>
                <tr>
                  <th scope="row">Jugador</th>
                  <td>Messi</td>
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

export default {
  name: 'DetalleCamisetaPage',
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

.carruselCamiseta{
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

.titulo-ver-camiseta{
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 5%;
}

.precio {
  font-weight: bold;
}

.bloque-cantidad{
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

.casilla-cantidad{
  width: 16%;
  height: 50%;
  margin-right: 5%;
  margin-top: 2%;
}

.btn-cantidad{
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

.talla-txt{
  font-weight: bold;
  text-align: start;
}

.btn-bolsa-camiseta{
  margin-top: 8%;
  background-color: black;
  font-weight: bold;
  color: white;
}

.btn-bolsa-camiseta:hover{
  background-color: #180026;
  font-weight: bold;
  color: white;
}

.btn-detalles{
  background-color:#180026;
  color: white;
  width: 100%;
}

.info-mas-detalles, .info-mas-detalles:hover{
  padding: 5%;
  margin-left: 1%;
}
</style>
