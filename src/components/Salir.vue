<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on"> Salir </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">¿Desea salir de la aplicación?</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"> NO </v-btn>
          <v-btn color="red darken-1" text @click="SI"> SI </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  methods:{
      SI(){
          this.$router.push("/"); 
      }
  }
};
</script>

<style>
</style>