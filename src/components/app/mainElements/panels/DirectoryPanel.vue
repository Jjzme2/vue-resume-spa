<template>
  <div>
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        class="tab"
      >
        {{ tab.name }}
      </div>
    </div>
    <component :is="tabs[activeTab].component"></component>
  </div>
</template>

<script>
import AboutMe from "./About/AboutMe.vue";
import ContactMe from "./About/ContactMe.vue";
import MyExperience from "./About/MyExperience.vue";

// import Tab2 from "./Tab2.vue";

export default {
  data() {
    return {
      activeTab: 0,
    };
  },
  components: {
    AboutMe,
    ContactMe,
    MyExperience,
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: space-around;
}
</style>
