<template>
  <div class="footer-element">
    <socials :links="socials"></socials>
  </div>

  <div class="footer-element">
    <strong
      >&copy; {{ yearTag }} &nbsp; ILYTAT.com &nbsp; All rights
      reserved.</strong
    >
  </div>

  <div class="footer-element">
    <p>Application developed by Jj Zettler (ILYTAT)</p>
  </div>
</template>

<script>
import socials from "@/components/app/mainElements/display/SocialLinks.vue";
export default {
  name: "LayoutFooter",
  components: {
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
