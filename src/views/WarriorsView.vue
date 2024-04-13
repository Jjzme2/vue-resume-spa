<template>
  <BaseView>
    <template #default>
      <div>
        <GamePanel gameName="Warriors"></GamePanel>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import GamePanel from "@/components/app/mainElements/panels/Game/GamePanel.vue";

export default {
  name: "WarriorsView",
  components: {
    BaseView,
    GamePanel,
  },
};
</script>
