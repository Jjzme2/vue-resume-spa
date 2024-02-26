<template>
  <BaseView>
    <template #default>
      <goToButton buttonText="Go Home"></goToButton>
      <div>
        <p>
          I've included my resume here for your convenience. You can view or
          <a :href="this.resumeLocation" download="ILYTAT-Resume.pdf"
            >download</a
          >
          the file
        </p>
        <div class="centered boxed fit">
          <!-- <VuePDF :pdf="pdf" /> -->
          <VuePDF :pdf="pdf" @click="openPDF" @loaded="onLoaded" />
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
      resumeLocation: "/resume/2024-02-20.pdf",
      isLoading: true,
    };
  },
  setup() {
    const { pdf } = usePDF("/resume/2024-02-20.pdf");

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
      if (this.isLoading) return;
      const newWindow = window.open("", "_blank");
      newWindow.document.write(
        `<html>
  <head>
    <title>ILYTAT Resume Viewer</title>
    <style>
      .button-container {
        text-align: center;
        margin-bottom: 20px;
      }
      .button-container button {
        margin-right: 10px;
      }
    </style>
  </head>
  <body>
    <div class="button-container">
      <button onclick="window.close()">Close</button>
    </div>
    <embed width="100%" height="100%" name="plugin" src="${this.resumeLocation}" type="application/pdf"></embed>
  </body>
</html>`
      );
    },
    onLoaded() {
      console.log("onLoaded");
      this.isLoading = false;
    },
  },
};
</script>
