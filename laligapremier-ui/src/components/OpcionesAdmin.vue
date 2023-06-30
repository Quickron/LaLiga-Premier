<template>
    <button class="btn btn-admin" type="button" data-bs-toggle="offcanvas" data-bs-target="#adminSidebar"><i class="bi bi-gear-fill me-3"></i></button>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="adminSidebar">
        <div class="offcanvas-header titulo-admin">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">ADMIN</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body contenedor-admin">
            <a href="/"><i class="bi bi-plus-square-fill"></i> Agregar Camiseta</a>
            <a href="/"><i class="bi bi-list-task"></i> Todas las Camisetas</a>
            <a href="/"><i class="bi bi-bar-chart-line-fill"></i> Estadísticas</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "OpcionesAdmin",
}
</script>

<style scoped>
.btn-admin {
    font-size: 20px; 
    width: 25%;
}

.titulo-admin {
    background-color: #D9D9D9;
}

.contenedor-admin {
    display: flex;
    flex-direction: column;
}

.contenedor-admin a {
    text-decoration: none;
    color: black;
    margin: 10%;
}

.contenedor-admin a:hover {
    font-weight: bolder;
    font-size: 20px;
}

</style>