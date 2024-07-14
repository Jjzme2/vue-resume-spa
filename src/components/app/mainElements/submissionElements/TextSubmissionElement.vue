<template>
  <div class="submission-element">
    <div>
      <h4>
        Please ensure your {{ inputType }} is within {{ maxLength }} characters.
      </h4>
    </div>
    <div class="input-container">
      <input
        class="input-field"
        :type="inputType"
        v-model="inputValue"
        @input="emitInputValue"
        :placeholder="prompt"
        :maxlength="maxLength"
      />
      <button
        v-if="showSubmitButton"
        @click="submitInputValue"
        class="primary-button"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextSubmissionElement",
  props: {
    inputType: {
      type: String,
      default: "text",
      validator: (value) =>
        ["text", "number", "email", "password"].includes(value),
    },
    maxLength: {
      type: Number,
      default: 250,
    },
    prompt: String,
    showSubmitButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    emitInputValue() {
      this.validationError = ""; // Clear error on input
      this.$emit("input", this.inputValue);
    },
    submitInputValue() {
      this.$emit("submit", this.inputValue);
      this.inputValue = ""; // Optionally clear the input after submit
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-field {
  padding: 0.5rem;
  margin: 0.5rem 0; /* Only vertical margin */
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 30rem;
}

.submission-element {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 768px) {
  .input-field {
    width: 100%;
  }
}
</style>
