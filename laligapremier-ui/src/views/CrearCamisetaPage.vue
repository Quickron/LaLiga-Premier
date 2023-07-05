<template>
    <div class="container py-4">
        <div class="card bg-light">
            <h4 class="card-header">Crear Camiseta</h4>
            <div class="card-body">

                <form enctype="multipart/form-data" @submit.prevent="enviarForm">

                    <ItemCamisetaForm @agregar-item="agregarItem"></ItemCamisetaForm>

                    <ItemCamisetaTable :items-camiseta="camiseta.itemsCamiseta" @eliminar-item="eliminarItem">
                    </ItemCamisetaTable>

                    <div class="form-group row py-2">
                        <label class="col-sm-2 col-form-label">Club / Selección</label>
                        <div class="col-sm-1">
                            <select v-model="camiseta.tipo">
                                <option>Club</option>
                                <option>Selección</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row py-2">
                        <label class="col-sm-2 col-form-label">Equipo</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" v-model="camiseta.equipo" />
                        </div>
                    </div>
                    <div class="form-group row py-2">
                        <label class="col-sm-2 col-form-label">Liga</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" v-model="camiseta.liga" />
                        </div>
                    </div>
                    <div class="form-group row py-2">
                        <label class="col-sm-2 col-form-label">Dorsal</label>
                        <div class="col-sm-6">
                            <input type="number" class="form-control" v-model="camiseta.dorsal" />
                        </div>
                    </div>
                    <div class="form-group row py-2">
                        <label class="col-sm-2 col-form-label">Jugador</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" v-model="camiseta.jugador" />
                        </div>
                    </div>
                    <div class="form-group row py-2">
                        <label class="col-sm-2 col-form-label">Temporada</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" v-model="camiseta.temporada" />
                        </div>
                    </div>
                    <div class="form-group row py-2">
                        <label class="col-sm-2 col-form-label">Época</label>
                        <div class="col-sm-1">
                            <select v-model="camiseta.epoca">
                                <option selected>Moderno</option>
                                <option>Clásico</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row py-2">
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Marca</label>
                            <div class="col-sm-1">
                                <select v-model="camiseta.marca">
                                    <option v-for="(marca, index) in marcas" :key="index">{{ marca }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label class="col-sm-2 col-form-label">Nombre Camiseta</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" v-model="camiseta.nombre" />
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label class="col-sm-2 col-form-label">Descripción</label>
                            <div class="col-sm-6">
                                <textarea type="text" rows="3" class="form-control"
                                    v-model="camiseta.descripcion"></textarea>
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label class="col-sm-2 col-form-label">Precio</label>
                            <div class="col-sm-6">
                                <input type="number" class="form-control" v-model="camiseta.precio" />
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label for="file" class="col-sm-2 col-form-label">Subir Fotos (URL)</label>
                            <div class="col-sm-6">
                                <input type="text" name="file" multiple class="form-control" v-model="camiseta.imagenes" />
                            </div>
                        </div>

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
                                <input type="submit" value="Publicar" class="btn btn-dark" />
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
import { obtenerMarcas } from '@/mocks/camiseta'
import ItemCamisetaForm from '@/components/ItemCamisetaForm.vue'
import ItemCamisetaTable from '@/components/ItemCamisetaTable.vue'
export default {
    name: 'CrearCamisetaPage',
    components: {
        ItemCamisetaForm,
        ItemCamisetaTable
    },
    data() {
        return {
            camiseta: {
                tipo: "",
                equipo: "",
                liga: "",
                dorsal: 0,
                jugador: "",
                temporada: "",
                epoca: "",
                marca: "",
                nombre: "",
                descripcion: "",
                precio: 0,
                imagenes: [],
                itemsCamiseta: []
            },
            itemCamiseta: {
                publico: "",
                talla: "",
                stock: 0
            },
            sent: false,
            error: false,
            marcas: [],
        }
    },
    async mounted() {
        this.marcas = obtenerMarcas;
    },
    computed: {
        nombreInvalido() {
            return this.camiseta.nombre.length < 1;
        },
    },
    methods: {
        agregarItem(item) {
            this.camiseta.itemsCamiseta = [...this.camiseta.itemsCamiseta, item];
        },
        eliminarItem(index) {
            this.camiseta.itemsCamiseta.splice(index, 1);
        },
        enviarForm() {
            if (this.nombreInvalido) {
                this.error = true;
                this.sent = false;
                return;
            }
            this.error = false;
            this.sent = true;

            if (this.itemCamiseta.publico != "" && this.itemCamiseta.talla != "" && this.itemCamiseta.stock > 0) {
                this.camiseta.itemsCamiseta.push(this.itemCamiseta);
            }
            console.log(this.camiseta.itemsCamiseta)
            const token = localStorage.getItem('token')

            axios.post('http://localhost:3000/crear-camiseta', this.camiseta, {
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
            this.camiseta = {
                tipo: "",
                equipo: "",
                liga: "",
                dorsal: 0,
                jugador: "",
                temporada: "",
                epoca: "",
                marca: "",
                nombre: "",
                descripcion: "",
                precio: 0,
                imagenes: [],
                itemsCamiseta: []
            }
        },
    },
}
</script>

<style>
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
