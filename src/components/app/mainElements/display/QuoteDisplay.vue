<template>
  <div class="banner">
    <div>
      <p class="colored-text-primary">{{ randomQuote.quote }}</p>
      <p class="mini-text">
        <a :href="randomQuote.source" target="_blank">{{
          randomQuote.author
        }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import quotes from "@/assets/data/quotes.js";

export default {
  name: "QuoteDisplay",
  computed: {
    randomQuote() {
      const randomIndex = Math.floor(Math.random() * this.quotes[0].length);
      return this.quotes[0][randomIndex];
    },
  },
  data() {
    return {
      quotes: [quotes],
    };
  },
};
</script>
@/assets/data/quotes.js
