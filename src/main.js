import Vue from 'vue'
import App from './App.vue'
import vuetify from "@/plugins/vuetify";
import router from './router/router';
import axios from 'axios'
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App),
  vuetify
}).$mount('#app');
