<template>
  <div>
    <h1 class="component-title">
      My Proficiency in Different Languages/Frameworks
    </h1>
    <div class="card-grid">
      <CodingLanguageCard
        v-for="language in languages"
        :key="language.name"
        :language="language.name"
        :years="language.years"
        :thoughts="language.thoughts"
      />
    </div>
  </div>
</template>

<script>
import CodingLanguageCard from "@/components/app/mainElements/cards/CodingLanguageCard.vue";
import langauges from "@/assets/data/languages.js";

export default {
  name: "MyExperience",
  components: {
    CodingLanguageCard,
  },
  data() {
    return {
      languages: langauges,
    };
  },
};
</script>
