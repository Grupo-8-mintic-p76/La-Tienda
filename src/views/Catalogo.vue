<template>
  <div>
    <h1>La Tienda</h1>
    <br />
    <h2>Administración del Catálogo</h2>
    <br />
    <tabla-busqueda />
    <br />
    <br />
    <v-row align="center" justify="space-around">
        <adicionar/>
        <editar/>
        <eliminar/>
        <salir/>
    </v-row>
    <br />
    <br />
    <v-footer padless color="yellow accent-2">
      <v-col class="text-center" cols="12">
        <strong>C3G8</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import Adicionar from '../components/Adicionar.vue';
import Editar from '../components/Editar.vue';
import Eliminar from '../components/Eliminar.vue';
import Salir from '../components/Salir.vue';
import TablaBusqueda from "../components/TablaBusqueda.vue";
export default {
  components: {
    TablaBusqueda,
    Adicionar,
    Editar,
    Eliminar,
    Salir
  },
};
</script>

<style>
h1 {
  text-align: center;
}
h2 {
  text-align: center;
}
h3 {
  text-align: center;
}
</style>