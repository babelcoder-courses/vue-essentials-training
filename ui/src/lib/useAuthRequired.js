import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

function useAuthRequired() {
  const store = useStore();
  const router = useRouter();
  const isLoggedIn = computed(() => store.getters["auth/isLoggedIn"]);

  const checkAuth = () => {
    if (isLoggedIn.value) return;

    store.commit("ui/setFlashMessage", {
      type: "error",
      message: "Login required",
    });

    router.push("/auth/sign-in");
  };

  onMounted(() => checkAuth());

  watch(isLoggedIn, () => {
    checkAuth();
  });
}

export default useAuthRequired;
