import Vue from "vue";
import App from "./App.vue";

require("z-components/z-components.css");

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
