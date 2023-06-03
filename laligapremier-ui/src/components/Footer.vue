<template>
  <footer class="text-center text-lg-start text-muted border-top footer">
    <section>
      <div class="container text-center text-md-start mt-5">
        <div class="row gris">
          <!-- Nosotros -->
          <div class=" col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="bi bi-info-circle-fill me-3"></i>LaLiga Premier
            </h6>
            <a class="nosotros me-3">
              <router-link to="/nosotros">Nosotros</router-link>
            </a>
          </div>

          <!-- Tecnologías -->
          <div class="col-md-2 col-lg-2 col-xl-4 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="bi bi-gear-fill me-3"></i>Tecnologías Utilizadas</h6>
            <div class="d-flex">
              <div class="tecno1">
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
              </div>
              <div>
                <p>VUEJS</p>
                <p>EXPRESSJS</p>
              </div>
            </div>

          </div>

          <!-- Contacto -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="bi bi-envelope-fill me-3"></i>Contacto</h6>
            <p><i class="bi bi-geo-alt-fill me-3"></i>Temuco, Chile</p>
            <p><i class="bi bi-book me-3"></i>Universidad de la Frontera</p>
            <p><i class="bi bi-at me-3"></i>g.aillapan01@ufromail.cl</p>
            <p><i class="bi bi-at me-3"></i>d.ruiz03@ufromail.cl</p>
          </div>
        </div>
      </div>
    </section>
  </footer>
  <!-- Copyright -->
  <div class="copyright text-center p-4">
      © 2023 Copyright: LaLiga Premier
    </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style>
#footer {
  margin-top: 6%;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
}

.img-footer {
  text-align: center;
  margin: 10px;
  margin-right: 40px;
}

.footer {
  margin-top: 6%;
  background-color: #44115C;
  
}

.tecno1 {
  margin-right: 50px;
}

.nosotros a{
  text-decoration: underline;
  color: #B1A3C7;
}

.copyright{
  background-color: #180026;
  color: #B1A3C7;
}

.gris{
  color: #B1A3C7;
}
</style>