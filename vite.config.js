import path from "path";

export default {
  alias: {
    "/@/": path.resolve(__dirname, "src"),
  },
  resolvers: [
    {
      alias(id) {
        return id.replace(/^@\//, "/@/");
      },
    },
  ],
};
