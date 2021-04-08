<template>
  <section>
      <p>
          
          <span 
              :style="{color: colorSemaforo}"
              :class="{
                  verde: cantidad/maximoAforo < 0.75,
                  amarillo: cantidad/maximoAforo >= 0.75 && cantidad/maximoAforo < 1,
                  rojo: cantidad/maximoAforo >= 1
              }">
              {{cantidad}}
          </span>
      
       / {{maximoAforo}} </p>
      <button v-on:click="cantidad++">MAS</button>
      <button @click="menos">MENOS</button>
      <a @click="cantidad=0">Limpiar</a>

      <section id="config">
          <h3>Configuración</h3>
          <label for="maximo">Máximo aforo</label>
          <input id="maximo" v-model="maximoAforo">
      </section>
  </section>
</template>

<script>
export default {
    data() {
        return {
            cantidad: 0,
            maximoAforo: 10,
            colorSemaforo: "black"
        }
    },
    methods: {
        menos: function() {
            if (this.cantidad>0) {
                this.cantidad--;
            }
        }
    },
    watch: {
        cantidad: function(nuevaCantidad) {
            let porcentaje = nuevaCantidad/this.maximoAforo;
            if (porcentaje < 0.75) {
                this.colorSemaforo = "var(--verde)"
            } else if (porcentaje < 1) {
                this.colorSemaforo = "var(--amarillo)"
            } else {
                this.colorSemaforo = "var(--rojo)"
            }
        }
    }
}
</script>

<style scoped>
p {
    font-size: 50px;
    text-align: center;
}
#config {
    margin-top: 100px;
    border: 1px solid gray
}
.verde { color: var(--verde) }
.amarillo { color: var(--amarillo) }
.rojo { color: var(--rojo) }
</style>