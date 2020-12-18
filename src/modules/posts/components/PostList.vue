<template>
  <div>
    <router-link to="/posts/new">Create Post</router-link>
    <div>Count - {{ count }}</div>
  </div>
  <ul>
    <li v-for="{ id, title } of posts" :key="id">
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