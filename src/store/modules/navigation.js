function initialState() {
  return {
    isNavigationDrawer: false
  };
}

export default {
  namespaced: true,
  state: initialState(),
  mutations: {
    setDrawer(state, val) {
      state.isNavigationDrawer = val;
    }
  }
};
