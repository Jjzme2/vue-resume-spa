<template>
  <BaseView>
    <template #default>
      <goToButton buttonText="Go Home"></goToButton>
      <div class="centered boxed pop med-text">
        <p>
          Given my appreciation for the voice we all have, I wanted to create a
          space where I could share my thoughts and experiences. To that end,
          I've created a section here exclusively for that. If you find yourself
          curious, I hope some of my thoughts can help you in some way.
        </p>
      </div>
      <directoryPanel :tabs="this.FileTabs"></directoryPanel>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import goToButton from "@/components/app/mainElements/buttons/GoToButton.vue";
import directoryPanel from "@/components/app/mainElements/panels/DirectoryPanel.vue";
import MarkdownViewer from "@/components/app/mainElements/panels/Study/MarkdownWithSyntaxHighlighting.vue";

export default {
  name: "BlogView",
  components: {
    BaseView,
    directoryPanel,
    goToButton,
  },
  data() {
    return {
      developerTaskID: "0d00847c-0c76-419d-a9d2-ef18f25bc269",
      FileTabs: [
        {
          name: "Keep 'em Separated",
          component: MarkdownViewer,
          params: { fileName: "ImportanceOfSOC" },
        },
        {
          name: "What is a Static website?",
          component: MarkdownViewer,
          params: { fileName: "WhatIsAStaticWebsite" },
        },
        // { name: "Contact Me", component: "ContactMe" },
        // { name: "My Experience", component: "MyExperience" },
      ],
    };
  },
};
</script>
