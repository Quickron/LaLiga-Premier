<template>
    <tr class="fw-normal">
        <th>
            <img class="hadow-1-strong rounded-circle" style="width: 55px; height: auto;" :src="camiseta.imagenes[0]" />
        </th>
        <td class="align-middle">
            <span>{{ camiseta.nombre }}</span>
        </td>
        <td class="align-middle">
            <a href="/editar-camiseta" data-mdb-toggle="tooltip" title="Editar"><i
                    class="bi bi-pencil-fill text-primary me-3"></i></a>
            <a href="/eliminar-camiseta" data-mdb-toggle="tooltip" title="Eliminar"><i
                    class="bi bi-trash-fill text-danger"></i></a>
        </td>
    </tr>
</template>

<script>
export default {
    name: "CamisetasTable",
    props: {
        camiseta: Object
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