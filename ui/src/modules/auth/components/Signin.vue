<template>
  <auth-form
    title="Sign in"
    altLink="/auth/sign-up"
    altText="Or Sign up"
    @submit="signin"
  ></auth-form>
</template>

<script>
import { useStore } from "vuex";

import AuthForm from "./AuthForm.vue";

export default {
  components: {
    AuthForm,
  },

  setup() {
    const store = useStore();
    const signin = (auth) => store.dispatch("auth/signin", auth);

    return {
      signin,
    };
  },
};
</script>

<style>
</style>