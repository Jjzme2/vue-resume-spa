<template>
  <div>
    <div v-if="fullScreen" class="alert-shadow">
      <div class="alert-box">
        <div
          v-if="this.title && this.title.trim().length > 0"
          class="alert-box-header"
        >
          <h3>{{ title }}</h3>
        </div>
        <div class="alert-box-body">
          <p>{{ message }}</p>
        </div>
        <div class="alert-box-footer">
          <button class="primary-button" @click="closeAlert">Close</button>
        </div>
      </div>
    </div>

    <div v-else class="alert-box">
      <div
        v-if="this.title && this.title.trim().length > 0"
        class="alert-box-header"
      >
        <h3>{{ title }}</h3>
      </div>
      <div class="alert-box-body">
        <p>{{ message }}</p>
      </div>
      <div class="alert-box-footer">
        <button class="primary-button" @click="closeAlert">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertBox",
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "info",
    },
    displayOnOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
    doEmit: {
      type: Boolean,
      required: false,
      default: false,
    },
    fullScreen: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    closeAlert() {
      if (this.doEmit) {
        this.$emit("close");
      }
      this.$el.style.display = "none";
    },
  },
};
</script>

<style scoped>
.alert-shadow {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.alert-box {
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: 0 0 10px 0 #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;
  max-width: 40%;
  padding: 1rem;
}

.alert-box-header {
  margin-bottom: 1rem;
}

.alert-box-footer {
  margin-top: 1rem;
}
</style>
