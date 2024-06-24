<template>
  <BaseView :includeGoHomeButton="false">
    <template #default>
      <alertBox
        v-if="developerMessage.show"
        :message="developerMessage.message"
        :type="developerMessage.type"
        :displayOnOpen="true"
      ></alertBox>

      <div class="home-message">
        <p>Welcome to ILYTAT.</p>
        <p>A place where there is always someone looking out for you.</p>
      </div>

      <textSubmissionElement
        class="force-down"
        prompt="What's on your mind?"
        maxLength="250"
        showSubmitButton
        @submit="submitValue"
      ></textSubmissionElement>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import alertBox from "@/components/app/mainElements/alerts/alertBox.vue";
import textSubmissionElement from "@/components/app/mainElements/submissionElements/TextSubmissionElement.vue";

export default {
  name: "HomeView",
  components: {
    BaseView,
    alertBox,
    textSubmissionElement,
  },
  data() {
    return {
      developerMessage: {
        show: 0,
        message: "Welcome to the Home View",
        type: "info",
      },
    };
  },
  methods: {
    submitValue(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}

.home-message {
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.force-down {
  margin-top: 5rem;
}
</style>
