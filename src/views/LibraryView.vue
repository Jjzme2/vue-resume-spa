<template>
  <BaseView>
    <template #default>
      <h1>Library</h1>
      <p>
        Thank you for choosing our journals. We are happy to create these
        journals for you, if you are looking for anything else that you can not
        find here, please <a href="">reach out</a> and we will be happy to
        accomodate!
      </p>

      <JournalLibrary></JournalLibrary>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import JournalLibrary from "@/components/app/mainElements/journals/JournalLibrary.vue";

export default {
  name: "LibraryView",
  components: {
    BaseView,
    JournalLibrary,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
