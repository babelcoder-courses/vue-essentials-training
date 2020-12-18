<template>
  <div class="flex items-center h-12 bg-red-600 text-white p-2">
    <router-link to="/">Restaurant</router-link>
    <div class="flex items-center ml-auto">
      <router-link to="/order" class="mr-3">
        <font-awesome-layers full-width class="fa-lg">
          <font-awesome-icon :icon="faCartPlus" />
          <font-awesome-layers-text
            v-if="orderItemsCount > 0"
            counter
            :value="orderItemsCount"
            :key="orderItemsCount"
            position="top-right"
            class="fa-lg bg-red-500 border-2 border-gray-600"
          />
        </font-awesome-layers>
      </router-link>
      <profile-menu v-if="isLoggedIn"></profile-menu>
      <router-link
        to="/auth/sign-in"
        v-else
        class="bg-red-300 text-red-900 p-1 rounded"
        >Login</router-link
      >
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import ProfileMenu from "./ProfileMenu.vue";

export default {
  components: {
    ProfileMenu,
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText,
  },
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => store.getters["auth/isLoggedIn"]);
    const orderItemsCount = computed(
      () => store.getters["orders/orderItemsCount"]
    );

    return {
      isLoggedIn,
      orderItemsCount,
      faCartPlus,
    };
  },
};
</script>

<style>
</style>