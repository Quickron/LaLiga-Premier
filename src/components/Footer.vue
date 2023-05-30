<template>
  <footer
    class="text-center text-lg-start bg-light text-muted border-top footer"
    th:fragment="footer"
  >
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <!-- Nosotros -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="bi bi-info-circle-fill me-3"></i>LaLiga Premier
            </h6>
            <a class="text-reset me-3" th:href="@{/nosotros}">Nosotros</a>
          </div>

          <!-- Tecnologías -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Tecnologías Utilizadas</h6>
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVA</p>
            <p>SPRING BOOT</p>
          </div>

          <!-- Contacto -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
            <p><i class="bi bi-geo-alt-fill me-3"></i> Temuco, Chile</p>
            <p><i class="bi bi-book me-3"></i> Universidad de la Frontera</p>
            <p><i class="bi bi-at me-3"></i>g.aillapan01@ufromail.cl</p>
            <p><i class="bi bi-at me-3"></i>d.ruiz03@ufromail.cl</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright -->
    <div
      class="text-center p-4 border-top"
      style="background-color: rgba(0, 0, 0, 0.05)"
    >
      © 2023 Copyright: LaLiga Premier
      <div class="img-footer">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </div>
    </div>
  </footer>
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
}

.img-footer {
    text-align: center;
    margin: 10px;
    margin-right: 40px;
}

.footer {
    margin-top: 6%;
}
</style>