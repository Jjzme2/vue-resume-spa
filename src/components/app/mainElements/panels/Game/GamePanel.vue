<template>
  <div class="game-panel">
    <div class="game-panel-header">
      <h1>{{ game.name }}</h1>
      <p>{{ game.description }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "GamePanel",
  props: {
    gameName {
      type: String,
      required: true,
      validator: (value) => {
        return value.length > 0;
      },
    }
  },
};
</script>
