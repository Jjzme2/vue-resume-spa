<template>
  <div :style="{ backgroundColor: this.cardColor.hex }">
    <h1 :style="{ color: this.textColor.hex }">
      Card Color: {{ this.textName.name }}
    </h1>
  </div>
</template>

<script>
import ColorNameCard from "/models/Cards/ColorNameCard.js";

export default {
  name: "ColorNameCard",
  data() {
    return {
      colorNameCard: new ColorNameCard(),
      cardColor: "",
      colorName: "",
      textName: "",
    };
  },
  created() {
    console.log(this.colorNameCard.cardColor);
    console.log(this.colorNameCard.textColor);
    console.log(this.colorNameCard.textName);
    this.cardColor = this.colorNameCard.cardColor;
    this.textName = this.colorNameCard.textName;
    this.textColor = this.colorNameCard.textColor;
  },
};
</script>
