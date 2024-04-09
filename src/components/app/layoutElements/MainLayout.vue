<template>
  <div class="main-layout">
    <header class="header" v-if="$slots.header">
      <quoteDisplay></quoteDisplay>
    </header>

    <main class="body">
      <slot></slot>
    </main>

    <footer class="footer" v-if="$slots.footer">
      <div class="footer-element">
        <socials :links="socials"></socials>
      </div>

      <div class="footer-element">
        <strong>&copy; {{ yearTag }}</strong>
      </div>

      <div class="footer-element">
        <p>Application developed by Jj Zettler (ILYTAT)</p>
      </div>
    </footer>
  </div>
</template>
<script>
import quoteDisplay from "@/components/app/mainElements/display/QuoteDisplay.vue";
import socials from "@/components/app/mainElements/display/SocialLinks.vue";
export default {
  name: "MainLayout",
  components: {
    quoteDisplay,
    socials,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      startYear: 2024,
      socials: [
        {
          link: "https://www.linkedin.com/in/jjilytatgames/",
          network: "linkedin",
        },
        {
          link: "https://www.github.com/jjzme2",
          network: "github",
        },
        // {
        //   link: "https://www.twitter.com/your-twitter",
        //   network: "twitter",
        // },
        // {
        //   link: "https://www.instagram.com/your-instagram",
        //   network: "instagram",
        // },
        // {
        //   link: "https://www.facebook.com/your-facebook",
        //   network: "facebook",
        // },
      ],
    };
  },
  computed: {
    yearTag() {
      return this.currentYear > this.startYear
        ? `${this.startYear} - ${this.currentYear}`
        : this.startYear;
    },
  },
};
</script>
