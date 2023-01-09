<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center fill-height">
        <v-col class="fill-height">
          <v-sheet class="pa-12  rounded fill-height" elevation="4" >
            <h1 class="pb-16 text-h2">Contacto</h1>
            <v-row>
              <v-col cols="12" lg="6" class="text-left">
                <h3 class="text-sm-h3 text-h4 font-weight-black">Enzo Farias</h3>
                <div class="text-medium-emphasis texto-subtitulo-2 font-italic"> Desarollador Web</div>
                <v-spacer></v-spacer>
                <p>enzoaxf@gmail.com</p>
                <p>Tel: +542901659045</p>
                <v-card-actions class="">
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
              </v-col>
              <v-divider class="d-none d-sm-flex" vertical></v-divider>
              <v-col>
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="firstname" :rules="nameRules" label="Nombre" variant="outlined" required>
                        </v-text-field>
                      </v-col>
                      
                      <v-col cols="12"  md="6">
                        <v-text-field v-model="lastname" :rules="nameRules"  label="Apellido" variant="outlined" required>
                        </v-text-field>
                      </v-col>
                      
                      <v-col cols="12" md="6">
                        <v-text-field v-model="email" :rules="emailRules" label="Email" variant="outlined" required></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="email" :rules="emailRules" label="Asunto" variant="outlined" required></v-text-field>
                      </v-col>
                      <v-col>
                        <v-textarea label="Label" variant="outlined"></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
                
              </v-col>
            </v-row>
            
          </v-sheet>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
    v => !!v || 'Name is required',
    v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
}
</script>