<template>
  <BaseView>
    <template #default>
      <alertBox
        v-if="developerMessage.show"
        :message="developerMessage.message"
        :type="developerMessage.type"
        :displayOnOpen="true"
      ></alertBox>

      <navigationPanel :routes="customRoutes"></navigationPanel>
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
      customRoutes: [{ name: "Game Room", path: "games" }],
    };
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
