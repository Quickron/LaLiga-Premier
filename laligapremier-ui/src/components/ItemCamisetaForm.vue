<template>
    <form @submit.prevent="sendForm">
        <div class="container">
            <div class="row mb-3">
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Público</label>
                        <div>
                            <select v-model="itemCamiseta.publico" class="form-select">
                                <option v-for="(genero, index) in publico" :key="index">{{ genero }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Talla</label>
                        <div>
                            <select v-model="itemCamiseta.talla" class="form-select">
                                <option v-for="(talla, index) in tallas" :key="index">{{ talla }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Stock</label>
                        <input v-model="itemCamiseta.stock" type="number" min="1" class="form-control" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div v-if="error" class="alert alert-danger" role="alert">
                        ¡Debes rellenar todos los campos!
                    </div>
                    <div v-if="sent" class="alert alert-success" role="alert">
                        El item ha sido agregada correctamente!
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-12">
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">
                            Añadir Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { obtenerTallas, obtenerPublico } from '@/mocks/camiseta'
export default {
    name: "ItemCamisetaForm",
    data() {
        return {
            sent: false,
            error: false,
            itemCamiseta: {
                publico: "",
                talla: "",
                stock: 1,
            },
            tallas: [],
            publico: [],
        }
    },
    async mounted() {
        this.tallas = obtenerTallas;
        this.publico = obtenerPublico;
    },
    computed: {
        publicoInvalido() {
            return this.itemCamiseta.publico.length < 1;
        },
        tallaInvalida() {
            return this.itemCamiseta.talla.length < 1;
        },
        stockInvalido() {
            return this.itemCamiseta.stock.length < 1;
        },
    },
    methods: {
        sendForm() {
            if (this.publicoInvalido || this.tallaInvalida || this.stockInvalido) {
                this.error = true;
                this.sent = false;
                return;
            }
            this.error = false;
            this.sent = true;
            this.$emit("agregar-item", this.itemCamiseta);
            this.resetForm();
        },
        resetForm() {
            this.itemCamiseta = {
                publico: "",
                talla: "",
                stock: 1,
            };
        },
    },
}
</script>

<style></style>