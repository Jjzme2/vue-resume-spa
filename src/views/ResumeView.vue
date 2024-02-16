<template>
  <BaseView>
    <template #default>
      <goToButton buttonText="Go Home"></goToButton>
      <div>
        <p>
          I've included my resume here for your convenience. You can view or
          <a href="/resume/2023-06-27.pdf" download="ILYTAT-Resume.pdf"
            >download</a
          >
          the file
        </p>
        <div class="centered boxed fit">
          <VuePDF :pdf="pdf" />
          <!-- <VuePDF :pdf="pdf" @click="openPDF" /> -->
        </div>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import goToButton from "@/components/app/mainElements/buttons/GoToButton.vue";
import { usePDF, VuePDF } from "@tato30/vue-pdf";

export default {
  name: "ResumeView",
  components: {
    BaseView,
    goToButton,
    VuePDF,
  },
  data() {
    return {
      developerTaskID: "f34c0e6c-e1b0-43a5-87fb-d90af0a88b55",
    };
  },
  setup() {
    const { pdf } = usePDF("/resume/2023-06-27.pdf");
    // const { pdf, pages, info } = usePDF("/resume/2023-06-27.pdf");

    // console.log(JSON.stringify(info));
    // console.log(JSON.stringify(pages));

    // console.log(`Document has ${JSON.stringify(pages)} pages`);
    // console.log(`Document info: ${JSON.stringify(info)}`);

    return {
      pdf,
    };
  },
  methods: {
    openPDF() {
      if (!this.pdf) return;
      const blob = new Blob([this.pdf], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url);
    },
  },
};
</script>
