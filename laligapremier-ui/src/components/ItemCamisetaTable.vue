<template>
    <div id="product-table">
        <!-- Mensaje que muestra cuando el array esté vacío -->
        <div v-if="!itemsCamiseta.length" class="alert alertinfo" role="alert">
            No se han agregado items
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Público</th>
                    <th>Talla</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(itemCamiseta, index) in itemsCamiseta" :key="index">
                    <td>{{ itemCamiseta.publico }}</td>
                    <td>{{ itemCamiseta.talla }}</td>
                    <td>{{ itemCamiseta.stock }}</td>
                    <td>
                        <button class="btn btn-danger" @click="$emit('eliminar-item', index)">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
   

<script>
import { obtenerTallas, obtenerPublico } from '@/mocks/camiseta'
export default {
    name: "ItemCamisetaTable",
    data() {
        return {
            tallas: [],
            publico: [],
        };
    },
    props: {
        itemsCamiseta: {
            type: Array,
            default: () => [],
        }
    },
    async mounted() {
        this.tallas = obtenerTallas;
        this.publico = obtenerPublico;
    },

};
</script>