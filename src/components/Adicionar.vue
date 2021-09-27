<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on"> Adicionar </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Adicionar un nuevo producto</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Id del producto*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Nombre del producto*"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Cantidad*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Precio*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Link imagen"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>* Campos obligatorios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Volver
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Guardar
          </v-btn>
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