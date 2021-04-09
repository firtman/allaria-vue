<template>
  <div id="app">
      <encabezado />
      <lista-productos />
      <pie-pagina />
  </div>
</template>
<script>
import Encabezado from './components/encabezado.vue'
import ListaProductos from './components/lista-productos.vue'
import PiePagina from './components/pie-pagina.vue'

export default {
  name: 'App',
  components: {
    Encabezado, PiePagina, ListaProductos
  }
}
</script>

<style>
body {
  --verde: green;
  --rojo: red;
  --amarillo: rgb(192, 192, 31);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
