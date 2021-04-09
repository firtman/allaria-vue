<template>
  <div id="app">
    <encabezado></encabezado>
    <router-view/>
    <pie-pagina />
  </div>
</template>

<script>
import Encabezado from './components/encabezado.vue'
import piePagina from './components/pie-pagina.vue'
export default {
  components: { piePagina, Encabezado }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
    background: #EEE;
    padding: 10px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
