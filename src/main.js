import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importando o JS do Bootstrap (p/ componentes interativos)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App)

app.use(router)

app.mount('#app')
