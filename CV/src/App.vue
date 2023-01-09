<template>
  <v-app >
    <v-main>
      <!-- Nav en sm -->
      <v-navigation-drawer v-model="drawer"  temporary >
        <v-list density="compact" nav>
          <v-list-item title="Conosimientos" value="conocimientos"  variant="text" color="secondary" to="/conocimientos"></v-list-item>
          <v-list-item title="Estudios" value="estudios" variant="text" color="secondary" to="/Estudios"></v-list-item>
          <v-list-item title="Experiencia" value="experiencia" variant="text" color="secondary" to="/Experiencia"></v-list-item>
          <v-list-item title="Contacto" value="contacto" variant="text" color="secondary" to="/Contacto"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- Nav -->
      <v-app-bar :elevation="5">
        <template v-slot:prepend >
          <v-app-bar-nav-icon color="secondary" @click.stop="drawer = !drawer" class="d-flex d-sm-none"  >
          </v-app-bar-nav-icon>
        </template>
        <template v-slot:title >
          <v-btn variant="plain" color="secondary" to="/" >
            Presentacion
          </v-btn>
        </template>
        <template v-slot:append >
          <v-btn class="d-none d-sm-flex"  variant="plain" color="secondary" to="/conocimientos" >Conocimientos</v-btn>
          <v-btn class="d-none d-sm-flex" variant="plain" color="secondary" to="/Estudios" > Estudios</v-btn>
          <v-btn class="d-none d-sm-flex" variant="plain" color="secondary"  to="/Experiencia" > Experiencia</v-btn>
          <v-btn class="d-none d-sm-flex" variant="plain" color="secondary"  to="/Contacto" > Contacto</v-btn>
        </template>
      </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
  
  
</template>


<script>
export default {
  data () {
    return {
      drawer: null,
    }
  },
}
</script>
