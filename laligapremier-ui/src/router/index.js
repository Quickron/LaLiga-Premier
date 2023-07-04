import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ListarCamisetasPage from '../views/ListarCamisetasPage.vue'
import CrearCamisetaPage from '../views/CrearCamisetaPage.vue'
import DetalleCamisetaPage from '../views/DetalleCamisetaPage.vue'
import NosotrosPage from '../views/NosotrosPage.vue'
import BolsaPage from '../views/BolsaPage.vue'
import RegistroCamisetasPage from '../views/RegistroCamisetasPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/camisetas',
    name: 'camisetas',
    component: ListarCamisetasPage
  },
  {
    path: '/crear-camiseta',
    name: 'crear_camiseta',
    component: CrearCamisetaPage
  },
  {
    path: '/detalle/id',
    name: 'detalle_camiseta',
    component: DetalleCamisetaPage
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: NosotrosPage
  },
  {
    path: '/bolsa',
    name: 'bolsa',
    component: BolsaPage
  },
  {
    path: '/registro-camisetas',
    name: 'registro_camisetas',
    component: RegistroCamisetasPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
