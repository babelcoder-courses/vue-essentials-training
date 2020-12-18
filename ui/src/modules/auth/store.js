import axios from "@/lib/axios";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem("accessToken"),
  },
  mutations: {
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
  },
  actions: {
    async signin({ commit }, auth) {
      try {
        const {
          data: { accessToken },
        } = await axios.post("/login", auth);

        localStorage.setItem("accessToken", accessToken);
        commit("setAccessToken", accessToken);

        router.push("/");
        commit(
          "ui/setFlashMessage",
          {
            type: "success",
            message: "Logged in successfully",
          },
          { root: true }
        );
      } catch (ex) {
        commit(
          "ui/setFlashMessage",
          {
            type: "error",
            message: ex.response.data,
          },
          { root: true }
        );
      }
    },
    async signup({ commit }, auth) {
      const {
        data: { accessToken },
      } = await axios.post("/register", auth);

      localStorage.setItem("accessToken", accessToken);
      commit("setAccessToken", accessToken);

      router.push("/");
      commit(
        "ui/setFlashMessage",
        {
          type: "success",
          message: "Registered successfully",
        },
        { root: true }
      );
    },
    signout({ commit }) {
      localStorage.removeItem("accessToken");
      commit("setAccessToken", null);

      commit(
        "ui/setFlashMessage",
        {
          type: "success",
          message: "Logged out successfully",
        },
        { root: true }
      );
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.accessToken;
    },
  },
};
