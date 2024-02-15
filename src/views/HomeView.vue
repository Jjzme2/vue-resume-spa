<template>
  <BaseView>
    <template #default>
      <greetingText :text="holidayMessage" fontSize="4.2em"></greetingText>
      <div class="me-area">
        <img src="../assets/images/personal/me.jpg" alt="Me" />
        <p>
          Hi, I'm Jj. I also often go by Jjzme2, or less so, but in some
          professional scope, ILYTAT. I am a software developer, who is strongly
          committed to the idea of creating a better world through technology. I
          think everyone has a story to tell, and I want to help them tell it.
        </p>
      </div>
      <div class="nav-panel">
        <button @click="showAbout" class="primary-button">About</button>
        <button @click="showServices" class="primary-button">Services</button>
        <button @click="showProjects" class="primary-button">Projects</button>
        <button @click="showResume" class="primary-button">Resume</button>
        <button @click="showBlog" class="primary-button">Blog</button>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import greetingText from "@/components/app/mainElements/text/GreetingText.vue";
import { usHolidays } from "@/assets/data/holidays.js";

export default {
  name: "HomeView",
  components: {
    BaseView,
    greetingText,
  },
  data() {
    return {
      developerTaskID: "d069a0a3-c0d3-4882-8645-271014f2ff34",
    };
  },
  computed: {
    holidayMessage() {
      const today = new Date();
      const month = today.getMonth();
      const day = today.getDate();

      const holiday = usHolidays.find((holiday) =>
        holiday.date.includes(`${month + 1}/${day}`)
      );
      //   return month;
      return holiday ? holiday.message : "Welcome to ILYTAT";
    },
  },
  methods: {
    showBlog() {
      this.$router.push({ name: "ILYTATBlog" });
    },
    showAbout() {
      this.$router.push({ name: "WhoIsILYTAT" });
    },
    showServices() {
      this.$router.push({ name: "ILYTATServices" });
    },
    showProjects() {
      this.$router.push({ name: "ILYTATProjects" });
    },
    showResume() {
      this.$router.push({ name: "ILYTATResume" });
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
