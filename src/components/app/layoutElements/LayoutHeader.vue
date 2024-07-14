<template>
  <div class="layout-header">
    <div class="header-logo">
      <img src="/images/new_logo_png.png" alt="logo" class="header-logo" />
    </div>

    <quoteDisplay></quoteDisplay>

    <button @click="toggleNav" class="primary-button">Menu</button>

    <div class="nav-panel" :class="{ 'is-visible': isNavVisible }">
      <navigationPanel
        v-if="isNavVisible"
        :routes="customRoutes"
      ></navigationPanel>
    </div>
  </div>
</template>

<script>
import quoteDisplay from "@/components/app/mainElements/display/QuoteDisplay.vue";
import navigationPanel from "@/components/app/mainElements/panels/NavigationPanel.vue";

import NavigationOption from "@/models/app_models/NavigationOption.js";

export default {
  name: "LayoutHeader",
  components: {
    quoteDisplay,
    navigationPanel,
  },
  data() {
    return {
      isNavVisible: false,
      customRoutes: [
        new NavigationOption("Home", "home"),
        // new NavigationOption("About", "about"),
        // new NavigationOption("Blog", "blog"),
        // new NavigationOption("Forums", "forums"),
        // new NavigationOption("Contact", "contact"),
      ],
    };
  },
  watch: {
    // Once the user is logged in, an option to logout should appear in the navigation panel.
    isAuthenticated() {
      if (this.$store.getters["auth/isAuthenticated"]) {
        this.customRoutes.push(new NavigationOption("Logout", "logout"));
      }
    },
  },
  methods: {
    toggleNav() {
      this.isNavVisible = !this.isNavVisible;
    },
  },
};
</script>

<style scoped>
.layout-header {
  background: linear-gradient(to right, #cac4b6 40%, #b2a89c 70%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.25rem 1rem;
  border-radius: 15px;
}

.primary-button {
  display: block;
}

.header-logo {
  border-radius: 15px;
  width: 100px;
  height: 100px;
}

.nav-panel {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
  gap: 1rem;
  justify-content: end;
  width: 100%;
}

.nav-panel.is-visible {
  display: flex;
}

@media (max-width: 768px) {
  .nav-panel {
    display: none;
  }

  .primary-button {
    display: none;
  }

  .header-logo {
    width: 50px;
    height: 50px;
  }
}
</style>
