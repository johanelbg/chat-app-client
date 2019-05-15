const initialState = () => ({
  nickname: ""
});

export default {
  namespaced: true,
  state: initialState(),
  getters: {
    isLoggedIn: ({ nickname }) => !!nickname
  },
  mutations: {
    setNickname(state, value) {
      state.nickname = value;
    }
  }
};
