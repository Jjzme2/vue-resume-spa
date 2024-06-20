import CustomError from "./CustomError";

const themes = {
  error: {
    color: "white",
    "background-color": "red",
    "font-size": "1em",
  },
  warning: {
    color: "black",
    "background-color": "yellow",
    "font-size": "1em",
  },
  info: {
    color: "white",
    "background-color": "darkgrey",
    "font-size": "1em",
  },
};

class StyledError extends CustomError {
  constructor(
    message,
    customStackTrace = { file: "", function: "" },
    additionalInfo,
    theme = "info",
    formatType = "ISO"
  ) {
    super(message, customStackTrace, additionalInfo);
    this.theme = themes[theme] || themes.log;
    this.formattedTime =
      formatType === ("ISO" || "iso") ? this.ISOFormat : this.localeFormat;
    this.name = "StyledError";
  }

  log() {
    let message = "";
    const developerMessage = `%c[${this.formattedTime}]\n\n\nMessage: ${this.message}`;

    // Check if additional info has any keys
    if (this.additionalInfo && Object.keys(this.additionalInfo).length > 0) {
      message += "^ See above for additional Info\n\n";
      console.table(this.additionalInfo);
    }

    if (this.customStackTrace !== "") {
      message += `Custom Stack Trace: ${this.customStackTrace}\n\n`;
      message += `Full Stack Trace: ${this.fullTrace}\n\n`;
    }

    message += developerMessage;

    console.log(
      message,
      Object.entries(this.getTheme())
        .map(([key, value]) => `${key}:${value}`)
        .join(";")
    );
  }

  getTheme() {
    return {
      color: this.theme.color,
      "background-color": this.theme["background-color"],
      "font-size": this.theme["font-size"],
    };
  }
}

export default StyledError;
