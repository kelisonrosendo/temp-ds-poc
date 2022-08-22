import Vue from "vue";
import Vuetify from "vuetify/lib";

import ZButton from "./components/ZButton.vue";
import ZAlert from "./components/ZAlert.vue";
import ZCollapse from "./components/ZCollapse.vue";

Vue.use(Vuetify);

Vue.component("ZButton", ZButton);
Vue.component("ZAlert", ZAlert);
Vue.component("ZCollapse", ZCollapse);

export { ZButton, ZAlert, ZCollapse };

export default new Vuetify();
