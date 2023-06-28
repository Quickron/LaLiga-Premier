<template>
    <form @submit.prevent="enviarForm">

        <h3 class="titulo-ver-camiseta">{{ camiseta.nombre }}</h3>

        <p class="desc-ver-camiseta">{{ camiseta.descripcion }}</p>

        <h4 class="precio">${{ camiseta.precio }}</h4>

        <div class="tallas mt-4" v-if="stock > 0">
            <h6 class="talla-txt">Para</h6>

            <label class="radio talla mx-4">
                <input type="radio" class="btn-check" name="publico" id="hombre" value="Hombre" v-model="publico">
                <label class="btn btn-radio" for="hombre">Hombre</label>
            </label>
            <label class="radio talla mx-1">
                <input type="radio" class="btn-check" name="publico" id="mujer" value="Mujer" v-model="publico">
                <label class="btn btn-radio" for="mujer">Mujer</label>
            </label>

        </div>

        <div class="tallas mt-4" v-if="stock > 0">
            <h6 class="talla-txt">Talla</h6>

            <label class="radio talla mx-1" v-for="(tallaString, index) in tallas" :key="index">
                <input type="radio" class="btn-check" name="tallas" :id="index" :value="tallaString" v-model="talla">
                <label class="btn btn-radio" :for="index">{{ tallaString }}</label>
            </label>

        </div>

        <div class="mt-4 bloque-cantidad" v-if="stock > 0">
            <div class="cantidad-input">
                <h6 class="cantidad">Cantidad </h6>
                <input type="number" min="1" class="casilla-cantidad" v-model="cantidad">
                <button class="btn btn-cantidad rounded-pill" @click="incrementar">+</button>
                <button class="btn btn-cantidad rounded-pill" @click="disminuir">-</button>
                <div class="alert alert-danger" role="alert" v-if="cantidad > stock">
                    ¡No quedan suficientes unidades! Selecciona un valor menor.
                </div>
            </div>
        </div>
        <div class="col-md-12" v-else>
            <div class="alert alert-danger" role="alert">
                ¡Camiseta Agotada! Consulta más tarde.
            </div>
        </div>

        <div class="action d-flex justify-content-center" v-if="stock > 0 && stock >= cantidad">
            <a class="btn btn-bolsa-camiseta" type="submit" href="/bolsa">Añadir a la bolsa</a>
        </div>
        <div class="action d-flex justify-content-center" v-else>
            <button class="btn btn-bolsa-camiseta disabled" type="submit">Añadir a la bolsa</button>
        </div>

    </form>
</template>

<script>
import { obtenerItemCamiseta, obtenerTallasPorCamiseta } from '@/mocks/camiseta'
export default {
    name: "DetalleCamisetaForm",
    props: {
        camiseta: {
            type: Object,
        }
    },
    data() {
        return {
            tallas: [],
            cantidad: 1,
            talla: "",
            publico: "",
            stock: 0,
            camisetaBolsa: Object,
            itemBolsa: Object,
        }
    },
    async mounted() {
        this.tallas = obtenerTallasPorCamiseta(this.camiseta).tallas;
        this.stock = obtenerItemCamiseta(this.camiseta).itemCamiseta.stock;
    },
    computed: {
        nombreInvalido() {
            return this.camiseta.nombre.length < 1;
        },
    },
    methods: {
        incrementar(event) {
            event.preventDefault(); // Evitar el envío del formulario
            this.cantidad++;
            const input = event.target.parentNode.querySelector('input[type=number]');
            input.stepUp();
        },
        disminuir(event) {
            event.preventDefault(); // Evitar el envío del formulario
            if (this.cantidad > 1) {
                this.cantidad--;
            }
            const input = event.target.parentNode.querySelector('input[type=number]');
            input.stepDown();
        },
        enviarForm() {
            if (this.nombreInvalido) {
                this.error = true;
                this.sent = false;
                return;
            }
            this.error = false;
            this.sent = true;

            this.camisetaBolsa = {
                imagenes: this.camiseta.imagenes,
                nombre: this.camiseta.nombre,
                descripcion: this.camiseta.descripcion,
                equipo: this.camiseta.equipo,
                liga: this.camiseta.liga,
                precio: this.camiseta.precio,
                temporada: this.camiseta.temporada,
                tipo: this.camiseta.tipo,
                marca: this.camiseta.marca,
                dorsal: this.camiseta.dorsal,
                jugador: this.camiseta.jugador,
                itemsCamista: {
                    publico: this.publico,
                    talla: this.talla,
                    stock: this.cantidad,
                }
            }
            this.$emit("camiseta-bolsa", this.camisetaBolsa);
            this.resetForm();
        },
        resetForm() {
            this.cantidad = 1,
                this.talla = "",
                this.publico = ""

        }
    }
}
</script>

<style scoped>
    .titulo-ver-camiseta {
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 5%;
}

.precio {
  font-weight: bold;
}

.bloque-cantidad {
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

.casilla-cantidad {
  width: 16%;
  height: 50%;
  margin-right: 5%;
  margin-top: 2%;
}

.btn-cantidad {
  background-color: white;
  margin-right: 2%;
  height: 80%;
  font-weight: bold;
  padding-bottom: 3%;
}

.btn-radio {
  background-color: #44115C;
  color: white;
}

.btn-radio:hover {
  background-color: #180026;
  color: white;
}

.btn-check:checked+.btn-radio {
  background-color: #180026;
  color: white;
}

.tallas {
  display: flex;
  margin-right: 15%;
}

.talla-txt {
  font-weight: bold;
  text-align: start;
}

.btn-bolsa-camiseta {
  margin-top: 8%;
  background-color: black;
  font-weight: bold;
  color: white;
}

.btn-bolsa-camiseta:hover {
  background-color: #180026;
  font-weight: bold;
  color: white;
}
</style>