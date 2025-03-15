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
import axios from 'axios';
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
    },
    methods: {
        enviarForm() {
            if (this.correoInvalido || this.claveInvalida) {
                this.error = true;
                this.sent = false;
                return;
            }
            this.error = false;
            this.sent = true;
            axios.post('https://la-liga-premier.vercel.app/auth/login', this.usuario)
                .then(response => {
                    const { usuario, token } = response.data;
                    localStorage.setItem('token', token);
                    console.log(usuario);
                    console.log(response.data);
                    window.location.href = '/';
                    this.resetForm();
                })
                .catch(error => {
                    console.error(error);
                    this.resetForm();
                });
            
        },
        resetForm() {
            this.usuario = {
                error: false,
                sent: false,
                correo: "",
                clave: "",
            };
        },
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
