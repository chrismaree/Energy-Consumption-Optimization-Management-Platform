import { directive as vClickOutside } from "vue-clickaway";

const GlobalDirectives = {
  install(Vue) {
    Vue.directive("click-outside", vClickOutside);
  }
};

export default GlobalDirectives;
