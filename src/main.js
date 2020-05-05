import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";
import VueSweetalert2 from 'vue-sweetalert2';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
