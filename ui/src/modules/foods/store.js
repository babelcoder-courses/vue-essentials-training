import axios from "@/lib/axios";

export default {
  namespaced: true,

  state: {
    items: [],
  },

  mutations: {
    setFoods(state, foods) {
      state.items = foods;
    },
  },

  actions: {
    async loadFoods({ commit }, keyword = "") {
      const { data: foods } = await axios.get(`/foods?q=${keyword}`);

      commit("setFoods", foods);
    },
    async loadFoodsInCurrentOrderItems({ commit, rootState }) {
      const foodIds = Object.keys(rootState.orders.currentOrder);
      const queryString = foodIds.map((v) => `id=${v}`).join("&");

      const { data: foods } = await axios.get(`/foods?${queryString}`);

      commit("setFoods", foods);
    },
  },

  getters: {
    getFood: (state) => (id) => state.items.find((food) => food.id == id),
  },
};
