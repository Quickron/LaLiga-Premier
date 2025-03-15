<template>
    <div class="modal fade" id="registroModal" tabindex="-1" aria-labelledby="registroModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="enviarForm">
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Nombre de Usuario</label>
                            <input v-model="usuario.nombre" type="text" class="form-control" id="recipient-name"
                                :class="{ 'is-invalid': error && nombreInvalido }">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Correo Electrónico</label>
                            <input v-model="usuario.correo" type="email" class="form-control" id="recipient-name"
                                :class="{ 'is-invalid': error && correoInvalido }">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Contraseña</label>
                            <input v-model="usuario.clave" type="password" class="form-control" id="message-text"
                                :class="{ 'is-invalid': error && claveInvalida }">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Repetir Contraseña</label>
                            <input v-model="claveRepetida" type="password" class="form-control" id="message-text"
                                :class="{ 'is-invalid': error && (claveRepetidaInvalida || clavesNoCoinciden) }">
                        </div>
                        <div class="col-md-12">
                            <div v-if="error" class="alert alert-danger" role="alert">
                                ¡Debes rellenar todos los campos!
                            </div>
                            <div v-if="clavesNoCoinciden" class="alert alert-danger" role="alert">
                                ¡Las contraseñas deben coincidir!
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-popup">Guardar</button>
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
    name: "RegistroForm",
    data() {
        return {
            usuario: {
                sent: false,
                error: false,
                nombre: "",
                correo: "",
                clave: "",
                rol: "usuario",
            },
            claveRepetida: "",
        }
    },
    computed: {
        nombreInvalido() {
            return this.usuario.nombre.length < 1;
        },
        correoInvalido() {
            return this.usuario.correo.length < 1;
        },
        claveInvalida() {
            return this.usuario.clave.length < 1;
        },
        claveRepetidaInvalida() {
            return this.claveRepetida.length < 1;
        },
        clavesNoCoinciden() {
            return this.usuario.clave != this.claveRepetida;
        },
    },
    methods: {
        enviarForm() {
            if (this.nombreInvalido || this.correoInvalido || this.claveInvalida || this.claveRepetidaInvalida || this.clavesNoCoinciden) {
                this.error = true;
                this.sent = false;
                return;
            }
            this.error = false;
            this.sent = true;
            axios.post('https://la-liga-premier.vercel.app/auth/register', this.usuario)
                .then(response => {
                    console.log(response.data);
                    window.location.href = '/';
                })
                .catch(error => {
                    console.error(error);
                });

            this.resetForm();
        },
        resetForm() {
            this.usuario = {
                nombre: "",
                correo: "",
                clave: "",
                rol: "usuario",
            },
                this.claveRepetida = "";
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
