<template>
  <div class="flex justify-between">
    <div>Count - {{ count }}</div>
    <router-link to="/posts/new" class="btn">Create Post</router-link>
  </div>
  <ul>
    <li
      v-for="{ id, title } of posts"
      :key="id"
      class="hover:text-green-500 transition-colors"
    >
      <router-link :to="`/posts/${id}`">
        {{ title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const posts = computed(() => store.state.posts.items);
    const count = computed(() => store.getters["posts/count"]);

    onMounted(() => store.dispatch("posts/loadPosts"));

    return {
      count,
      posts,
    };
  },
};
</script>

<style>
</style>