<template>
  <BaseView>
    <template #default>
      <goToButton buttonText="Go Home"></goToButton>
      <h1>I'm hopeful that this webpage is helpful to you and your company.</h1>

      <div>
        <h2>Resume</h2>
        <p>
          I've included my resume here for your convenience. If you have any
          questions, please feel free to reach out to me.
        </p>
        <div class="centered boxed fit">
          <VuePDF :pdf="pdf" :page="1" />
        </div>
        <!-- Download -->
        <a href="/resume/2023-06-27.pdf" download="ILYTAT-Resume.pdf"
          >Download</a
        >
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import goToButton from "@/components/app/mainElements/buttons/GoToButton.vue";
import { usePDF, VuePDF } from "@tato30/vue-pdf";
// import resume from "";

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
    const { pdf, pages, info } = usePDF("/resume/2023-06-27.pdf");

    console.log(JSON.stringify(info));
    console.log(JSON.stringify(pages));

    console.log(`Document has ${pages} pages`);
    console.log(`Document info: ${info}`);

    return {
      pdf,
    };
  },
};
</script>
