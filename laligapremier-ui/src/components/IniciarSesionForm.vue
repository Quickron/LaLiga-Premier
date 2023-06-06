<template>
    <div class="modal fade" id="iniciarSesionModal" tabindex="-1" aria-labelledby="iniciarSesionModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header d-flex">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    <h5 class="modal-title" id="exampleModalLabel">Iniciar Sesión</h5>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="enviarForm">
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Correo Electrónico</label>
                            <input v-model="usuario.correo" type="email" class="form-control" id="recipient-name"
                                :class="{ 'is-invalid': error && correoInvalido }">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Contraseña</label>
                            <input v-model="usuario.clave" type="password" class="form-control mb-2" id="message-text"
                                :class="{ 'is-invalid': error && claveInvalida }">
                            <a href="/" class="olvidar-contraseña">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div v-if="error" class="alert alert-danger" role="alert">
                                    ¡Debes rellenar todos los campos!
                                </div>
                                <div v-if="error && usuarioNoRegistrado" class="alert alert-danger" role="alert">
                                    No está registrado, debe crearse una cuenta para acceder.
                                </div>
                                <div v-if="error && clavesNoCoinciden" class="alert alert-danger" role="alert">
                                    ¡Contraseña incorrecta!
                                </div>
                                <div v-if="sent" class="alert alert-success" role="alert">
                                    ¡El usuario se ha logeado correctamente!
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-popup">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { obtenerUsuariosRegistrados } from '@/mocks/usuario'
export default {
    name: "IniciarSesionForm",
    data() {
        return {
            usuario: {
                sent: false,
                error: false,
                correo: "",
                clave: "",
            },
            usuariosRegistrados: [],
        }
    },
    computed: {
        correoInvalido() {
            return this.usuario.correo.length < 1;
        },
        claveInvalida() {
            return this.usuario.clave.length < 1;
        },
        usuarioNoRegistrado() {
            return this.compararCorreos();
        },
        clavesNoCoinciden() {
            return this.compararClaves();
        },
    },
    async mounted() {
        this.usuariosRegistrados = obtenerUsuariosRegistrados;
    },
    methods: {
        enviarForm() {
            if (this.correoInvalido || this.claveInvalida || this.usuarioNoRegistrado || this.clavesNoCoinciden) {
                this.error = true;
                this.sent = false;
                return;
            }
            this.error = false;
            this.sent = true;
            console.log(this.usuario)
            this.$emit("usuario-login", this.usuario);
            this.resetForm();
        },
        resetForm() {
            this.usuario = {
                error: false,
                sent: false,
                correo: "",
                clave: "",
            };
        },
        compararCorreos() {
            let distintos = true;
            this.usuariosRegistrados.forEach(usuario => {
                if(usuario.correo === this.usuario.correo){
                    distintos = false
                }
            });
            return distintos;
        },
        compararClaves() {
            let distintos = true;
            this.usuariosRegistrados.forEach(usuario => {
                if(usuario.correo === this.usuario.correo && usuario.clave === this.usuario.clave){
                    distintos = false
                }
            });
            return distintos;
        }
    },
}
</script>

<style scoped>
.modal-content {
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

.olvidar-contraseña {
    color: white;
}

.olvidar-contraseña:hover {
    color: lightgray;
}

.modal-footer {
    border: none;
    display: flex;
    justify-content: center;
}

.btn-popup {
    background-color: black;
    color: white;
    font-weight: bold;
}

.btn-popup:hover {
    background-color: #130c3a;
    color: white;
    font-weight: bold;
}
</style>