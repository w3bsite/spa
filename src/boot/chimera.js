import Vue from "vue";
import VueChimera from "vue-chimera";
import { axiosInstance } from "boot/axios";
// we add it to Vue prototype
// so we can reference it in Vue files
// without the need to import axios
Vue.use(VueChimera, {
  axios: axiosInstance
});
Vue.prototype.$VueChimera = VueChimera;
export { VueChimera };
