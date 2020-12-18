import { onMounted, ref } from "vue";

import axios from "./axios";

function useFetch(path) {
  const data = ref(null);

  onMounted(async () => {
    const res = await axios.get(path);

    data.value = res.data;
  });

  return data;
}

export default useFetch;
