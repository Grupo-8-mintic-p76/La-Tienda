<template>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>

    <body>
      <!-- inicio encabezado del sitio -->

      <header class="header-section">
        <div class="header-container">
          <div class="site-title">
            <br />
            <h1>Catálogo Web</h1>
          </div>

          <!-- Inicio menú navegación -->

          <nav class="site-nav">
            <a href="#services">Funcionalidad</a>
            <a href="#news">Mockups</a>
          </nav>

          <!-- Fin menú navegación -->

          <div class="boton-container">
            <button @click="regresar">REGRESAR</button>
          </div>
        </div>

        <div class="banner">
          <img src="../assets/banner.jpg" alt="Banner" />
        </div>
      </header>

      <!-- fin encabezado del sitio -->

      <!-- inicio contenido principal -->
      <main>
        <h2>Funcionalidad</h2>
        <!-- inicio sección de Funcionalidades -->

        <section id="services" class="services-section">
          <article class="services-info">
            <img
              class="services-info__imagen"
              src="../assets/adicionar.jpg"
              alt="botón adicionar"
            />
            <h2 class="services-info__title">Adicionar</h2>
            <p class="services-info__text">
              El botón adicionar permitirá agregar una nueva entrada de un
              producto al inventario, en esta se incluirá el ID del producto, el
              nombre, la cantidad de unidades de ese producto en particular, el
              preco unitario y una imagen de referencia.
            </p>
          </article>
          <article class="services-info">
            <img
              class="services-info__imagen"
              src="../assets/editar.jpg"
              alt="botón editar"
            />
            <h2 class="services-info__title">Editar</h2>
            <p class="services-info__text">
              El botón editar permitirá manipular los datos de un producto
              previamente seleccionado y que ya ha sido ingresado al inventario.
            </p>
          </article>
          <article class="services-info">
            <img
              class="services-info__imagen"
              src="../assets/eliminar.jpg"
              alt="botón eliminar"
            />
            <h2 class="services-info__title">Eliminar</h2>
            <p class="services-info__text">
              El botón eliminar permitirá borrar todo rastro de un producto
              previamente seleccionado y que ya ha sido ingresado al inventario.
            </p>
          </article>
        </section>
        <!-- fin sección de Funcionalidades -->

        <h2>Mockups</h2>
        <!-- inicio sección de Mockups -->

        <section id="news" class="news-section">
          <article class="news-info">
            <div class="news-header">
              <img
                class="news-info__imagen"
                src="../assets/pag_inicio.jpg"
                alt="página de inicio"
              />
              <h2 class="news-info__title">página de inicio</h2>
            </div>
            <p class="news-info__text">
              En esta página encontraremos el inicio del sistema, con un botón
              para ingresar al inventario y los datos del equipo desarrollador.
            </p>
          </article>

          <article class="news-info">
            <div class="news-header">
              <img
                class="news-info__imagen"
                src="../assets/pag_principal.jpg"
                alt="página principal"
              />
              <h2 class="news-info__title">Página principal</h2>
            </div>
            <p class="news-info__text">
              En esta página encontraremos el sistema principal del inventario
              web, el cual consta de la barra de búsqueda, la grilla de
              visualización y los botones de funcionalidad.
            </p>
          </article>

          <article class="news-info">
            <div class="news-header">
              <img
                class="news-info__imagen"
                src="../assets/pag_adicionar.jpg"
                alt="página de adición o edición"
              />
              <h2 class="news-info__title">Páginas de adción y editado</h2>
            </div>
            <p class="news-info__text">
              Estas páginas son muy similares en funcionalidad y front-end, su
              única diferencia radica en que una está destinada exclusivamente a
              dicionar un producto nuevo y la otra a editar un producto ya
              existente.
            </p>
          </article>

          <article class="news-info">
            <div class="news-header">
              <img
                class="news-info__imagen"
                src="../assets/pag_eliminar.jpg"
                alt="página de eliminación"
              />
              <h2 class="news-info__title">Página de eliminación</h2>
            </div>
            <p class="news-info__text">
              En esta página podremos eliminar un producto ya existente de
              nuestra base de datos y de la grilla de visualización.
            </p>
          </article>
        </section>
        <!-- fin sección de Mockups -->
      </main>

      <!-- fin contenido principal -->

      <!-- Inicio pie del sitio -->

      <footer class="footer-section">
        <article>
          <h2>Disclaimer</h2>
          <br />
          <br />
          <P
            >Esta página esta hecha en HTML y CSS, ademas del enrutamiento con
            JS, por tanto no es responsiva, se hace de esta manera para
            evidenciar el manejo del lenguaje y porque no tuvimos tiempo de
            transpilarla a vuetify ¯\_( ͡• ͜ʖ ͡•)_/¯</P
          >
        </article>
      </footer>

      <!-- fin pie del sitio -->
    </body>
  </html>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  methods: {
    regresar() {
      console.log("Regresando...");
      this.$router.push("/");
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  max-width: 1400px;
  min-width: 375px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0;
  margin-bottom: 0;
  color: #222222;
}

.header-section {
  margin-bottom: 100px;
}

.header-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}

.site-title {
  width: 30%;
}

.site-nav {
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.site-nav > a {
  color: inherit;
  text-decoration: none;
}

.site-nav > a:hover {
  text-decoration: underline;
  font-weight: bold;
}

.boton-container {
  width: 30%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.boton-container > button:hover {
  font-weight: bold;
  color: blue;
}

.banner {
  width: 100%;
}

.banner > img {
  width: 100%;
  height: 400px;
  max-width: 1400px;
  object-fit: cover;
}

.services-section,
.news-section {
  display: flex;
  margin-bottom: 100px;
}

.news-section,
.header-container {
  background-color: #f7f7f7;
}

.news-section {
  flex-wrap: wrap;
}

.services-info {
  padding: 20px;
  text-align: center;
}

.news-info {
  width: 50%;
  padding: 20px;
}
.news-info__imagen {
  width: 50%;
  height: fit-content;
}

.news-header {
  display: flex;
  justify-content: space-around;
}

.news-info__title {
  align-self: center;
}

.footer-section {
  background-color: #25294f;
  height: 200px;
  margin-right: auto;
  color: white;
  justify-content: space-evenly;
}

.services-info__imagen {
  border-radius: 10%;
  margin-right: auto;
  margin-left: auto;
}
</style>