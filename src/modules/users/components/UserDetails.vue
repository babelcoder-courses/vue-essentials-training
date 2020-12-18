<template>
  <dl>
    <template v-for="(value, key) in user" :key="key">
      <dt>{{ key }}</dt>
      <dd>{{ value }}</dd>
    </template>
  </dl>
  <button @click="goBack">Go Back</button>
</template>

<script>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted } from "vue";

export default {
  setup() {
    const router = useRouter();
    const {
      params: { id },
    } = useRoute();
    const store = useStore();
    const user = computed(() => store.state.users.items[0]);

    const goBack = () => router.go(-1);

    onMounted(() => store.dispatch("users/loadUser", { id }));

    return {
      user,
      goBack,
    };
  },
};
</script>

<style>
</style>