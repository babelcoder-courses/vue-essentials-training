<template>
  <layout-header></layout-header>
  <router-view></router-view>
  <flash-message></flash-message>
</template>

<script>
import LayoutHeader from "./Header.vue";
import FlashMessage from "../FlashMessage.vue";

export default {
  components: {
    LayoutHeader,
    FlashMessage,
  },
};
</script>

<style>
</style>