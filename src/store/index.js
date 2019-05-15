import Vue from "vue";
import Vuex from "vuex";
import navigation from "./modules/navigation";
import data from "./modules/data";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    data,
    navigation
  }
});
