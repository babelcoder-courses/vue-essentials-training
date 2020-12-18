<template>
  <dl>
    <template v-for="(value, key) in post" :key="key">
      <dt>{{ key }}</dt>
      <dd>{{ value }}</dd>
    </template>
  </dl>
  <button @click="goBack">Go Back</button>
</template>

<script>
import { useRoute, useRouter } from "vue-router";

import useFetch from "@/lib/useFetch";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const post = useFetch(`/posts/${route.params.id}`);

    const goBack = () => router.go(-1);

    return {
      post,
      goBack,
    };
  },
};
</script>

<style>
</style>