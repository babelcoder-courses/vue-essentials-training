<template>
  <header class="header">
    <router-link to="/posts">Posts</router-link>
    <router-link to="/users">Users</router-link>
  </header>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
}

.header > * + * {
  margin-left: 1rem;
}
</style>