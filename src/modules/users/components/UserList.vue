<template>
  <div>
    <router-link to="/posts/new">Create Post</router-link>
    <div>Count - {{ count }}</div>
  </div>
  <ul>
    <li v-for="{ id, name } of users" :key="id">
      <router-link :to="`/users/${id}`">
        {{ name }}
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
    const users = computed(() => store.state.users.items);
    const count = computed(() => store.getters["users/count"]);

    onMounted(() => store.dispatch("users/loadUsers"));

    return {
      count,
      users,
    };
  },
};
</script>

<style>
</style>