<template>
  <section class="cuerpo-tareas row d-flex justify-content-center">

          <div class="card">

              <div class="card-body overflow-auto" style="position: relative; height: 400px">

                  <table class="table mb-0">
                      <thead>
                          <tr>
                              <th scope="col"></th>
                              <th scope="col">Nombre Camiseta</th>
                              <th scope="col">Acciones</th>
                          </tr>
                      </thead>
                      <tbody v-for="(camiseta, index) in camisetas" :key="index">
                        <CamisetasTable :camiseta="camiseta"></CamisetasTable>
                      </tbody>
                  </table>

              </div>
          </div>
      </section>
  <div >
    
  </div>
</template>

<script>
import axios from 'axios';
import CamisetasTable from '@/components/CamisetasTable.vue';
export default {
  name: "RegistroCamisetasPage",
  components: {
    CamisetasTable
  },
  data() {
    return {
      camisetas: []
    }
  },
  async mounted() {
    const token = localStorage.getItem('token');
        if (token != null) {
            axios.get('http://localhost:3000/camisetas', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                this.camisetas = response.data;
            })
                .catch(error => {
                    console.error(error);
                });

        }
  }
}
</script>

<style></style>