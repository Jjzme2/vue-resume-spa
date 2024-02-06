<template>
  <div class="quote-display">
    <div class="quote">
      <p>{{ randomQuote.quote }}</p>
      <p class="author">
        <a :href="randomQuote.source" target="_blank">{{
          randomQuote.author
        }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import quotes from "/public/js/quotes";

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
