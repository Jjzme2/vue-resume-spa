<template>
  <div class="coding-language-card">
    <h2>{{ language }}</h2>
    <p>Years: {{ years }}</p>

    <textarea v-if="thoughts" :value="thoughts" readonly></textarea>
  </div>
</template>

<script>
export default {
  name: "CodingLanguageCard",
  props: {
    language: {
      type: String,
      required: true,
    },
    thoughts: {
      type: String,
      required: false,
    },
    years: {
      type: Number,
      required: true,
    },
  },
};
</script>
