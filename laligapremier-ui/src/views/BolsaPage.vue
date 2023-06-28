<template>
  <section class="h-100 h-custom">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12">
                <div class="card card-registration card-registration-2" style="border-radius: 15px;">

                    <div class="card-body p-0">
                        <div class="row g-0">

                            <div class="col-lg-9">
                                <div class="p-5">
                                    <div class="d-flex justify-content-between align-items-center mb-5">
                                        <h1 class="fw-bold mb-0 text-black" th:text="${titulo}"></h1>
                                    </div>

                                    <hr class="my-4">
                                    <h4 v-if="itemsBolsa.length == 0">No hay camisetas en el carrito</h4>

                                    <div class="row mb-4 d-flex justify-content-between align-items-center" v-for="(itemBolsa, index) in itemsBolsa" :key="index">
                                        <ItemBolsa :camiseta="itemBolsa.camisetaBolsa"></ItemBolsa>
                                    </div>

                                    <hr class="my-4">

                                    <div class="pt-5">
                                        <h6 class="mb-0"><a href="/" class="text-body"><i class="bi bi-arrow-left-square-fill"></i> Volver a la tienda</a></h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 resumen">
                                <div class="p-4">
                                    <h3 class="fw-bold mb-5 mt-2 pt-1">Resumen</h3>
                                    <hr class="my-4">

                                    <div class="d-flex justify-content-between mb-4">
                                        <h5 class="text-uppercase">Camisetas</h5>
                                        <h5>1</h5>
                                    </div>

                                    <hr class="my-4">

                                    <div class="d-flex justify-content-between mb-5">
                                        <h5 class="text-uppercase">Precio Total</h5>
                                        <h5>$99999</h5>
                                    </div>

                                    <a href="/" type="button" class="btn btn-dark btn-block btn-lg"
                                            data-mdb-ripple-color="dark">Pagar</a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { obtenerUsuarioSesion } from '@/mocks/usuario'
import { obtenerItemsBolsaPorUsuario } from '@/mocks/itemBolsa'
import ItemBolsa from '@/components/ItemBolsa.vue'
export default {
    name: "BolsaPage",
    components: {
        ItemBolsa
    },
    data() {
        return {
            itemsBolsa: [],
            usuario: Object,
        }
    },
    async mounted() {
        this.usuario = obtenerUsuarioSesion;
        this.itemsBolsa = obtenerItemsBolsaPorUsuario(this.usuario.nombre).itemsBolsa;
    },
}
</script>

<style scoped>
.resumen {
    background-color: #c8d6e0;
}
</style>