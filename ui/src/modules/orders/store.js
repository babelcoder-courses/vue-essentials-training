import router from "@/router";

export default {
  namespaced: true,

  state: {
    currentOrder: {},
  },

  mutations: {
    addOrderItem(state, { foodId, quantity }) {
      if (quantity === 0) {
        delete state.currentOrder[foodId];

        return;
      }

      state.currentOrder[foodId] = quantity;
    },
  },

  actions: {
    async createOrder({ commit }) {
      commit(
        "ui/setFlashMessage",
        {
          type: "success",
          message: "Your order has been placed.",
        },
        { root: true }
      );
      router.push("/");
    },
  },

  getters: {
    orderItem: (state) => (foodId) => state.currentOrder[foodId],
    orderItemsCount: (state) => Object.keys(state.currentOrder).length,
    hasOrderItems: (_, getters) => getters.orderItemsCount > 0,
    orderPrice({ currentOrder }, _getters, _rootState, rootGetters) {
      let totalPrice = 0;

      for (const foodId in currentOrder) {
        const { price } = rootGetters["foods/getFood"](foodId);

        totalPrice += price * currentOrder[foodId];
      }

      return totalPrice;
    },
  },
};
