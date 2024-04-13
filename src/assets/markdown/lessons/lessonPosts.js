import MarkdownViewer from "/src/components/app/mainElements/panels/Study/MarkdownWithSyntaxHighlighting.vue";

const lessons = [
  {
    name: "The Web Development Essentials",
    component: MarkdownViewer,
    params: { fileName: "WebDevBuildingBlocks" },
  },
];

export default lessons;
