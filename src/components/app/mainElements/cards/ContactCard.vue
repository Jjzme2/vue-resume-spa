<template>
  <!-- <div class="contact-card centered"> -->
  <div class="boxed pop flex flex-col centered">
    <h2>{{ message || "" }}</h2>
    <ContactMe></ContactMe>
  </div>
</template>

<script>
import ContactMe from "@/components/app/mainElements/panels/About/ContactMe.vue";

export default {
  name: "ContactCard",
  components: {
    ContactMe,
  },
  props: {
    message: {
      type: String,
      required: false,
    },
  },
};
</script>
