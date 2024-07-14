class NavigationOption {
  constructor(readableName, pathTo = "") {
    try {
      this.name = `NavigationOption_${readableName}`;
      this.readableName = readableName;
      this.pathTo = pathTo;
    } catch (error) {
      console.error("NavigationOption.constructor", error);
    }
  }
}

export default NavigationOption;
