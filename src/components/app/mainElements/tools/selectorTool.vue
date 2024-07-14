<template>
  <div class="selector-tool">
    <label v-if="label" for="selector-input">{{ label }}</label>
    <select v-model="selected" :id="selectorId" @change="emitChange">
      <option v-for="option in options" :value="option.value" :key="option">
        {{ option.name }}
      </option>
    </select>
    <button v-if="hasSubmit" type="button" @click="emitSubmit">
      {{ submitLabel || "Submit" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "selectorTool",
  props: {
    options: {
      type: Array,
      required: true,
      validator: (options) => {
        return options.every((option) => {
          return (
            typeof option === "object" &&
            Object.hasOwn(option, "name") &&
            Object.hasOwn(option, "value")
          );
        });
      },
    },
    hasSubmit: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    submitLabel: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    emitChange(selectedValue) {
      this.$emit("change", selectedValue);
    },
    emitSubmit() {
      this.$emit("submit", this.selected);
    },
  },
  computed: {
    selectorId() {
      return `selector-tool_${this.label || this.options[0].name}`;
    },
  },
};
</script>

<style scoped>
.selector-tool {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.selector-tool label {
  margin-bottom: 0.5rem;
}

.selector-tool select {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.selector-tool button {
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.selector-tool button:hover {
  background-color: #0056b3;
}
</style>
