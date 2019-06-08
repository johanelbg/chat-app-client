import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./router/guard";
import VueSocketIO from "vue-socket.io";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://localhost:4000/",
    vuex: {
      store
    }
  })
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
