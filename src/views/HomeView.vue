<template>
  <BaseView>
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
          Welcome to ILYTAT, a place where we share our thoughts, journals, and
          provide easy ways to connect with us. We are a group of individuals
          passionate about technology, art, and the future. Our goal is to share
          our knowledge and experiences with you. We hope you enjoy your stay
          and find what you're looking for. If you have any questions or
          suggestions, feel free to contact us. We're always here to help.
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
