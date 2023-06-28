<template>
    <hr>
    <div class="col-md-2 col-lg-2 col-xl-2">
        <img class="img-fluid rounded-3" :src="camiseta.imagenes[0]" style="height: 60px; width: 60px;" />
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3">
        <h6 class="text-black mb-0">{{ camiseta.nombre }}</h6>
        <h6 class="text-muted">Talla {{ camiseta.itemsCamiseta.talla}}</h6>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 d-flex justify-content-center">
        <h6 class="mb-0">${{ camiseta.precio }}</h6>
    </div>
    <div class="col-md-3 col-lg-4 col-xl-2 d-flex">
        <h6 class="mb-0">{{ camiseta.itemsCamiseta.cantidad }} Unidades</h6>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 d-flex justify-content-center">
        <h6 class="mb-0">${{ precioPorCantidad }}</h6>
    </div>
    <div class="col-lg-1">
        <a href="/" data-mdb-toggle="tooltip" title="Eliminar"><i class="bi bi-trash-fill text-danger"></i></a>
    </div>
    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
    </div>
</template>

<script>
export default {
    name: "ItemBolsa",
    props: {
        camiseta: Object,
    },
    data() {
        return {
            precioPorCantidad: 0,
        }
    },
    async mounted() {
        this.precioPorCantidad = this.camiseta.itemsCamiseta.cantidad * this.camiseta.precio;
    }
}
</script>

<style></style>