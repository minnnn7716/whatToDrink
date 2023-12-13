import './assets/scss/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import mitt from 'mitt';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const emitter = mitt();

app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);

app.mount('#app');

app.config.globalProperties.$emitter = emitter;
