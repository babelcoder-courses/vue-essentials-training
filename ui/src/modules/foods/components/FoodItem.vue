<template>
  <div class="absolute top-2 right-2 text-white bg-red-600 rounded px-2">
    {{ food.price }} $
  </div>
  <img :src="food.image" :alt="food.name" class="h-52 w-full" />
  <div class="p-2 text-gray-800">
    {{ food.name }}
  </div>
  <div class="p-2 text-gray-600">
    {{ food.desc }}
  </div>
  <div class="flex justify-center p-2 mt-auto bg-red-300">
    <button class="px-2 bg-red-500 text-white" @click="decrement">-</button>
    <div class="px-3 bg-gray-100">{{ quantity }}</div>
    <button class="px-2 bg-red-500 text-white" @click="increment">+</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: ["food"],

  setup({ food }) {
    const store = useStore();
    const quantity = computed(
      () => store.getters["orders/orderItem"](food.id) || 0
    );

    const updateOrderItem = (amount) => {
      const nextQuantity = quantity.value + amount;

      store.commit("orders/addOrderItem", {
        foodId: food.id,
        quantity: nextQuantity > 0 ? nextQuantity : 0,
      });
    };

    const increment = () => updateOrderItem(1);

    const decrement = () => updateOrderItem(-1);

    return {
      food,
      quantity,
      increment,
      decrement,
    };
  },
};
</script>

<style>
</style>