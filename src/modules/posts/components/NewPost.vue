<template>
  <form @submit="createPost" class="form">
    <h1>Create Post</h1>
    <Field name="title" />
    <ErrorMessage name="title" />
    <Field name="desc" />
    <ErrorMessage name="desc" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
import { useRouter } from "vue-router";
import { useForm, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

import axios from "@/lib/axios";

export default {
  components: { Field, ErrorMessage },
  setup() {
    const router = useRouter();
    const { handleSubmit } = useForm({
      validationSchema: yup.object().shape({
        title: yup.string().required(),
        desc: yup.string().required(),
      }),
    });

    const createPost = handleSubmit(async (value) => {
      await axios.post("/posts", value);

      router.push("/posts");
    });

    return {
      createPost,
    };
  },
};
</script>

<style>
.form > * + * {
  display: block;
  margin-top: 1rem;
}
</style>