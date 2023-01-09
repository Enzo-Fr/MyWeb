/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import Conocimientos from './components/conocimientos.vue';
import Estudios from './components/Estudios.vue';
import Experiencia from './components/Experiencia.vue';
import Contacto from './components/Contacto.vue';


// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
  { path: '/',name: 'Expectador', component: HelloWorld },
  { path: '/Conocimientos', component: Conocimientos },
  { path: '/Estudios', component: Estudios },
  { path: '/Experiencia', component: Experiencia },
  { path: '/Contacto', component: Contacto },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


const app = createApp(App)
app.use(router)
registerPlugins(app)
app.mount('#app')
