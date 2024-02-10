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
    <component
      :is="tabs[activeTab].component"
      v-bind="tabs[activeTab].params"
    ></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
    };
  },
  components: {},
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
