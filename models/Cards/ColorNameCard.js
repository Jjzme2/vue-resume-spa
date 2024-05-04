import BaseCard from "./BaseCard";
import data from "/data/games/RainbowRush/data.js";

class ColorNameCard extends BaseCard {
  constructor(packName = "Rainbow") {
    super("Color Name Card");

    const colors = this.getRandomColorFromDataPack(packName);
    [this.cardColor, this.textColor, this.textName] = colors;
  }

  getRandomColorFromDataPack(packName) {
    const pack = data.packs.find((pack) => pack.name === packName);
    const colors = pack.colors.slice(); // Create a copy to avoid modifying original data

    // Shuffle the colors using the Fisher-Yates shuffle algorithm
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }

    return colors;
  }
}

export default ColorNameCard;
