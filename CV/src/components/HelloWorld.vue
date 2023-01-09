<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col >
          <v-card class="text-left" >
            <div class="d-flex justify-space-between">
              <div>
                <v-card-title class="text-sm-h3 text-h5 pt-8 font-weight-black font-italic">
                  Soy Enzo Farias
                </v-card-title>
                <v-card-subtitle class="text-sm-h6 pt-1 font-weight-black font-italic">Desarollador Web</v-card-subtitle>
              </div>
              <v-avatar class="ma-3" size="135" rounded="0" >
                <v-img cover src="./src/assets/my.jpg"></v-img>
              </v-avatar>
            </div>
            <v-divider></v-divider>
            <div>
              <v-card-text>
                <h3 class="text-sm-h5" >Sobre mi:</h3>
                <p class="pt-2 text-medium-emphasis">
                  Buenas soy de argentina tengo 21 anios ,me gusta la programicon,soy bueno trabajando en equipos y comunicativo 
                </p>
              </v-card-text>
              <v-card-actions class="d-flex justify-end ">
                <v-btn size="35"
                icon="mdi-linkedin"
                color="primary"
                ></v-btn>
                <v-btn size="35"
                icon="mdi-instagram"
                color="primary"
                ></v-btn>
                <v-btn size="35"
                icon="mdi-whatsapp"
                color="primary"
                ></v-btn>
                <v-btn size="35"
                icon="mdi-github"
                color="primary"
                ></v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-col >
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
//
</script>

<script>
//
</script>