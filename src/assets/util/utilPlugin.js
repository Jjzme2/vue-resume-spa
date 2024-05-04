import CustomLogger from "./customLogger.js"; // Logger tool

import StringManipulation from "./stringUtils/stringManipulation.js";
import StringValidation from "./stringUtils/stringValidation.js";
import StringConversion from "./stringUtils/stringConversion.js";
import StringHelper from "./stringUtils/stringHelper.js"; //  String Helper tool

import MappingUtil from "./mappingUtil.js"; //  Mapping Util tool
import timeUtil from "./timeUtil.js"; //  Time Util tool
import arrayUtil from "./arrayUtil.js"; //  Array Util tool

const UtilPlugin = {
  install(app) {
    // Add global properties and methods
    // * Called as this.$loggerUtils
    app.config.globalProperties.$loggerUtils = CustomLogger;

    //  String Utils
    // * Called as this.$stringManipulation
    app.config.globalProperties.$stringManipulation = StringManipulation;
    // * Called as this.$stringValidation
    app.config.globalProperties.$stringValidation = StringValidation;
    // * Called as this.$stringConversion
    app.config.globalProperties.$stringConversion = StringConversion;
    // * Called as this.$stringHelper
    app.config.globalProperties.$stringHelper = StringHelper;

    // * Called as this.$mappingUtils
    app.config.globalProperties.$mappingUtils = MappingUtil;
    // * Called as this.$timeUtils
    app.config.globalProperties.$timeUtils = timeUtil;
    // * Called as this.$arrayUtils
    app.config.globalProperties.$arrayUtils = arrayUtil;
  },
};

export default UtilPlugin;
