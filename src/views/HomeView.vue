<template>
  <BaseView>
    <template #default>
      <greetingText text="ILYTAT Homepage"></greetingText>
      <div>
        <!-- Show things here: Games/Blogs/About -->
        <!-- <button @click="showGames">Games</button> -->
        <button @click="showNotes">Notes</button>
        <button @click="showAbout">About</button>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import greetingText from "@/components/app/mainElements/text/GreetingText.vue";

export default {
  name: "HomeView",
  components: {
    BaseView,
    greetingText,
  },
  data() {},
  methods: {
    showGames() {
      console.log("Show games");
    },
    showBlogs() {
      console.log("Show blogs");
    },
    showNotes() {
      this.$router.push({ name: "markdown-files" });
    },
    showAbout() {
      this.$router.push({ name: "WhoIsILYTAT" });
      //   console.log("Show about");
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
