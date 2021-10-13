<template>
  <div class="fondo">
    <table class="default">
      <tr>
          <h1 id="titulo">La Tienda</h1>
      </tr>
      <tr>
        <v-btn
          id="boton"
          color="primary"
          elevation="9"
          large
          x-large
          @click="catalogo"
          >Ingresar</v-btn
        >
      </tr>
      <tr>
        <v-card id="carta" width="300">
          <v-card-text>
            <h3>Desarrollado por:</h3>
            <br />
            <p>Daniel Fernando Rodriguez Ruiz</p>
            <p>Magda Lorena Aguilar Nuez</p>
            <p>Juan Camilo Mendez Medina</p>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4" @click="git"> GITHUB </v-btn>
            <v-btn text color="deep-purple accent-4" @click="intro">  ACERCA DE... </v-btn>
          </v-card-actions>
        </v-card>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  methods: {
    catalogo() {
      console.log("Ingresando al aplicativo");
      this.$router.push("/catalogo");
    },
    git(){
        window.open("https://github.com/Grupo-8-mintic-p76/La-Tienda.git");
        
    },
    intro() {
      console.log("Ingresando al intro");
      this.$router.push("/intro");
    },
  },
};
</script>

<style>
.fondo {
    height: 100%;
    width: 100%;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
#titulo{
    text-align: center;
}
#boton {
    
    margin-top: 10%;
    margin-left: 25%;
}
#carta {
    margin-top: 40%;
}
</style>