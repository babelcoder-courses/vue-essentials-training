import axios from "@/lib/axios";

export default {
  namespaced: true,

  state: {
    items: [],
  },

  mutations: {
    addPosts(state, posts) {
      state.items = posts;
    },
  },

  actions: {
    async loadPosts(context) {
      const { data } = await axios.get("/posts");

      context.commit("addPosts", data);
    },
    async loadPost(context, { id }) {
      context.commit("addPosts", []);

      const { data } = await axios.get(`/posts/${id}`);

      context.commit("addPosts", [data]);
    },
  },

  getters: {
    count: (state) => state.items.length,
  },
};
