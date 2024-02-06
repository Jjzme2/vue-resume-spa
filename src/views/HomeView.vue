<template>
  <BaseView>
    <template #default>
      <greetingText text="Nice to have you here!"></greetingText>
      <directoryPanel></directoryPanel>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import greetingText from "@/components/app/mainElements/text/GreetingText.vue";
import directoryPanel from "@/components/app/mainElements/panels/DirectoryPanel.vue";

export default {
  name: "HomeView",
  components: {
    BaseView,
    greetingText,
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
