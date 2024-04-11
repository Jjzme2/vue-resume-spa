<template>
  <div>
    <video
      :width="widthPercentage"
      :height="heightPercentage"
      :src="videoUrl"
      :controls="showControls"
      :autoPlay="doAutoPlay"
      :muted="doMute"
      :loop="doLoop"
      :preload="preloadType"
      :poster="posterUrl"
      @start="onStart"
      @pause="onPause"
      @play="onPlay"
      @ended="onEnded"
    >
      {{ incompatibilityMessage }}
    </video>
  </div>
</template>

<script>
export default {
  props: {
    videoUrl: {
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
    showControls: {
      type: Boolean,
      default: true,
    },
    doAutoPlay: {
      type: Boolean,
      default: false,
    },
    doMute: {
      type: Boolean,
      default: false,
    },
    doLoop: {
      type: Boolean,
      default: false,
    },
    preloadType: {
      type: String,
      default: "auto",
      validator: (value) => ["auto", "metadata", "none"].includes(value),
    },
    posterUrl: {
      type: String,
      default: "",
    },
    incompatibilityMessage: {
      type: String,
      default: "Your browser does not support the video tag.",
    },
  },
  methods: {
    onPause() {
      const payload = {
        time: this.$refs.video.currentTime,
        src: this.videoUrl
      };
      this.$emit("pause", payload);
    },
    onPlay() {
      this.$emit("play");
    },
    onEnded() {
      this.$emit("ended");
    },
    onStart() {
      this.$emit("start");
    },
  },
};
</script>
