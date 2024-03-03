<template>
  <BaseView>
    <template #default>
      <goTobutton buttonText="Go Home"></goTobutton>
      <greetingText text="Nice to have you here!"></greetingText>
      <directoryPanel :tabs="aboutTabs"></directoryPanel>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import directoryPanel from "@/components/app/mainElements/panels/DirectoryPanel.vue";
import goTobutton from "@/components/app/mainElements/buttons/GoToButton.vue";

// about me components
import AboutMe from "@/components/app/mainElements/panels/About/AboutMe.vue";
import ContactMe from "@/components/app/mainElements/panels/About/ContactMe.vue";
import MyExperience from "@/components/app/mainElements/panels/About/MyExperience.vue";
import Interests from "@/components/app/mainElements/panels/About/MyInterests.vue";

export default {
  name: "WhoIsView",
  components: {
    BaseView,
    goTobutton,
    directoryPanel,
  },
  data() {
    return {
      aboutTabs: [
        { name: "Experience", component: MyExperience },
        { name: "Interests", component: Interests },
        { name: "About Me", component: AboutMe },
        { name: "Contact Me", component: ContactMe },
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
