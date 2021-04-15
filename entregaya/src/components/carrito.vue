<template>
  <section v-show="carrito.length>0">
      <h2>Carrito de Pedido ({{ carrito.length }})</h2>
      <ul >
        <li v-for="p in carrito"
            :key="p.id">
            {{ p.nombre }}
        </li>
      </ul>
      <button @click="limpiar">Limpiar</button>
      <button @click="finalizar">Finalizar</button>
    
  </section>
</template>

<script>
export default {
    props: ["carrito"],
    methods: {
        limpiar: function() {
            this.$emit("clear");
        },
        finalizar: function() {
            this.$router.push("/finalizar")
        }
    }
}
</script>

<style scoped>
    li {
        color: salmon;
        font-size: 12px;
    }
    h2 {
        font-size: 14px;
    }
    ul {
        list-style: none;
        padding: 0
    }
    section {
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 200px;
        height: 200px;
        border: 1px solid gray;
        border-radius: 10px;
        background: white;
    }
</style>