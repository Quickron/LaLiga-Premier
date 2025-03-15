<template>
    <div class="container py-4">
        <div class="card bg-light">
            <h4 class="card-header">Crear Dato Relevante</h4>
            <div class="card-body">

                <form enctype="multipart/form-data" @submit.prevent="enviarForm">

                    <div class="form-group row py-2">
                        <label class="col-sm-2 col-form-label">Seleccionar Camisetas</label>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <select class="form-control" v-model="camiseta">
                                    <option v-for="(camiseta, index) in camisetasBD" :key="index" :value="camiseta">{{
                                        camiseta.nombre }}</option>
                                </select>
                                <button class="btn btn-dark" @click.prevent="agregarCamiseta">+</button>
                            </div>
                        </div>
                    </div>
                    <div v-for="(camiseta, index) in datoRelevante.camisetas" :key="index" class="ml-2">{{ camiseta.nombre}}</div>

                    <div class="form-group row py-2">
                        <label class="col-sm-2 col-form-label">Categoría</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" v-model="datoRelevante.categoria" />
                        </div>
                    </div>
                    <div class="form-group row py-2">
                        <label class="col-sm-2 col-form-label">Descripción</label>
                        <div class="col-sm-6">
                            <textarea type="text" rows="3" class="form-control"
                                v-model="datoRelevante.descripcion"></textarea>
                        </div>
                    </div>
                    <div class="form-group row py-2">

                        <div class="col-md-12">
                            <div v-if="error" class="alert alert-danger" role="alert">
                                ¡Debes rellenar todos los campos!
                            </div>
                            <div v-if="sent" class="alert alert-success" role="alert">
                                ¡La camiseta se ha registrado correctamente!
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="mt-5 btn-publicar">
                                <input type="submit" value="Registrar" class="btn btn-dark" />
                                <tr></tr>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'RegistrarDatosRelevantesPage',
    data() {
        return {
            datoRelevante: {
                camisetas: [],
                categoria: "",
                descripcion: "",
            },
            camiseta: Object,
            camisetasBD: [],
            sent: false,
            error: false,
        }
    },
    computed: {
        camisetasInvalidas() {
            return this.datoRelevante.camisetas.length < 1;
        },
        categoriaInvalida() {
            return this.datoRelevante.categoria.length < 1;
        },
        descripcionInvalida() {
            return this.datoRelevante.descripcion.length < 1;
        },
    },
    async mounted() {
        this.obtenerCamisetas();
    },
    methods: {
        obtenerCamisetas() {
            const token = localStorage.getItem('token');
            if (token != null) {
                axios.get('https://la-liga-premier.vercel.app/camisetas', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(response => {
                    this.camisetasBD = response.data;
                })
                    .catch(error => {
                        console.error(error);
                    });

            }
        },
        agregarCamiseta() {
            this.datoRelevante.camisetas.push(this.camiseta);
        },
        enviarForm() {
            if (this.camisetasInvalidas || this.categoriaInvalida || this.descripcionInvalida) {
                this.error = true;
                this.sent = false;
                return;
            }
            this.error = false;
            this.sent = true;

            const token = localStorage.getItem('token')

            axios.post('http://localhost:3000/registrar-datos', this.datoRelevante, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
            this.resetForm();
        },
        resetForm() {
            this.datoRelevante = {
                camisetas: [],
                categoria: "",
                descripcion: "",
            }
        },
    },
}
</script>

<style >
.casilla-camiseta {
    width: 500px;
}

.formato-datos-camiseta {
    margin: 60px;
    padding: 5%;
    display: flex;
    justify-content: center;
    border-radius: 15px;
}

.subir-imagen {
    border-radius: 15px;
    padding: 30%;
    height: 90%;
    margin-bottom: 10%;
}

.subir-imagen img {
    width: 150px;
    height: 150px;
}

.imagen-camiseta {
    margin-right: 50px;
    width: 50%;
}

.formulario-camiseta {
    margin-left: 50px;
}

.btn-publicar {
    display: flex;
    justify-content: start;
    margin-left: 3%;
}
</style>
