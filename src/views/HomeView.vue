<template>
  <BaseView>
    <template #default>
      <alertBox
        v-if="developerMessage"
        :message="developerMessage.message"
        :type="developerMessage.type"
        :displayOnOpen="true"
      ></alertBox>

      <navigationPanel
        :routes="[{ name: 'Warriors of ILYTAT', path: 'Warriors' }]"
      ></navigationPanel>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
// import greetingText from "@/components/app/mainElements/text/GreetingText.vue";
import alertBox from "@/components/app/mainElements/alerts/alertBox.vue";
import navigationPanel from "@/components/app/mainElements/panels/NavigationPanel.vue";

// import SubscriptionCard from "@/components/app/mainElements/cards/SubscriptionCard.vue";

export default {
  name: "HomeView",
  components: {
    BaseView,
    // greetingText,
    alertBox,
    navigationPanel,

    // SubscriptionCard,
  },
  data() {
    return {
      developerTaskID: "d069a0a3-c0d3-4882-8645-271014f2ff34",
      developerMessage: null,
      developerDescription:
        "I am a Full Stack Developer with a passion for creating and building web applications. I have experience with a variety of technologies and languages, including JavaScript, ColdFusion, SQL, and C#. I am always looking for new opportunities to learn and grow as a developer.",
    };
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
