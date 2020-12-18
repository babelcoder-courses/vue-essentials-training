import axios from "@/lib/axios";

export default {
  namespaced: true,

  state: {
    items: [],
  },

  mutations: {
    addUsers(state, users) {
      state.items = users;
    },
  },

  actions: {
    async loadUsers(context) {
      const { data } = await axios.get("/users");

      context.commit("addUsers", data);
    },
    async loadUser(context, { id }) {
      context.commit("addUsers", []);

      const { data } = await axios.get(`/users/${id}`);

      context.commit("addUsers", [data]);
    },
  },

  getters: {
    count: (state) => state.items.length,
  },
};
