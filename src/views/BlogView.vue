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
      <!-- {{ this.FileTabs ?? "No FileTabs" }} -->
      <div v-if="this.FileTabs" class="centered boxed pop med-text">
        <p>
          <!-- {{ this.FileTabs }} -->
          <directoryPanel :tabs="this.FileTabs"></directoryPanel>
        </p>
      </div>
      <div v-else class="centered boxed pop med-text">
        <p>No files found!</p>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import goToButton from "@/components/app/mainElements/buttons/GoToButton.vue";
import directoryPanel from "@/components/app/mainElements/panels/DirectoryPanel.vue";

import posts from "@/assets/markdown/blogPosts.js";

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
      FileTabs: posts,
    };
  },
};
</script>
