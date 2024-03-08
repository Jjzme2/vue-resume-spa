<template>
  <div>
    <div v-if="interests">
      <h1 class="component-title">My Interests</h1>
      <div class="card-grid">
        <interestCard
          v-for="interest in interests"
          :key="interest.name"
          :interest="interest"
        />
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import interestCard from "@/components/app/mainElements/cards/InterestCard.vue";
export default {
  name: "MyInterests",
  components: {
    interestCard,
  },
  beforeMount() {
    this.$store.dispatch("interests/fetchAll");
  },
  computed: {
    interests() {
      const collection = this.$store.getters["interests/getAll"];

      if (collection.length > 0) {
        return collection;
      } else {
        return null;
      }
    },
  },
};
</script>
