<template>
  <div class="relative">
    <font-awesome-icon
      :icon="faUser"
      @click="toggleMenu"
      class="cursor-pointer"
    ></font-awesome-icon>
    <ul
      v-if="isOpened"
      class="absolute bg-red-900 w-60 right-0 text-red-200 rounded"
    >
      <li class="p-2" @click="logout">Logout</li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const store = useStore();
    const isOpened = ref(false);

    const toggleMenu = () => (isOpened.value = !isOpened.value);

    const logout = () => store.dispatch("auth/signout");

    return {
      faUser,
      isOpened,
      toggleMenu,
      logout,
    };
  },
};
</script>

<style>
</style>