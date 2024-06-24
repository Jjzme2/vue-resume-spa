<template>
  <div class="main-layout">
    <header class="header" v-if="$slots.header">
      <layoutHeader></layoutHeader>
    </header>

    <main class="body">
      <slot></slot>
    </main>

    <footer class="footer" v-if="$slots.footer">
      <layoutFooter></layoutFooter>
    </footer>
  </div>
</template>

<script>
import layoutHeader from "@/components/app/layoutElements/LayoutHeader.vue";
import layoutFooter from "@/components/app/layoutElements/LayoutFooter.vue";

export default {
  name: "MainLayout",
  components: {
    layoutHeader,
    layoutFooter,
  },
};
</script>
