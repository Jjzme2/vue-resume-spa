<template>
  <div class="auth-container" v-if="!isLoading">
    <div class="auth-status" v-if="isAuthenticated">
      <p>Welcome, {{ userName }}!</p>
      <button @click="logoutUser" class="auth-button">Log out</button>
    </div>
    <div class="auth-status" v-else>
      <p>Not logged in.</p>
      <button @click="login" class="auth-button">Log in</button>
    </div>
  </div>
  <div class="loading-container" v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { computed, watch } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { useStore } from "vuex";

export default {
  name: "AuthComponent",
  setup() {
    const store = useStore();
    const {
      isLoading,
      isAuthenticated: auth0IsAuthenticated,
      user,
      loginWithRedirect,
      logout,
    } = useAuth0();

    const isAuthenticated = computed(
      () => store.getters["auth/isAuthenticated"]
    );

    const userName = computed(
      () => store.getters["auth/getUser"]?.name || "Unknown User"
    );

    watch(
      isLoading,
      (loading) => {
        if (!loading && auth0IsAuthenticated) {
          store.commit("auth/setUser", user.value);
        }
      },
      { immediate: true }
    );

    const login = () => {
      store.dispatch("auth/login", { loginWithRedirect });
    };

    const logoutUser = () => {
      store.dispatch("auth/logout", { logout });
    };

    return {
      isLoading,
      isAuthenticated,
      userName,
      login,
      logoutUser,
    };
  },
};
</script>
