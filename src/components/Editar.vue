<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="secondary" v-bind="attrs" v-on="on"> Editar </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Editar un producto</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Id del producto" :rules="[rules.ingresartexto]" counter maxlength="4"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Nombre del producto" :rules="[rules.ingresartexto]" counter maxlength="20"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Cantidad" :rules="[rules.ingresartexto]"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Precio" :rules="[rules.ingresartexto]"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Link imagen"></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="reset">
            Volver
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Actualizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    dialog:false,
    rules: {
      ingresartexto: value => !!value || '*Campo requerido.',
      //solonumeros: value => value || 'Ingrese solo carcateres numéricos.',
      //solotexto: value => value  || 'Ingrese solo caracteres alfabéticos.',
    }
  }),
  methods:{
    reset(){
      this.$refs.form.reset();
      this.dialog = false;
    }
    
  }
};
</script>

<style>
</style>