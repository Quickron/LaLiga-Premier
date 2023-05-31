<template>
  <NavBar/>
  <router-view/>
  <FooterComponent/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import NavBar from '@/components/Navbar.vue'
import FooterComponent from '@/components/Footer.vue'

export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent
  }
}
</script>

