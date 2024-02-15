<template>
  <router-link :to="destination">
    <button class="button">{{ buttonText }}</button>
  </router-link>
</template>

<script>
export default {
  name: "GoToButton",
  props: {
    destination: {
      type: String,
      default: "/",
    },
    buttonText: {
      type: String,
      default: "Go Back",
    },
  },
  computed: {
    // from() {
    // 	return this.$route.path;
    // },
  },
};
</script>

<style scoped>
.button {
  background-color: #4caf50;
  /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}
</style>
