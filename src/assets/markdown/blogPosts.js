import MarkdownViewer from "/src/components/app/mainElements/panels/Study/MarkdownWithSyntaxHighlighting.vue";

const posts = [
  {
    name: "The Decisions we Make",
    component: MarkdownViewer,
    params: { fileName: "TheDecisionsWeMake" },
  },
  {
    name: "The Comfort in Discomfort",
    component: MarkdownViewer,
    params: { fileName: "TheComfortInDiscomfort" },
  },
];

export default posts;
