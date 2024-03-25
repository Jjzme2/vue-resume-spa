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
  {
    name: "Have You Peaked?",
    component: MarkdownViewer,
    params: { fileName: "HaveYouPeaked" },
  },
];

export default posts;
