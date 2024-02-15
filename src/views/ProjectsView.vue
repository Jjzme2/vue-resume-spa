<template>
  <BaseView>
    <template #default>
      <goToButton buttonText="Go Home"></goToButton>
      <h1>Here are some notable projects I've worked on</h1>

      <div class="project-view">
        <table class="common-table">
          <tr>
            <th>Project</th>
            <th>Description</th>
            <th>URL</th>
          </tr>

          <tr v-for="project in projects" :key="project.id">
            <td>{{ project.name }}</td>
            <td>{{ project.description }}</td>
            <td><a :href="project.url" target="_blank">Check it out</a></td>
          </tr>
        </table>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import goToButton from "@/components/app/mainElements/buttons/GoToButton.vue";
import projects from "/src/assets/data/projects.js";

export default {
  name: "ProjectsView",
  components: {
    BaseView,
    goToButton,
  },
  data() {
    return {
      developerTaskID: "9890885e-4632-4f7d-b043-277f81bb489d",
      projects,
    };
  },
};
</script>
