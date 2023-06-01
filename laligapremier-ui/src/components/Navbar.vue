<template>
    <div class="seccion-cuenta">
        <ul class="mb-2 mb-lg-0" style="list-style: none">
            <li class="d-flex">
                <i class="bi bi-person-circle"></i>
                <a class="nav-link mt-lg-1" id="iniciar-sesion">Iniciar Sesión</a>
                <span class="nav-link mt-lg-1">|</span>
                <a class="nav-link mt-lg-1">Registrarse</a>
            </li>
        </ul>
    </div>
    <nav class="navbar navbar-expand-lg">
        <div class="contenedor">

            <div class="barra">
                <div>
                    <router-link to="/">
                        <img src="@/assets/logo.png" alt="Logo" class="logo" />
                    </router-link>
                </div>

                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mt-lg-2">
                            <li class="nav-item">
                                <a class="nav-link">Selecciones</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Clubes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Hombre</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Mujer</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Niño</a>
                            </li>
                        </ul>
                        <div class="busqueda-bolsa">
                            <form class="d-flex" role="search">
                                <div class="input-group">
                                    <input class="form-control input-busqueda" type="search" placeholder="Buscar"
                                        name="query" id="query" />
                                    <div class="input-group-append">
                                        <button class="btn mt-1" type="submit">
                                            <i class="bi bi-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <a class="btn btn-navbar btn-bolsa" role="button">
                                <i class="bi bi-bag"></i>
                            </a>
                        </div>
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
    width: 120px;
    height: 50px;
    margin-left: 20px;
    margin-bottom: 5px;
}

.navbar-nav {
    display: flex;
    justify-content: center;
}

.nav-link {
    color: black;
    margin-left: 10px;
}

.nav-link:hover {
    color: #44115c;
    font-weight: bold;
}

.busqueda-bolsa {
    display: flex;
}

.btn-bolsa {
    background-color: white;
    font-size: 20px;
    margin-left: 15px;
    margin-right: 30px;
}

.titulo {
    margin: 30px;
}

.bi-person-circle {
    font-size: 20px;
    margin: auto;
}

.input-busqueda {
    border-radius: 18px;
    border-right: 0px;
}

.input-group-append {
    border: 1px solid #E6E6E6;
    border-left: 0px;
    border-radius: 18px;
}
</style>