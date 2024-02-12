<template>
  <BaseView>
    <template #default>
      <goToButton buttonText="Go Home"></goToButton>
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
  name: "NoteView",
  components: {
    BaseView,
    directoryPanel,
    goToButton,
  },
  data() {
    return {
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
