import CustomLogger from "./customLogger.js"; // Logger tool
import StringManipulation from "./stringManipulation.js"; //  String Manipulation tool
import MappingUtil from "./mappingUtil.js"; //  Mapping Util tool
import timeUtil from "./timeUtil.js"; //  Time Util tool
import arrayUtil from "./arrayUtil.js"; //  Array Util tool

const UtilPlugin = {
  install(app) {
    // Add global properties and methods
    app.config.globalProperties.$loggerUtils = CustomLogger; // * Called as this.$loggerUtils
    app.config.globalProperties.$stringUtils = StringManipulation; // * Called as this.$stringUtils
    app.config.globalProperties.$mappingUtils = MappingUtil; // * Called as this.$mappingUtils
    app.config.globalProperties.$timeUtils = timeUtil; // * Called as this.$timeUtils
    app.config.globalProperties.$arrayUtils = arrayUtil; // * Called as this.$arrayUtils
  },
};

export default UtilPlugin;
