import './theme/variables.css';
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/display.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/typography.css';

import { IonicVue } from '@ionic/vue';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

/* Core CSS required for Ionic components to work properly */
/* Basic CSS for apps built with Ionic */
/* Optional CSS utils that can be commented out */
/* Theme variables */
const app = createApp(App)
.use(IonicVue)
.use(router);
router.isReady().then(() => {
  app.mount('#app');
});