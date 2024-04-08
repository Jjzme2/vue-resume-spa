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
      developerKeySkills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Vue.js",
        "ColdFusion",
        "SQL",
        "Git",
        "GitHub",
        "VS Code",
        "Bootstrap",
      ],
      developerDescription:
        "First and foremost, I am a family man. I am a husband and father. So you may hear a lot of dad jokes, and at times any lessons I can share; I love quotes. Second I am a hard worker, and I am always looking to improve my skills, and determined to do my best. Third, I am a developer, my professional experience has been in web development, but I love coding and learning new things, and I'm eager to combine my second and third focuses, my entrepreneurial spirit is itching for that third spot.",
      developerDescriptionAlt:
        "I'm a passionate web developer with 1 year of experience in web development. I'm proficient in " +
        this.developerKeySkills.join(" ") +
        " and constantly strive to stay ahead of the curve by learning new technologies. As a problem solver with a strong work ethic, I thrive in collaborative environments and am eager to contribute to innovative projects.",
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
