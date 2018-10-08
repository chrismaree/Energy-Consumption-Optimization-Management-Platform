import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store/index.js'
import Vue2Leaflet from "vue2-leaflet";
import {
  Bar,
  Line
} from 'vue-chartjs'

import MaterialKit from "./plugins/material-kit";
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

Vue.config.productionTip = false;

Vue.component('v-map', Vue2Leaflet.Map);
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
Vue.component('v-marker', Vue2Leaflet.Marker);

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
  store,
  render: h => h(App)
}).$mount("#app");