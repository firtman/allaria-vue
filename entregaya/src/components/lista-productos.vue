<template>
  <section>
      <h3>Lista de Productos</h3>
      <ul v-if="!estadoError">
        <li v-for="p in productos"
            :key="p.id">
            <item-producto :producto="p" @add="agregar" />
        </li>
      </ul>
      <p v-else>Error: no se puedo traer los productos</p>
      <carrito :productos="carrito" />
  </section>
</template>

<script>
import { API } from "../data/API";
import Carrito from './carrito.vue';
import itemProducto from './item-producto.vue';
export default {
    components: { itemProducto, Carrito },
    data() {
        return {
            estadoError: false,
            productos: [],
            carrito: []
        }
    },
    async created() {
        try {
            this.productos = await API.getProductos();
        } catch  {
            this.estadoError = true;
        }
    },
    methods: {
        agregar: function(producto) {
            this.carrito.push(producto)
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0
}
</style>