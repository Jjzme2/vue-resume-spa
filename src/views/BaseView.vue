<template>
  <mainLayout>
    <template #header v-if="includeHeader"></template>
    <template #default>
      <div class="main-content">
        <slot></slot>
      </div>
    </template>
    <template #footer v-if="includeFooter"></template>
  </mainLayout>
</template>

<script>
import mainLayout from "@/components/app/layoutElements/MainLayout.vue";

export default {
  name: "BaseView",
  components: {
    mainLayout,
  },
  props: {
    includeHeader: {
      type: Boolean,
      default: true,
    },
    includeFooter: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
