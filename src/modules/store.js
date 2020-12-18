import { createStore, createLogger } from "vuex";

import posts from "@/modules/posts/store";
import users from "@/modules/users/store";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    posts,
    users,
  },
  plugins: debug ? [createLogger()] : [],
});
