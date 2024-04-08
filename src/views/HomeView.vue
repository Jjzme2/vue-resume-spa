<template>
  <BaseView>
    <template #default>
      <alertBox
        v-if="developerMessage"
        :message="developerMessage.message"
        :type="developerMessage.type"
        :displayOnOpen="true"
      ></alertBox>

      <greetingText :text="holidayMessage" fontSize="4.2em"></greetingText>

      <div class="me-area">
        <img src="../assets/images/personal/me.jpg" alt="Me" />
        <p>
          {{ developerDescription }}
        </p>

        <SubscriptionCard></SubscriptionCard>
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
import alertBox from "@/components/app/mainElements/alerts/alertBox.vue";

import SubscriptionCard from "@/components/app/mainElements/cards/SubscriptionCard.vue";

export default {
  name: "HomeView",
  components: {
    BaseView,
    greetingText,
    alertBox,

    SubscriptionCard,
  },
  data() {
    return {
      developerTaskID: "d069a0a3-c0d3-4882-8645-271014f2ff34",
      developerMessage: null,
      developerDescription:
        "I am a Full Stack Developer with a passion for creating and building web applications. I have experience with a variety of technologies and languages, including JavaScript, ColdFusion, SQL, and C#. I am always looking for new opportunities to learn and grow as a developer.",
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
