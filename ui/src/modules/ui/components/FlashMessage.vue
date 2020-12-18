<template>
  <div
    v-if="flashMessage"
    class="fixed bottom-3 right-3 w-60 text-white p-2 rounded"
    :class="{
      'bg-green-500': flashMessage.type === 'success',
      'bg-red-600': flashMessage.type === 'error',
    }"
  >
    {{ flashMessage.message }}
    <div class="absolute right-1 top-1 cursor-pointer" @click="close">
      <font-awesome-icon :icon="faTimes"></font-awesome-icon>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, toRef, toRefs } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const store = useStore();
    const flashMessage = computed(() => store.state.ui.flashMessage);

    const close = () => store.commit("ui/clearFlashMessage");

    return {
      flashMessage,
      close,
      faTimes,
    };
  },
};
</script>

<style>
</style>