<template>
  <div>
    <overlay
      v-if="overlayEnabled"
      :windowTitle="journal.name"
      :allowClose="true"
      @close="closeOverlay"
    >
      <journalPage :journal="journal" />
    </overlay>
    <!-- Non Overlay -->
    <div v-else>
      <div v-if="journals && categories" class="container card-grid">
        <div v-for="c in categories" :key="c">
          <h2>
            {{
              this.$stringConversion
                .of(c.name)
                .convertToCase("sentence")
                .makePlural()
                .value()
            }}
          </h2>
          <div v-for="journal in journals" :key="journal.id">
            <div v-if="journal.content_style === c.id">
              <journalCard :journal="journal" @clicked="openOverlay" />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
import journalCard from "@/components/app/mainElements/journals/JournalCard.vue";

import overlay from "@/components/app/mainElements/panels/Overlays/OverlayComponent.vue";
import journalPage from "@/components/app/mainElements/journals/JournalPage.vue";

export default {
  name: "JournalLibrary",

  data() {
    return {
      overlayEnabled: false,
      journal: {},
    };
  },
  components: {
    journalCard,
    overlay,
    journalPage,
  },
  async beforeCreate() {
    // await this.$dataUtils.getDataByActivity(this.$store, "journals", "1");
    await this.$dataUtils.fetch(this.$store, "journals");
    await this.$dataUtils.fetch(this.$store, "content_style");
  },
  computed: {
    journals() {
      return this.$dataUtils.getDataByActivity(this.$store, "journals", 1);
    },
    categories() {
      return this.$dataUtils.retrieve(this.$store, "content_style");
    },
  },
  methods: {
    openOverlay(journal) {
      console.log("Attempting to open overlay", this.journal);
      this.journal = journal;
      this.overlayEnabled = true;
    },
    closeOverlay() {
      this.journal = {};
      this.overlayEnabled = false;
    },
  },
};
</script>
