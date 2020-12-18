<template>
  <h1 class="text-center text-3xl my-2">All Foods</h1>
  <div class="flex m-3">
    <input
      type="text"
      class="block w-full border-gray-200 border p-2"
      placeholder="Enter food name..."
      v-model="keyword"
    />
    <button class="p-2 bg-red-500 text-white" @click="search">Search</button>
  </div>
  <div
    class="m-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
  >
    <div
      v-for="food of foods"
      :key="food.id"
      class="flex flex-col rounded border border-gray-200 relative"
    >
      <food-item :food="food"></food-item>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

import FoodItem from "./FoodItem.vue";

export default {
  components: {
    FoodItem,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const keyword = ref("");
    const foods = computed(() => store.state.foods.items);

    const loadFoods = () => store.dispatch("foods/loadFoods", route.query.q);
    const search = () => router.push(`/foods?q=${keyword.value}`);

    onMounted(loadFoods);

    watch(
      () => route.query.q,
      (query, prevQuery) => query !== prevQuery && loadFoods()
    );

    return {
      foods,
      keyword,
      search,
    };
  },
};
</script>

<style>
</style>