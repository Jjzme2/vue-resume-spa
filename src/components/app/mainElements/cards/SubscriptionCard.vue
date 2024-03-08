<template>
  <div>
    <button class="primary-button" @click="openForm = !openForm">
      {{ openForm ? "Close" : "Subscribe" }}
    </button>
    <div class="boxed pop flex flex-col centered" v-if="openForm">
      <SubscriptionForm></SubscriptionForm>
    </div>
  </div>
</template>

<script>
import SubscriptionForm from "@/components/app/mainElements/forms/SubscriptionForm.vue";

export default {
  name: "SubscriptionCard",
  components: {
    SubscriptionForm,
  },
  data() {
    return {
      openForm: false,
    };
  },
};
</script>
