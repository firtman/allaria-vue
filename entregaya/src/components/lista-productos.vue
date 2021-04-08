<template>
  <section>
      <h3>Lista de Productos</h3>

      <ul>
        <li v-for="producto in productos"         :key="producto">
      {{ producto }}
      </li>

      <button @click="agregar">Tocame</button>
      </ul>
  </section>
</template>

<script>
export default {
    data: function() {
        return {
            productos: ["Asado", "Pollo", "Coca Cola", "Papas Fritas"]
        }
    },
    methods: {
        agregar: function() {
            this.productos.push("Sprite")
        }
    }
}
</script>

<style>

</style>