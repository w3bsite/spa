// axios boot file (src/boot/axios.js)

import Vue from "vue";
import axios from "axios";

// We create our own axios instance and set a custom base URL.
// Note that if we wouldn't set any config here we do not need
// a named export, as we could just `import axios from 'axios'`
const axiosFir = axios.create({
  baseURL: "https://fitech.herokuapp.com/"
});

// for use inside Vue files through this.$axios
Vue.prototype.$axios = axiosFir;
const axiosSec = axios.create({
  baseURL: "https://www.dlfox.com/wp-json/wp/v2/"
});
Vue.prototype.$axiosSec = axiosSec;
// Here we define a named export
// that we can later use inside .js files:
export { axiosFir, axiosSec };
