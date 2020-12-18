<template>
  <header class="flex space-x-3 p-3 w-full bg-green-500 text-white">
    <router-link to="/posts">Posts</router-link>
    <router-link to="/users">Users</router-link>
  </header>
  <div class="mx-3 mt-3">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>