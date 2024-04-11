<template>
  <div class="youtube-video">
    <iframe
      :width="widthPercentage"
      :height="heightPercentage"
      :src="`https://www.youtube.com/embed/${videoId}`"
      :frameborder="border"
      :allow="allowances.join(';')"
      :allowfullscreen="allowfullscreen"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true,
    },
    widthPercentage: {
      type: Number,
      default: 100,
    },
    heightPercentage: {
      type: Number,
      default: 100,
    },
    allowfullscreen: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Number,
      default: 0,
    },
    allowances: {
      type: Array,
      default: () => [
        "accelerometer",
        "autoplay",
        "encrypted-media",
        "gyroscope",
        "picture-in-picture",
      ],
    },
  },
};
</script>
