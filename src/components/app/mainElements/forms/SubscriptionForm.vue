<template>
  <div class="flex flex-col centered">
    <h2>Happy to have you!</h2>
    <div class="form-container">
      <form
        @submit.prevent="() => this.captureSend(formData)"
        class="flex flex-col centered"
      >
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            v-model="formData.name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            v-model="formData.email"
          />
        </div>

        <button type="submit" class="primary-button">
          I'd like to learn more!
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscriptionForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    captureSend() {
      // Basic validation
      if (!this.formData.name || !this.formData.email) {
        alert("Please enter a name and valid email address.");
        return;
      }

      this.$store.dispatch("subscribers/save", this.formData);
      this.formData = {
        name: "",
        email: "",
      };
      alert("Thank you for subscribing!");
    },
  },
};
</script>
