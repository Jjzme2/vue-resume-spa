<template>
  <div class="main-layout">
    <header class="header" v-if="$slots.header">
      <quoteDisplay></quoteDisplay>
    </header>
    <main class="body">
      <slot></slot>
    </main>
    <footer class="footer" v-if="$slots.footer">
      <footer>
        <p>&copy; {{ yearTag }}</p>
        <!-- <span>yearTag</span> -->
      </footer>
    </footer>
  </div>
</template>
<script>
import quoteDisplay from "@/components/app/mainElements/display/QuoteDisplay.vue";
export default {
  name: "MainLayout",
  components: {
    quoteDisplay,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      startYear: 2024,
    };
  },
  computed: {
    yearTag() {
      return this.currentYear > this.startYear
        ? `${this.startYear} - ${this.currentYear}`
        : this.startYear;
    },
  },
};
</script>
<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: var(--secondary-background-color);
  padding: 1rem;
  box-shadow: var(--primary-shadow);
}

.body {
  background-color: var(--primary-background-color);
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem;
}

.footer {
  background-color: var(--secondary-background-color);
  padding: 1rem;
  box-shadow: var(--primary-shadow), 0 2px 10px rgba(0, 0, 0, 0.12);
}
</style>
