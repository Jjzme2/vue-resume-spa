<template>
  <div class="window">
    <div class="window-header">
      <h1>{{ windowTitle }}</h1>
      <button v-if="allowClose" @click="closeWindow">X</button>
    </div>
    <div class="window-body">
      <slot @hover="onHover"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ILYTATWindow",
  props: {
    windowTitle: {
      type: String,
      required: true,
    },
    allowClose: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    closeWindow() {
      this.$emit("close");
    },
    onHover() {
      this.$emit("hover");
    },
  },
};
</script>

<style scoped>
.window {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.window-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.window-header h1 {
  margin: 0 auto;
}

.window-header button {
  background: none;
  border: none;
  cursor: pointer;
}

.window-body {
  padding: 1rem;
}
</style>
