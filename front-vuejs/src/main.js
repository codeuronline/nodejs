import "bootstrap";
import "../node_modules/bootswatch/dist/zephyr/bootstrap.min.css";
import "jquery";
import "popper.js";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
