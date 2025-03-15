<template>
  <h1 class="mt-5">Camisetas Guardadas: {{ camisetasBD.length }}</h1>
  <h1 class="mt-5">Usuarios Registrados: {{ usuariosDB.length }}</h1>
  <h1 class="mt-5">Número de Pedidos: {{ carritosBD.length }}</h1>
  <h1 class="mt-5">Ganancias Totales: ${{ ganancias }}</h1>
</template>

<script>
import axios from 'axios';
export default {
    name: "EstadisticasPage",
    data() {
        return {
            token: '',
            camisetasBD: [],
            usuariosDB: [],
            carritosBD: [],
            ganancias: 0,
        }
    },
    async mounted() {
        this.token = localStorage.getItem('token');
        this.obtenerCamisetas();
        this.obtenerUsuarios();
        this.obtenerPedidos();
        this.calcularGanancias();
    },
    methods: {
        obtenerCamisetas() {
            
            if (this.token != null) {
                axios.get('https://la-liga-premier.vercel.app/camisetas', {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                }).then(response => {
                    this.camisetasBD = response.data;
                })
                    .catch(error => {
                        console.error(error);
                    });

            }
        },
        obtenerUsuarios() {
            if (this.token != null) {
                axios.get('https://la-liga-premier.vercel.app/auth/usuarios', {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                }).then(response => {
                    this.usuariosDB = response.data;
                })
                    .catch(error => {
                        console.error(error);
                    });

            }
        },
        obtenerPedidos() {
            if (this.token != null) {
                axios.get('https://la-liga-premier.vercel.app/pedidos', {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                }).then(response => {
                    this.carritosBD = response.data;
                })
                    .catch(error => {
                        console.error(error);
                    });

            }
        },
        calcularGanancias() {
            if (this.token != null) {
                axios.get('https://la-liga-premier.vercel.app/ganancias', {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                }).then(response => {
                    this.ganancias = response.data.ganancias;
                })
                    .catch(error => {
                        console.error(error);
                    });

            }
        },
    }
}
</script>

<style>

</style>
