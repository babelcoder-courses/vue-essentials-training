export default {
  namespaced: true,

  state: {
    flashMessage: null,
  },

  mutations: {
    setFlashMessage(state, flashMessage) {
      state.flashMessage = flashMessage;
    },
    clearFlashMessage(state) {
      state.flashMessage = null;
    },
  },

  getters: {},
};
