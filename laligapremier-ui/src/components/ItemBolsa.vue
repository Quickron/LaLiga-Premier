<template>
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

        <input id="form1" min="1" name="quantity" :value="camiseta.itemsCamiseta.cantidad" type="number" class="form-control form-control-sm" />
        <a class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
            <i class="bi bi-plus-circle-fill"></i>
        </a>
        <a class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
            <i class="bi bi-dash-circle-fill"></i>
        </a>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 d-flex justify-content-center">
        <h6 class="mb-0">$99999</h6>
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
}
</script>

<style></style>