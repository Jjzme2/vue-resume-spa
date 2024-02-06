class CustomLogger {
  static writeDetailedLog(title, message, data, type = "log") {
    // Define the group with title styling
    console.group(`%c${title}`, "color: #ff0000; font-size: 1.5em;");

    // Log the message based on the specified type
    this.sendLog(message, type);

    // Log data if provided
    if (data) {
      console.table(data);
    }

    console.groupEnd();
  }

  static logServerError(error) {
    // Extract error information
    const serverMessage = error.response?.data?.messages[0] || "Unknown Error";
    const serverData = error.response?.data?.data;

    // Define the group with title styling
    console.group(
      `%c!Server Error!`,
      "color: #FFFFFF; font-size: 1.5em; background-color: #ff0000;"
    );

    // Log the error message as an error
    this.sendLog(serverMessage, "error");

    // Log error data with clear labels
    if (serverData) {
      console.log("Server Data:", serverData);
    }
    console.log("Full Error:", error);
    console.log("Full Response:", error.response);

    console.groupEnd();
  }

  static sendLog(message, type = "info", includeTheme = true) {
    let theme = {};

    if (includeTheme) {
      // Apply default theme for 'log'
      // Note: For consistency these are strings so we can use the same syntax for all types
      theme = {
        color: "black",
        "background-color": "#FFFFFF",
        "font-size": ".75em",
      };
    }

    switch (type) {
      case "log" || "info":
        break;
      case "warn" || "warning":
        theme["color"] = "yellow";
        theme["background-color"] = "black";
        break;
      case "error":
        theme["color"] = "red"; // White text for error
        theme["background-color"] = "black"; // Red background for error
        theme["font-size"] = "1.5em"; // Larger font for error
        break;
      case "unique":
        theme["color"] = "green";
        theme["background-color"] = "black";
        theme["font-size"] = "1.25em";
        break;
      default:
        break;
    }

    console.log(
      `%c[${type.toUpperCase()}] -- ${message}`,
      Object.entries(theme)
        .map(([key, value]) => `${key}:${value}`)
        .join(";")
    );
  }
}

export default CustomLogger;
