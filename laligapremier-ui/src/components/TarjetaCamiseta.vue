<template>
    <img class="img-camiseta" :src="camiseta.imagenes[0]" />
    <div class="card-body tarjeta-cuerpo">
        <h6 class="nombreCamisetaListado pt-1">{{ camiseta.nombre }}</h6>
        <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
            <span class="fas fa-star"></span> <span class="fas fa-star"></span>
            <span class="far fa-star"></span>
        </div>
        <div class="d-flex align-items-center justify-content-between pt-3 p-2">
            <div class="d-flex flex-column">
                <div>
                    <strong class="fs-4">${{ camiseta.precio }}</strong>
                </div>
            </div>
            <router-link :to="`detalle/${camiseta._id}`">
                <a class="btn btn-detalles px-2">Ver Detalles</a>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "TarjetaCamiseta",
    props: {
        camiseta: Object
    },
}
</script>

<style scoped>
.nombreCamisetaListado{
  font-weight: bold;
}

.img-camiseta {
  height: 300px;
  width: 100%;
  padding: 5%;
  padding-left: 8%;
  padding-right: 8%;
  margin-top: -8%;
}

.btn-detalles{
  background-color: black;
  color: white;
  font-weight: bold;
}

.btn-detalles:hover{
  background-color: #180026;
  color: white;
  font-weight: bold;
}
</style>