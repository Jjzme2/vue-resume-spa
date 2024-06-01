<template>
  <div v-if="journals" class="container card-grid">
    <div v-for="journal in journals" :key="journal.id">
      <!-- Loop categories and place journal appropriately. -->
      <div v-for="c in this.categories" :key="c">
        <h2>{{ c }}</h2>
        <div v-if="journal.content_style === c">
          <journalCard :journal="journal" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import journalCard from "@/components/app/mainElements/cards/JournalCard.vue";

export default {
  name: "journalLibrary",
  data() {
    return {
      // Probably  a better way to do this.
      content_styles: [
        {
          name: "Notebook",
          id: "TXnkp3nue3UtMLkhAFsq",
        },
      ],
    };
  },
  components: {
    journalCard,
  },
  async beforeCreate() {
    await this.$dataUtils.fetch(this.$store, "journals");
    await this.$dataUtils.fetch(this.$store, "content_style");
  },
  computed: {
    journals() {
      return this.$dataUtils.retrieve(this.$store, "journals");
    },
  },
};
</script>
