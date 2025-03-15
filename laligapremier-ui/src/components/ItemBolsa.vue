<template>
    <hr>
    <div class="col-md-2 col-lg-2 col-xl-2">
        <img class="img-fluid rounded-3" :src="itemBolsa.camisetaBolsa.imagenes[0]" style="height: 60px; width: 60px;" />
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3">
        <h6 class="text-black mb-0">{{ itemBolsa.camisetaBolsa.nombre }}</h6>
        <h6 class="text-muted">Talla {{ itemBolsa.camisetaBolsa.itemsCamiseta.talla}}</h6>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 d-flex justify-content-center">
        <h6 class="mb-0">${{ itemBolsa.camisetaBolsa.precio }}</h6>
    </div>
    <div class="col-md-3 col-lg-4 col-xl-2 d-flex">
        <h6 class="mb-0">{{ itemBolsa.camisetaBolsa.itemsCamiseta.cantidad }} Unidades</h6>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 d-flex justify-content-center">
        <h6 class="mb-0">${{ precioPorCantidad }}</h6>
    </div>
    <div class="col-lg-1">
        <button class="btn" data-mdb-toggle="tooltip" title="Eliminar" @click="eliminarItemBolsa"><i
                    class="bi bi-trash-fill text-danger"></i></button>
    </div>
    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "ItemBolsa",
    props: {
        itemBolsa: Object,
    },
    data() {
        return {
            precioPorCantidad: 0,
        }
    },
    async mounted() {
        console.log(this.camiseta)
        this.precioPorCantidad = this.itemBolsa.camisetaBolsa.itemsCamiseta.cantidad * this.itemBolsa.camisetaBolsa.precio;
    },
    methods: {
        eliminarItemBolsa() {
            const token = localStorage.getItem('token');
            if (token != null) {
                axios.delete(`https://la-liga-premier.vercel.app/eliminar-item-bolsa/${this.itemBolsa._id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(response => {
                    this.camisetas = response.data;
                    window.location.href = '/bolsa';
                })
                    .catch(error => {
                        console.error(error);
                    });

            }
        }
    }
}
</script>

<style></style>
