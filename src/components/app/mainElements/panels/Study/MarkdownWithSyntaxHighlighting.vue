<template>
  <div class="markdown-renderer">
    <div v-if="markdown">
      <div
        class="markdown-content"
        v-html="renderedMarkdown"
        @click="openFile"
      ></div>
      <button class="primary-button" @click="downloadFile">Download</button>
    </div>
    <div v-else>No Files found</div>
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
      console.log(this.fileName);
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
    downloadFile() {
      const blob = new Blob([this.renderedMarkdown], {
        type: "text/markdown",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = this.fileName + ".html";
      a.click();
    },
    openFile() {
      const newWindow = window.open("", "_blank");
      newWindow.document.write(
        `<html>
	     <head>
	       <title>ILYTAT Markdown Viewer</title>
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
	         <button onclick="window.print()">Print</button>
	         <button onclick="window.close()">Close</button>
	       </div>
	       <div class="pdf-container">
	         ${this.renderedMarkdown}
	       </div>
	     </body>
	   </html>`
      );
    },
  },
};
</script>
