<template>
  <ul class="social-links">
    <li v-for="link in links" :key="link.network">
      <a :href="link.link" :target="'blank'">
        <img :src="getImageUrl(link.network)" :alt="link.network" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          Object.prototype.hasOwnProperty.call(value, "Link") &&
          Object.prototype.hasOwnProperty.call(value, "Network")
        );
      },
    },
  },
  methods: {
    getImageUrl(iconName) {
      const context = require.context(
        "@/assets/images/social",
        false,
        /\.png$/
      );
      return context(`./${iconName}.png`);
    },
  },
};
</script>
