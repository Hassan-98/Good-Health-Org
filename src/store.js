import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: {
      name: "الرئيسية",
      alt: false,
      engName: "Home"
    },
    loading: true
  },
  mutations: {
    changePage(state, page) {
      state.page = page;
    },
    startLoading(state) {
      state.loading = true;
    },
    stopLoading(state) {
      state.loading = false;
    }
  },
  actions: {}
});
