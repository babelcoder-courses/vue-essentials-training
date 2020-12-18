import { createStore, createLogger } from "vuex";

import auth from "@/modules/auth/store";
import ui from "@/modules/ui/store";
import foods from "@/modules/foods/store";
import orders from "@/modules/orders/store";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    auth,
    ui,
    foods,
    orders,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
