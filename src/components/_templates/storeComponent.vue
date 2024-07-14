<template>
  <div class="dashboard-page">
    {{ storeData }}
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "COMPONENTNAME",
  data() {
    return {
      someData: "",
    };
  },
  setup() {
    const store = useStore();
    const getterString = "";
    const dispatchString = "";

    const storeData = computed(() => store.getters[getterString]);

    // Fetch on component mount
    onMounted(async () => {
      await store.dispatch(dispatchString);
    });

    return { storeData };
  },
};
</script>
