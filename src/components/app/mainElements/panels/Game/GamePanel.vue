<template>
  <!-- This is labelled as Game-Panel, but this is more effectively Rainbow Rush and a good bit of logic for that game. How can Game Panel handle different games and what should this instance of game be called? Just some things to consider... -->
  <div class="game-panel">
    <div class="game-panel-header">
      <div v-if="gameData">
        <h1>Game Data</h1>
        <h3>Packs:</h3>
        <div v-for="pack in gameData.packs" :key="pack.name">
          <h5>{{ pack.name }}</h5>
          <div v-for="color in pack.colors" :key="color.name">
            <div style="background-color: black; width: 20%; margin: 0 auto">
              <p :style="{ color: color.hex }">{{ color.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <h1>Please select a game!</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamePanel",
  props: {
    gameName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      gameData: null,
    };
  },
  watch: {
    gameName: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.fetchData();
        }
      },
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = import(
          `/src/assets/data/games/${this.gameName}/data.js`
        );
        this.gameData = await response
          .then((result) => {
            return {
              packs: result.default.packs.map((pack) => {
                return {
                  name: pack.name,
                  colors: pack.colors.map((color) => {
                    return {
                      name: color.name,
                      hex: color.hex,
                    };
                  }),
                };
              }),
            };
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
