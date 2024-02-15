<template>
  <div class="greeting-text">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "GreetingText",
  props: {
    text: String,
    fontSize: {
      type: String,
      default: "3em",
    },
  },
};
</script>

<style scoped>
.greeting-text h1 {
  animation: shine 5s ease-out infinite;

  background: -webkit-linear-gradient(left, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background: linear-gradient(to right, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  font-size: 3em;
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@-webkit-keyframes shine {
  to {
    background-position: 100vw 0;
  }
}

@keyframes shine {
  to {
    background-position: 100vw 0;
  }
}

@media screen and (max-width: 768px) {
  .greeting-text h1 {
    font-size: 2em;
  }
}
</style>
