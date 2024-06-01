import stringHelper from "./stringUtils/stringHelper";
import timeHelper from "./timeUtil";

const theme = {
  log: {
    color: "black",
    "background-color": "#FFFFFF",
    "font-size": "1em",
  },
  warn: {
    color: "yellow",
    "background-color": "black",
    "font-size": "1.15em",
  },
  error: {
    color: "red",
    "background-color": "black",
    "font-size": "1.5em",
  },
  unique: {
    color: "green",
    "background-color": "black",
    "font-size": "1.25em",
  },
};

const getTheme = (type) => {
  return theme[type] || theme.log;
};

const writeLog = (message, data = {}, type = "log") => {
  console.log(
    `%c[${type.toUpperCase()} - ${timeHelper.getCurrentTime()}] \n Message: \n ${message} \n\n Additional Data: \n ${stringHelper.stringify(
      data
    )}`,
    Object.entries(getTheme(type))
      .map(([key, value]) => `${key}:${value}`)
      .join(";")
  );
};

class CustomLogger {
  /**
   * Send a log message to the console.
   * @param {string} message - The message to log.
   * @param {object} [data={}] - Additional data to log.
   * @param {string} [type="info"] - The type of log message.
   */
  static sendLog(message, data = {}, type = "info") {
    writeLog(message, data, type);
  }
}

export default CustomLogger;
