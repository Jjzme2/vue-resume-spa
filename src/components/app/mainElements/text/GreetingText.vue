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
  },
};
</script>

<style scoped>
.greeting-text h1 {
  background: -webkit-linear-gradient(left, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background: linear-gradient(to right, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 5s ease-out infinite;
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
</style>
