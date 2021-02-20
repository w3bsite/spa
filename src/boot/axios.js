// axios boot file (src/boot/axios.js)

import Vue from "vue";
import axios from "axios";

// We create our own axios instance and set a custom base URL.
// Note that if we wouldn't set any config here we do not need
// a named export, as we could just `import axios from 'axios'`
const axiosurl = axios.create({ baseURL: "" });

// for use inside Vue files through this.$axios
Vue.prototype.$axiosurl = axiosurl;
const axiosfit = axios.create({
  baseURL: "https://sabz.herokuapp.com/https://fitech.herokuapp.com/"
});

// for use inside Vue files through this.$axios
Vue.prototype.$axiosfit = axiosfit;
const axiosfox = axios.create({
  baseURL: "https://sabz.herokuapp.com/https://www.dlfox.com/wp-json/wp/v2/"
});
Vue.prototype.$axiosfox = axiosfox;
// Here we define a named export
// that we can later use inside .js files:
// for use inside Vue files through this.$axios

const axiosmovie = axios.create({
  baseURL:
    "https://sabz.herokuapp.com/https://www.valamovie.live/wp-json/wp/v2/"
});
Vue.prototype.$axiosmovie = axiosmovie;
// Here we define a named export
// that we can later use inside .js files:
export { axiosfit, axiosfox, axiosmovie, axiosurl };
