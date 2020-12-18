<template>
  <div v-if="hasOrderItems" class="m-3 md:mx-auto md:w-3/5 space-y-3">
    <h1 class="text-3xl text-center mt-3">Your Order</h1>
    <div v-for="{ id, name, image } of foods" :key="id">
      <div class="flex border border-gray-200 rounded relative">
        <img :src="image" :alt="name" class="w-40 h-28" />
        <div class="flex-1 p-3">
          <p class="text-lg text-gray-700">{{ name }}</p>
          <p class="absolute bottom-3 text-red-600">
            {{ currentOrder[id] }} items
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="text-red-500 font-bold text-2xl">{{ currentPrice }} $</div>
      <button
        class="bg-red-500 text-white p-2 rounded ml-auto block"
        @click="orderFoods"
      >
        Confirm
      </button>
    </div>
  </div>
  <div v-else class="text-center">
    <div class="my-3 text-3xl">You have no items in your order.</div>
    <router-link to="/foods" class="p-2 bg-red-500 text-white">
      Back to Menu
    </router-link>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import useAuthRequired from "@/lib/useAuthRequired";

export default {
  setup() {
    useAuthRequired();

    const store = useStore();
    const hasOrderItems = computed(() => store.getters["orders/hasOrderItems"]);
    const foods = computed(() => store.state.foods.items);
    const currentOrder = computed(() => store.state.orders.currentOrder);
    const currentPrice = computed(() => store.getters["orders/orderPrice"]);

    const orderFoods = () => store.dispatch("orders/createOrder");

    onMounted(() => {
      if (!hasOrderItems.value) return;

      store.dispatch("foods/loadFoodsInCurrentOrderItems");
    });

    return {
      hasOrderItems,
      foods,
      currentOrder,
      orderFoods,
      currentPrice,
    };
  },
};
</script>

<style>
</style>