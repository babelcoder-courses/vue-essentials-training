<template>
  <auth-form
    title="Sign up"
    altLink="/auth/sign-in"
    altText="Or Sign in"
    @submit="signup"
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
    const signup = (auth) => store.dispatch("auth/signup", auth);

    return {
      signup,
    };
  },
};
</script>

<style>
</style>