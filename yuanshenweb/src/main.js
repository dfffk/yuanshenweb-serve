import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import { router } from "./router";
import rem from "./utils/rem";
import Carousel3d from "vue-carousel-3d";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/styles/reset.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Carousel3d);
new Vue({
  render: (h) => h(App),
  router,
  rem,
}).$mount("#app");
