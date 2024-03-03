<template>
  <div class="interest-card">
    <h2 class="interest-name">{{ interest.name }}</h2>
    <p class="interest-level">{{ interest.experience_level ?? "" }}</p>
    <p class="interest-appeal">{{ interest.appeal ?? "" }}</p>
  </div>
</template>

<script>
export default {
  name: "InterestCard",
  props: {
    interest: {
      type: Object,
      required: true,
    },
  },
};
</script>
