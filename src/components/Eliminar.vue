<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="error" v-bind="attrs" v-on="on"> Eliminar </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Eliminar un producto</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-alert dense border="left" type="warning">
              ¿Está seguro que desea <strong>Eliminar</strong> los datos seleccionados?
            </v-alert>
          </v-container>
          <small>Una vez eliminados los datos, no se pueden recuperar.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"> NO </v-btn>
          <v-btn color="red darken-1" text @click="dialog = false"> SI </v-btn>
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
};
</script>

<style>
</style>