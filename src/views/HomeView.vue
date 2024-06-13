<template>
  <BaseView :includeGoHomeButton="false">
    <template #default>
      <alertBox
        v-if="developerMessage.show"
        :message="developerMessage.message"
        :type="developerMessage.type"
        :displayOnOpen="true"
      ></alertBox>

      <div class="container">
        <navigationPanel :routes="customRoutes"></navigationPanel>

        <h1>Hi there!</h1>

        <p>
          Welcome to ILYTAT &mdash; the starting point of our budding literary
          venture! While our collection may be small for now, we're dedicated to
          expanding and enhancing it with your invaluable input. Currently
          showcasing enchanting children's tales, captivating notebooks, and
          stimulating daily prompts, we're committed to broadening our horizons
          to cater to your diverse interests. With seamless links to Amazon,
          your support fuels our growth and evolution. Join us on this exciting
          journey, and together, let's shape the future of our literary world.
          Happy exploring! And remember, your feedback guides us as we strive to
          create an enriching experience for you.
        </p>
        <!-- Create a component for featured items. Journals, Blogs, etc. -->
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import alertBox from "@/components/app/mainElements/alerts/alertBox.vue";
import navigationPanel from "@/components/app/mainElements/panels/NavigationPanel.vue";

export default {
  name: "HomeView",
  components: {
    BaseView,
    alertBox,
    navigationPanel,
  },
  data() {
    return {
      developerMessage: {
        show: 0,
        message: "Welcome to the Home View",
        type: "info",
      },
      customRoutes: [
        {
          name: "Our Journals",
          path: "library",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
