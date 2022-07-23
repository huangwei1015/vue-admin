import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/reset.css";
//导入语言包
import i18n from "./language/index"
import api from "./api/index.js";
Vue.prototype.$axios = api;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
