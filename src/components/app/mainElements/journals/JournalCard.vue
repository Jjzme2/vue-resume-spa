<template>
  <div v-if="journal.name" class="card card-md" @click="emitClicked">
    <h3 class="card-header">{{ journal.name }}</h3>
    <img
      :src="getImageUrl(journal.image_link)"
      alt="journal image"
      class="card-img-top"
    />

    <div class="card-body">
      <a
        v-if="journal.listing_link"
        :href="journal.listing_link"
        target="_blank"
        class="primary-button"
      >
        Buy on Amazon
      </a>
      <div v-else>
        <p>Not available for purchase. Please contact me for inquiries.</p>
      </div>
    </div>
  </div>

  <div v-else class="card card-md" @click="emitClicked">
    <h3 class="card-header">No Data Available</h3>

    <div class="card-body">
      <p>Please contact the developer at the designated location.</p>
    </div>
  </div>
</template>

<script>
import BaseBook from "@/models/book_types/BaseBook";

export default {
  name: "journalCard",
  props: {
    journal: {
      type: BaseBook,
      required: true,
      default: () => new BaseBook(),
    },
  },
  computed: {
    content_style() {
      const style = this.$dataUtils.getDataByID(
        this.$store,
        "content_style",
        this.journal.content_style
      ).name;

      return style;
    },
  },
  methods: {
    getImageUrl(relativePath) {
      const baseUrl = process.env.BASE_URL;

      //! This might be better later on,
      // "https://firebasestorage.googleapis.com/v0/b/YOUR_PROJECT_ID.appspot.com/o/";
      if (!relativePath) {
        this.$loggerUtils.sendErrorLog(
          `No image found for journal ( ${
            this.journal.name ?? "No Name provided."
          } )`,
          "[JournalCard.vue, getImageUrl]",
          { journalData: JSON.stringify(this.journal) }
        );
      }
      // Ensure the path is correctly encoded
      const encodedPath = encodeURIComponent(relativePath);
      return `${baseUrl}${encodedPath}?alt=media`;
    },
    emitClicked() {
      this.$emit("clicked", this.journal);
    },
  },
};
</script>
@/models/book_types/Journal
