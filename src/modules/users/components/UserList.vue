<template>
  <ul>
    <li v-for="{ id, name } of users" :key="id">
      <router-link :to="`/users/${id}`">
        {{ name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import useFetch from "@/lib/useFetch";

export default {
  setup() {
    const users = useFetch("/users");

    return {
      users,
    };
  },
};
</script>

<style>
</style>