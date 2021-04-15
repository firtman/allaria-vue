<template>
  <header>
    <h1>Entrega Ya</h1>
    <nav id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/aforo">App Aforo</router-link> |
        <router-link to="/acerca">Acerca</router-link> |
        <button v-on:click="contacto">✉️</button>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    contacto: function() {
      this.$router.push("/contacto")
    }
  }
}
</script>

<style>

</style>