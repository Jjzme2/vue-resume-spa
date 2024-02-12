<template>
  <div class="markdown-renderer">
    <div v-if="markdown">
      <div class="markdown-content" v-html="renderedMarkdown"></div>
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
  },
};
</script>
