<template>
  <dl>
    <template v-for="(value, key) in post" :key="key">
      <dt>{{ key }}</dt>
      <dd>{{ value }}</dd>
    </template>
  </dl>
  <button @click="goBack" class="btn">Go Back</button>
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
    const post = computed(() => store.state.posts.items[0]);

    const goBack = () => router.go(-1);

    onMounted(() => store.dispatch("posts/loadPost", { id }));

    return {
      post,
      goBack,
    };
  },
};
</script>

<style>
</style>