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
import CamisetasTable from '@/components/CamisetasTable.vue';
import { obtenerCamisetas } from '@/mocks/camiseta'
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
    this.camisetas = obtenerCamisetas;
  }
}
</script>

<style></style>