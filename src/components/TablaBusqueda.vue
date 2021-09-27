<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <!--AQUI SE CAMBIA EL item-key c_digo_dane_del_municipio POR EL VALUE ID DEL API  A USAR-->
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="productos"
      :search="search"
      item-key="c_digo_dane_del_municipio"
      show-select
      class="elevation-1" 
    >
    </v-data-table>
  </v-card>
</template>

<script>
import store from "../store/index.js";
export default {
  data() {
    return {
      search: "",
      selected: [],
      headers:[
    
        {
          text: "ID",
          align: "start",
          sortable: false,
          //AQUI SE CAMBIA EL VALUE c_digo_dane_del_municipio POR EL VALUE ID DEL API  A USAR
          value: "c_digo_dane_del_municipio",
        },
        { text: "Nombre del Producto", 
        value: "municipio", 
        sortable: false },
        {
          text: "Cantidad",
          value: "c_digo_dane_del_departamento",
          filterable: false,
          sortable: false,
        },
        {
          text: "Precio",
          value: "c_digo_dane_del_municipio",
          filterable: false,
          sortable: false,
        },
        { text: "Imagen", 
        value: "region", 
        filterable: false, 
        sortable: false },
      ],
    };
  },
  methods: {},
  created: () => {
    store.dispatch("getProductos");
  },
  computed: {
    productos: () => {
      return store.state.productos;
    },
  },
};
</script>

<style>

</style>