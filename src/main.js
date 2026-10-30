import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import VueGtag from "vue-gtag";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab);

// createApp(App).component('fa', FontAwesomeIcon).use(router).mount('#app')

// createApp(App).use(VueGtag, {
//     config: { id: "GA_MEASUREMENT_ID" }
//   }).mount("#app");

const app = createApp(App).component('fa', FontAwesomeIcon);

app.use(router);

app.use(VueGtag, {
  config: { 
    id: "G-PEDBKSLJL9",
  },
}, router);

app.mount("#app");