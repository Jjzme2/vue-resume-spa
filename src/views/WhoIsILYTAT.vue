<template>
  <BaseView>
    <template #default>
      <goTobutton buttonText="Go Home"></goTobutton>
      <greetingText text="Nice to have you here!"></greetingText>
      <directoryPanel></directoryPanel>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
// import greetingText from "@/components/app/mainElements/text/GreetingText.vue";
import directoryPanel from "@/components/app/mainElements/panels/DirectoryPanel.vue";
import goTobutton from "@/components/app/mainElements/buttons/GoToButton.vue";

export default {
  name: "HomeView",
  components: {
    BaseView,
    // greetingText,
    goTobutton,
    directoryPanel,
  },
  data() {},
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
