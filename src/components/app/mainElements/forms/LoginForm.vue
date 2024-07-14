<template>
  <div class="landing-page-banner">
    <h2>Welcome to our supportive community!</h2>
    <p>A place where everyone is always welcome, happy, and at peace.</p>
  </div>
  <div class="auth-status" v-if="isAuthenticated">
    <p>Welcome back, {{ userName }}!</p>
  </div>
  <div class="auth-status" v-else>
    <p>Not logged in.</p>
    <button @click="login" class="primary-button">Signup/Log in</button>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    userName() {
      return this.$store.getters["auth/user"].name || "";
    },
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login");
    },
  },
};
</script>
