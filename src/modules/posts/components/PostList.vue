<template>
  <div>
    <router-link to="/posts/new">Create Post</router-link>
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
import useFetch from "@/lib/useFetch";

export default {
  setup() {
    const posts = useFetch("/posts");

    return {
      posts,
    };
  },
};
</script>

<style>
</style>