import '@/assets/styles/main.scss';

import App from './App.vue'
import { createApp } from 'vue'

import SimpleVueValidator from 'simple-vue3-validator'
import { router } from './router'

import { store } from './store'

const app = createApp(App)
  app.use(router);
  app.use(store)
  app.use(SimpleVueValidator);
  app.mount('#app');