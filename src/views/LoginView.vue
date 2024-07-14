<template>
  <BaseView :includeGoHomeButton="false">
    <template #default> <LoginForm></LoginForm> </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import LoginForm from "@/components/app/mainElements/forms/LoginForm.vue";

export default {
  name: "LoginView",
  components: {
    BaseView,
    LoginForm,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
