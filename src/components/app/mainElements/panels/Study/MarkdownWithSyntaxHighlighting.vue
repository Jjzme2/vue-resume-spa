<template>
  <div class="markdown-renderer">
    <div v-if="markdown">
      <div
        class="markdown-content"
        v-html="renderedMarkdown"
        @click="openFile"
      ></div>
      <div class="view-post-button">
        <button @click="openFile">View Post</button>
      </div>
      <button class="primary-button" @click="downloadAsHtml">Download</button>
    </div>
    <div v-else>
      <p>There was a problem accessing this file.</p>
    </div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";

export default {
  props: {
    fileName: {
      type: String,
      required: true,
    },
  },
  beforeMount() {
    this.$store.dispatch("markdowns/fetchAll");
  },
  computed: {
    markdown() {
      var markdown = this.$store.getters["markdowns/getMarkdownByName"](
        this.fileName
      );
      if (!markdown) {
        return null;
      }
      return markdown;
    },
    renderedMarkdown() {
      if (!this.markdown) {
        return null;
      }
      return this.renderMarkdown(this.markdown.content);
    },
  },
  methods: {
    renderMarkdown(markdown) {
      const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
      });
      return md.render(markdown);
    },
    downloadAsHtml() {
      const blob = new Blob([this.renderedMarkdown], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = this.fileName + ".html";
      a.click();
      URL.revokeObjectURL(url);
    },
    openFile() {
      const newWindow = window.open("print.ILYTAT.markdown", "_blank");
      //  Instead of about:blank, you can use a URL to a blank HTML page, such as "https://blank.org/"

      newWindow.document.write(
        `<html>
	     <head>
	       <title>ILYTAT Markdown Viewer</title>
	       <link rel="stylesheet" href="/style/cssImporter.css" />
	       <link rel="stylesheet" media="print" href="/style/printStyles.css" />
	     </head>
	     <body>
	       <div class="button-container no-print centered">
	         <button class="primary-button" onclick="window.print()">Print</button>
	         <button class="primary-button" onclick="window.close()">Close</button>
	       </div>

		   <div class="centered boxed shadow-emerald third-w">
		     <p class="centered large-text colored-text-primary">ILYTAT</p>
			 </div>

	       <div class="markdown-content">
	         ${this.renderedMarkdown}
	       </div>
	     </body>
	   </html>`
      );
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .markdown-content {
    display: none;
  }
  .view-post-button {
    display: block;
  }
}
@media (min-width: 769px) {
  .markdown-content {
    display: block;
  }
  .view-post-button {
    display: none;
  }
}
</style>
