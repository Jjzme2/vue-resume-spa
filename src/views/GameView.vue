<template>
  <BaseView>
    <template #default>
      <ILYTATWindow :windowTitle="windowTitle" :allowClose="false">
        <selectorTool
          :options="games"
          :hasSubmit="true"
          label="Game Selector"
          submitLabel="Confirm Selection"
          @submit="selectGame"
        ></selectorTool>
        <div v-if="isLoadingComponent">Loading Game...</div>
        <component v-else :is="gameComponent"></component>
      </ILYTATWindow>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import ILYTATWindow from "@/components/app/mainElements/panels/ILYTATWindow.vue";
import selectorTool from "@/components/app/mainElements/tools/selectorTool.vue";

export default {
  name: "GameView",
  components: {
    BaseView,
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
        config: "",
      },
      isLoadingComponent: false,
      gameComponent: null,
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
          if (newVal.name != "") {
            this.game = newVal;
            this.$loggerUtils.sendLog("Game Selected", newVal);
            this.game.name = this.$stringConversion.convertStringToCase(
              this.game.name,
              "pascal"
            );
            this.loadComponent(this.game.name);
          }
        }
      },
    },
  },
  methods: {
    selectGame(payload) {
      this.game = payload;
    },
    async loadComponent(gameName) {
      let config = await import(`/data/games/${gameName}/config.js`).catch(
        (error) => {
          console.error("Error loading component: ", error);
        }
      );
      this.gameComponent = config.default.getComponent();
      console.log("Game Component: ", this.gameComponent);
      this.isLoadingComponent = false;
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
