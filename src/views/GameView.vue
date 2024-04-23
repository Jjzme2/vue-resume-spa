<template>
  <BaseView>
    <template #default>
      <!-- Add your code here  -->
      <ILYTATWindow :windowTitle="windowTitle" :allowClose="0">
        <selectorTool
          :options="games"
          :hasSubmit="1"
          label="Game Selector"
          submitLabel="Confirm Selection"
          @submit="selectGame"
        ></selectorTool>
        <GamePanel :gameName="gameName"></GamePanel
      ></ILYTATWindow>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import ILYTATWindow from "@/components/app/mainElements/panels/ILYTATWindow.vue";
import selectorTool from "@/components/app/mainElements/tools/selectorTool.vue";
import GamePanel from "@/components/app/mainElements/panels/Game/GamePanel.vue";

export default {
  name: "GameView",
  components: {
    BaseView,
    GamePanel,
    ILYTATWindow,
    selectorTool,
  },
  created() {
    if (this.$store.getters["games/getAll"].length === 0) {
      this.$store.dispatch("games/fetchAll");
    }
  },
  data() {
    return {
      game: {
        name: "",
        id: "",
        data_location: "",
      },
    };
  },
  computed: {
    games() {
      return this.$store.getters["games/getAll"].map((game) => {
        return {
          name: game.name,
          value: game,
        };
      });
    },
    windowTitle() {
      return this.game.name || "Game Selector";
    },
  },
  watch: {
    game: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.gameName = this.$stringUtils.convertStringToCase(
            newVal.name,
            "pascal"
          );
        }
      },
    },
  },
  methods: {
    selectGame(payload) {
      console.log("Payload: ", payload);
      this.game = payload;
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
