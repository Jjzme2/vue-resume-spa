<template>
  <!-- Basic Email form -->
  <div>
    <form @submit.prevent="sendEmail">
      <div class="contact-display">
        <label for="name">Your Name:</label>
        <input v-model="name" type="text" id="name" name="name" required />
        <label for="email">Your Email:</label>
        <input v-model="email" type="email" id="email" name="email" required />
      </div>
      <div class="contact-display">
        <label for="message">Your Message:</label>
        <textarea
          v-model="message"
          id="message"
          name="message"
          rows="8"
          cols="50"
          required
        ></textarea>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactMe",
  data() {
    return {
      name: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      // EmailJS
      const templateParams = {
        my_website_address: process.env.VUE_APP_WEB_DOMAIN,
        sender_name: this.name,
        sender_email: this.email,
        message: this.message,
      };

      emailjs.send(
        process.env.VUE_APP_EMAILJS_SERVICE_ID,
        process.env.VUE_APP_EMAILJS_DEFAULT_TEMPLATE_ID,
        templateParams,
        process.env.VUE_APP_EMAILJS_PUBLIC_KEY
      );

      this.name = "";
      this.email = "";
      this.message = "";

      console.log("Email sent successfully!");
    },
  },
};
</script>
