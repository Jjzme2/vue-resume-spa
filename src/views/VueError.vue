<template>
  <div v-html="htmlContent"></div>
</template>

<script>
export default {
  data() {
    return {
      htmlContent: "",
    };
  },
  mounted() {
    this.loadHtmlFile();
  },
  methods: {
    loadHtmlFile() {
      fetch("/404.html")
        .then((response) => response.text())
        .then((html) => {
          this.htmlContent = html;
        })
        .catch((error) => {
          this.$loggerUtils.sendErrorLog(
            "Error loading HTML file:",
            "VueError.vue -- loadHTMLFile",
            { error: error }
          );
        });
    },
  },
};
</script>
