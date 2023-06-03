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
            <div class="mt-4">
              <label>
                <h6 class="cantidad">Cantidad <input type="number" min="1" class="casilla-cantidad">
                </h6>
              </label>
            </div>
            <div class="tallas mt-4 form-check">
              <h6 class="txt-destacado tallas">Talla</h6>
              <div>

              </div>
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
              <button class="btn btn-success btn-bolsa-camiseta" type="submit">Añadir a la bolsa</button>
            </div>

          </form>

          <div class="mt-5">
            <!-- Botón desplegable -->
            <p>
              <a class="btn btn-secondary txt-destacado w-100 d-flex align-items-center justify-content-between"
                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                aria-controls="collapseExample">
                <span class="fas fa-bars"><span class="ps-3">+ Detalles</span></span>
                <span class="fas fa-chevron-down"></span>
              </a>
            </p>

            <!-- Info camiseta -->
            <div class="collapse show" id="collapseExample">


              <table class="table dropdown-item border info-mas-detalles">
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

<style>
.contenedorCamiseta {
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
}

.fotosCamiseta {
  margin-left: 10%;
  margin-right: 5%;
  margin-top: 3%;
  width: 40%;
}

.descripcionCamiseta {
  margin-left: 5%;
  margin-right: 10%;
  width: 60%;
  padding: 5%;
  background-color: lightgray;
  text-align: start;
}

.cuerpo-ver-camiseta {
  display: flex;
  justify-content: center;
}

.carruselCamiseta{
  width: 100%;
}

.btn-bolsa-camiseta{
  margin-top: 5%;
}

.titulo-ver-camiseta{
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 5%;
}

.precio {
  font-weight: bold;
}

.casilla-cantidad{
  width: 18%;
}

.tallas {
  display: flex;
  justify-content: space-between;
  margin-right: 15%;
}

.info-mas-detalles, .info-mas-detalles:hover{
  padding: 5%;
  background-color: white;
}
</style>
