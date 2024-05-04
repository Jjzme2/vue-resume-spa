import StringHelper from "./stringManipulation";

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
    `%c[${type.toUpperCase()}] \n Message: \n ${message} \n\n Additional Data: \n ${StringHelper.stringify(
      data
    )}`,
    Object.entries(getTheme(type))
      .map(([key, value]) => `${key}:${value}`)
      .join(";")
  );
};

class CustomLogger {
  static sendLog(message, data = {}, type = "info") {
    writeLog(message, data, type);
  }
}

export default CustomLogger;
