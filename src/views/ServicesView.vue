<template>
  <BaseView>
    <template #default>
      <goToButton buttonText="Go Home"></goToButton>
      <h1>
        I really enjoy coding. If you are interested in talking more about a
        project, please don't hesitate to reach out! I would love to help you
        with your next project.
      </h1>

      <div>
        <table class="common-table">
          <tr>
            <th>Service</th>
            <th>Description</th>
          </tr>
          <tr v-for="service in services" :key="service.id">
            <td>{{ service.name }}</td>
            <td>{{ service.description }}</td>
          </tr>
        </table>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import goToButton from "@/components/app/mainElements/buttons/GoToButton.vue";
import services from "/src/assets/data/services.js";

export default {
  name: "ServicesView",
  components: {
    BaseView,
    goToButton,
  },
  data() {
    return {
      developerTaskID: "5879c86b-65c1-4245-bee3-10b0f2dfad06",
      services,
    };
  },
};
</script>
