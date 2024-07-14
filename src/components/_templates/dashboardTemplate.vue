<template>
  <div class="dashboard-page">
    <goToButton :route="goToRoute" />
    <div
      class="dashboard-main"
      v-for="item in dashboardCards"
      :key="item.route"
    >
      <router-link :to="item.route">
        <DashboardCard
          :title="item.title"
          :icon="item.icon"
          :color="item.color"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import DashboardCard from "@/components/app/common/cards/dashboard/dashboardCard.vue";
import goToButton from "@/components/app/common/buttons/goToButton.vue";

export default {
  name: "COMPONENTNAME",
  components: { DashboardCard, goToButton },
  data() {
    return {
      goToRoute: "/",
      dashboardCards: {
        learning: {
          title: "Item 1",
          icon: "bi bi-book",
          color: "var(--primary_accent_color)",
          route: "/FIRSTROUTE",
        },
        activities: {
          title: "Item 2",
          icon: "bi bi-controller",
          color: "var(--primary_accent_color)",
          route: "/OTHERROUTE",
        },
      },
    };
  },
};
</script>
