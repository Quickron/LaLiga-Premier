<template>
    <tr class="fw-normal">
        <th>
            <img class="hadow-1-strong rounded-circle" style="width: 55px; height: auto;" :src="camiseta.imagenes[0]" />
        </th>
        <td class="align-middle">
            <span>{{ camiseta.nombre }}</span>
        </td>
        <td class="align-middle">
            <router-link :to="{
                name: 'editar-camiseta',
                params:{
                    idCamiseta : this.camiseta._id
                }
            }" title="Editar"><i
                    class="bi bi-pencil-fill text-primary me-3"></i></router-link>
            <button class="btn" data-mdb-toggle="tooltip" title="Eliminar" @click="eliminarCamiseta"><i
                    class="bi bi-trash-fill text-danger"></i></button>
        </td>
    </tr>
</template>

<script>
import axios from 'axios';
export default {
    name: "CamisetasTable",
    props: {
        camiseta: Object
    },
    methods: {
        eliminarCamiseta() {
            const token = localStorage.getItem('token');
            if (token != null) {
                axios.delete(`https://la-liga-premier.vercel.app//eliminar-camiseta/${this.camiseta._id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(response => {
                    this.camisetas = response.data;
                    window.location.href = '/registro-camisetas';
                })
                    .catch(error => {
                        console.error(error);
                    });

            }
        }
    }
}
</script>

<style scoped>
.cuerpo-tareas {
    margin-top: 4%;
    margin-left: 10%;
    width: 80%;
}
</style>
