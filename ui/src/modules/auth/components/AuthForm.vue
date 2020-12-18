<template>
  <div class="flex justify-center">
    <form @submit="onSubmit" class="w-full md:w-2/5 lg:w-1/3 m-3 space-y-3">
      <h1 class="text-4xl text-center">{{ title }}</h1>
      <label class="block">
        <span class="text-gray-700">Email</span>
        <Field
          name="email"
          type="email"
          class="mt-1 block w-full border-gray-200 border p-2 rounded-sm"
          placeholder="elvis@gmail.com"
        />
        <ErrorMessage name="email" class="text-red-600" />
      </label>
      <label class="block">
        <span class="text-gray-700">Password</span>
        <Field
          name="password"
          type="password"
          class="mt-1 block w-full border-gray-200 border p-2 rounded-sm"
        />
        <ErrorMessage name="password" class="text-red-600" />
      </label>
      <button type="submit" class="w-full bg-red-500 text-white p-2 rounded">
        {{ title }}
      </button>
      <router-link :to="altLink" class="block text-center text-red-700">{{
        altText
      }}</router-link>
    </form>
  </div>
</template>

<script>
import { Field, ErrorMessage, useForm } from "vee-validate";
import * as yup from "yup";

export default {
  props: ["title", "altLink", "altText"],
  components: {
    Field,
    ErrorMessage,
  },
  setup(_, { emit }) {
    const { handleSubmit } = useForm({
      validationSchema: yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      }),
    });

    const onSubmit = handleSubmit((values) => {
      emit("submit", values);
    });

    return {
      onSubmit,
    };
  },
};
</script>

<style>
</style>