<template>
  <mainLayout>
    <template #header v-if="includeHeader"></template>
    <template #default>
      <div class="main-content">
        <slot></slot>
      </div>
    </template>
    <template #footer v-if="includeFooter"></template>
  </mainLayout>
</template>

<script>
import mainLayout from "@/components/app/layoutElements/MainLayout.vue";

export default {
  name: "BaseView",
  components: {
    mainLayout,
  },
  //   Redirect Hack.
  //   beforeMount() {
  //     if (localStorage.getItem("path").length > 0) {
  //       this.$router.options.routes.forEach((route) => {
  //         if (route.path == localStorage.getItem("path")) {
  //           console.log(
  //             "Path:" + localStorage.getItem("path") + " Route:" + route.path
  //           );

  //           this.$router.push(route.name);
  //           localStorage.removeItem("path");
  //           return;
  //         } else {
  //           this.$router.push("404");
  //           localStorage.removeItem("path");
  //           return;
  //         }
  //       });
  //     }
  //   },
  props: {
    includeHeader: {
      type: Boolean,
      default: true,
    },
    includeFooter: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
