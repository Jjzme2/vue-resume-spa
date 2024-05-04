const config = {
  name: "Rainbow Rush",
  description:
    "A challenging game inspired by the stroop effect, where you have to select the color of the word, not the word itself.",
  getComponent: async () => {
    return await import(
      "../../../src/components/app/mainElements/cards/RainbowRush/ColorNameCard.vue"
    )
      .then((m) => m.default)
      .catch((e) => console.error(e));
  },
};

export default config;
