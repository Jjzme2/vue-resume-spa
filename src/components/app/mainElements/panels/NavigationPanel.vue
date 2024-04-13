<template>
  <div class="nav-panel">
    <!-- <button @click="showResume" class="primary-button">Resume</button> -->
    <button
      v-for="route in routes"
      :key="route.name"
      @click="showComponent(route.path)"
      class="primary-button"
    >
      {{ route.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "NavigationPanel",
  props: {
    routes: {
      type: Array,
      required: true,
      // Require that it have two keys: name and path
      validator: (value) => {
        return value.every((item) => "name" in item && "path" in item);
      },
    },
  },
  methods: {
    showComponent(path) {
      this.$router.push({ name: path });
    },
  },
};
</script>
