<template>

    <!-- Barra de Cuentas -->
    <div class="seccion-cuenta">
        <ul class="mb-2 mb-lg-0" style="list-style: none">
            <li class="d-flex">
                <i class="bi bi-person-circle"></i>
                <a class="link-cuenta mt-lg-1" id="iniciar-sesion" data-bs-toggle="modal" data-bs-target="#iniciarSesionModal">Iniciar Sesión</a>
                <span class="mt-lg-1 ms-3 me-1">|</span>
                <a class="link-cuenta mt-lg-1 me-4" data-bs-toggle="modal" data-bs-target="#registroModal">Registrarse</a>
            </li>
        </ul>
    </div>

    <!-- Pop Up de Iniciar Sesión -->
    <div class="modal fade" id="iniciarSesionModal" tabindex="-1" aria-labelledby="iniciarSesionModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header d-flex">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    <h5 class="modal-title" id="exampleModalLabel">Iniciar Sesión</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Correo Electrónico</label>
                            <input type="email" class="form-control" id="recipient-name">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Contraseña</label>
                            <input type="password" class="form-control mb-2" id="message-text">
                            <a href="/" class="olvidar-contraseña">¿Olvidaste tu contraseña?</a>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-popup">Entrar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Pop Up de Registro -->
    <div class="modal fade" id="registroModal" tabindex="-1" aria-labelledby="registroModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Nombre de Usuario</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Correo Electrónico</label>
                            <input type="email" class="form-control" id="recipient-name">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Contraseña</label>
                            <input type="password" class="form-control" id="message-text">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Repetir Contraseña</label>
                            <input type="password" class="form-control" id="message-text">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-popup">Guardar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg">
        <div class="contenedor">

            <div class="barra">

                <!-- Logo -->
                <div>
                    <router-link to="/">
                        <img src="@/assets/logo.png" alt="Logo" class="logo" />
                    </router-link>
                </div>

                <!-- Links -->
                <div class="container-fluid">

                    <!-- Esconde navbar cuando no hay suficiente resolución  -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Navbar en sí -->
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

                        <!-- Parte central del navbar -->
                        <div class="busqueda-bolsa">

                            <!-- Barra de búsqueda -->
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

                            <!-- Botón de favoritos -->
                            <a class="btn btn-navbar btn-favoritos" role="button">
                                <i class="bi bi-heart"></i>
                            </a>

                            <!-- Botón de bolsa -->
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

<style scoped>
.contenedor {
    display: flex;
    flex-direction: column;
    width: 100%;
}

/* ----- Barra Cuenta ----- */
.seccion-cuenta {
    background-color: #E6E6E6;
    padding: 10px;
    display: flex;
    justify-content: end;
}

.link-cuenta {
    color: black;
    margin-left: 10px;
    text-decoration: none;
}

.link-cuenta:hover {
    color: black;
    font-weight: bolder;
    font-size: 16px;
    cursor: pointer;
}

/* ----- Pop Ups ----- */

.modal-content{
    background-color: #2B1E70;
    color: white;
    text-align: start;
}

.modal-header {
    flex-direction: column;
    text-align: center;
    background-color: #130c3a;
    border: none;
}

.olvidar-contraseña{
    color: white;
}

.olvidar-contraseña:hover{
    color: lightgray;
}

.modal-footer{
    border: none;
    display: flex;
    justify-content: center;
}

.btn-popup{
    background-color: black;
    color: white;
    font-weight: bold;
}

.btn-popup:hover{
    background-color: #130c3a;
    color: white;
    font-weight: bold;
}

/* ----- Navbar----- */
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
    color: black;
    font-weight: bolder;
    font-size: 18px;
    border-bottom: 2px solid black;
}

.busqueda-bolsa {
    display: flex;
}

.btn-bolsa {
    background-color: white;
    font-size: 20px;
    margin-left: 10px;
    margin-right: 30px;
}

.btn-bolsa:hover {
    background-color: black;
    color: white;
}

.btn-favoritos {
    background-color: white;
    font-size: 20px;
    margin-left: 15px;
}

.btn-favoritos:hover {
    background-color: black;
    color: white;
}

.bi-person-circle {
    font-size: 20px;
    margin: auto;
}

/* ----- Barra de búsqueda ----- */
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