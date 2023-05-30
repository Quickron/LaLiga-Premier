<template>
    <nav class="navbar navbar-expand-lg">
        <div class="contenedor">
            <div class="seccion-cuenta">
                <ul class="mb-2 mb-lg-0" style="list-style: none">
                    <li>
                        <a class="btn" role="button">Iniciar Sesión</a>
                        <span>|</span>
                        <a class="btn" role="button">Registrarse</a>
                    </li>
                </ul>
            </div>
            <div class="barra">
                <div>
                    <img src="@/assets/logo.png" alt="Logo" class="logo" />
                </div>

                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page">
                                    <router-link to="/">Inicio</router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Equipos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Selecciones</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"><router-link to="/nosotros">Nosotros</router-link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Pedidos</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Buscar" name="query" id="query" />
                            <button class="btn btn-navbar" type="submit" style="background-color: white">
                                🔍︎
                            </button>
                        </form>
                        <ul class="mb-2 mb-lg-0" style="list-style: none">
                            <li>
                                <a class="btn btn-navbar btn-carrito" role="button">🛒</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style>
.contenedor {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.seccion-cuenta {
    background-color: #E6E6E6;
    padding: 10px;
    display: flex;
    justify-content: end;
}

.barra {
    margin-top: 10px;
    display: flex;
    border-bottom: 1px solid #E6E6E6;
}

.logo {
    width: 130px;
    height: 50px;
    margin-left: 20px;
}

.nav-link {
    color: black;
}

.nav-link a:hover {
    color: gray;
}

.btn-carrito {
    background-color: white;
    font-size: 20px;
}

.titulo {
    margin: 30px;
}

.bg-recuperar-contraseña {
    background-color: #c8d6e0;
}
</style>