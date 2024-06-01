<template>
  <div class="journal-page-window">
    <p>Thanks for looking into our {{ contentStyleName }}</p>
    <div class="card-body">
      <a
        v-if="journal.listing_link"
        :href="journal.listing_link"
        target="_blank"
        class="primary-button"
      >
        Buy Now
      </a>
    </div>

    <div class="journal-page-header">
      <div class="journal-page-header-left">
        <h3>Cover Image</h3>
        <img
          :src="journal.image_link"
          alt="Journal cover"
          class="card-img-top"
        />
      </div>

      <div class="journal-page-header-right">
        <h3>Sample Page</h3>
        <img
          :src="journal.sample_link"
          alt="Journal page"
          class="card-img-top"
        />
      </div>
    </div>

    <div class="journal-page-description">
      <h3>Description</h3>
      <p>{{ journal.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "journalPage",
  props: {
    journal: Object,
  },
  computed: {
    contentStyleName() {
      const itemName = this.$dataUtils.getDataByID(
        this.$store,
        "content_style",
        this.journal.content_style
      ).name;

      let readableName = this.$stringConversion
        .of(itemName)
        .convertToCase("sentence")
        .makePlural()
        .value();

      return readableName;
    },
  },
};
</script>

<style scoped>
.journal-page-window {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

.journal-page-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.journal-page-header-left {
  position: relative;
  float: left;
  width: 45%;
}

.journal-page-header-right {
  position: relative;
  float: right;
  width: 45%;
}

.journal-page-description {
  margin-top: 2rem;
}
</style>
