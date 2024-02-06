<template>
  <div>
    <div class="tabs">
      <div v-for="(tab, index) in tabs" :key="index" @click="activeTab = index">
        {{ tab.name }}
      </div>
    </div>
    <component :is="tabs[activeTab].component"></component>
  </div>
</template>

<script>
import AboutMe from "./AboutMe.vue";
// import Tab2 from "./Tab2.vue";
// import other tab components as needed

export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { name: "About Me", component: AboutMe },
        // { name: "Tab 2", component: Tab2 },
        // add other tabs as needed
      ],
    };
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: space-around;
}
</style>
