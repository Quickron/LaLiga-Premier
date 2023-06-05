<template>

        <img class="img-camiseta" :src="camiseta.imagen" />
        <div class="card-body tarjeta-cuerpo">
            <h6 class="nombreCamisetaListado pt-1">{{ camiseta.nombre }}</h6>
            <div class="d-flex align-items-center product"> <span class="fas fa-star"></span> <span
                    class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                <span class="far fa-star"></span>
            </div>
            <div class="d-flex align-items-center justify-content-between pt-3 p-2">
                <div class="d-flex flex-column">
                    <div>
                        <strong class="fs-4">${{ camiseta.precio }}</strong>
                    </div>
                </div>
                <router-link to="detalle/id">
                    <a class="btn btn-detalles px-2">Ver Detalles</a>
                </router-link>
            </div>
        </div>
</template>

<script>
export default {
    name: "TarjetaCamiseta",
    props: {
        camiseta: {
            nombre: "",
            precio: 0,
        }
    },
}
</script>

<style>
</style>