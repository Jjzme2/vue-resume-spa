import StyledError from "@/models/dev_models/errors/StyledError.js";

class CustomLogger {
  /**
   * Send a log message to the console with a specified theme.
   * @param {string} message - The message to log.
   * @param {string} [customStackTrace] - Optional custom stack trace.
   * @param {string} [additionalInfo] - Optional additional info.
   * @param {string} [theme='info'] - The theme of the log message. 'info' (Default) | 'warning' | 'error' | 'log'
   * @param {string} [timeFormat='ISO'] - The time format of the log message. 'ISO' (Default) | 'locale'
   */
  static sendCustomLog(
    message,
    customStackTrace = "",
    additionalInfo = "",
    theme = "info",
    timeFormat = "ISO"
  ) {
    const log = new StyledError(
      message,
      customStackTrace,
      additionalInfo,
      theme,
      timeFormat
    );
    log.log();
  }

  /**
   * Send an info log message to the console.
   * @param {string} message - The message to log.
   * @param {string} [customStackTrace] - Optional custom stack trace.
   * @param {string} [additionalInfo] - Optional additional info.
   */
  static sendInfoLog(message, customStackTrace = "", additionalInfo = "") {
    CustomLogger.sendCustomLog(
      message,
      customStackTrace,
      additionalInfo,
      "info",
      "locale"
    );
  }

  /**
   * Send an info log message to the console in ISO format.
   * @param {string} message - The message to log.
   * @param {string} [customStackTrace] - Optional custom stack trace.
   * @param {string} [additionalInfo] - Optional additional info.
   */
  static sendInfoLogISO(message, customStackTrace = "", additionalInfo = "") {
    CustomLogger.sendCustomLog(
      message,
      customStackTrace,
      additionalInfo,
      "info",
      "ISO"
    );
  }

  /**
   * Send a warning log message to the console.
   * @param {string} message - The message to log.
   * @param {string} [customStackTrace] - Optional custom stack trace.
   * @param {string} [additionalInfo] - Optional additional info.
   */
  static sendWarningLog(message, customStackTrace = "", additionalInfo = "") {
    CustomLogger.sendCustomLog(
      message,
      customStackTrace,
      additionalInfo,
      "warning",
      "locale"
    );
  }

  /**
   * Send a warning log message to the console in ISO format.
   * @param {string} message - The message to log.
   * @param {string} [customStackTrace] - Optional custom stack trace.
   * @param {string} [additionalInfo] - Optional additional info.
   */
  static sendWarningLogISO(
    message,
    customStackTrace = "",
    additionalInfo = ""
  ) {
    CustomLogger.sendCustomLog(
      message,
      customStackTrace,
      additionalInfo,
      "warning",
      "ISO"
    );
  }

  /**
   * Send an error log message to the console.
   * @param {string} message - The message to log.
   * @param {string} [customStackTrace] - Optional custom stack trace.
   * @param {string} [additionalInfo] - Optional additional info.
   */
  static sendErrorLog(message, customStackTrace = "", additionalInfo = "") {
    CustomLogger.sendCustomLog(
      message,
      customStackTrace,
      additionalInfo,
      "error",
      "locale"
    );
  }

  /**
   * Send an error log message to the console in ISO format.
   * @param {string} message - The message to log.
   * @param {string} [customStackTrace] - Optional custom stack trace.
   * @param {string} [additionalInfo] - Optional additional info.
   */
  static sendErrorLogISO(message, customStackTrace = "", additionalInfo = "") {
    CustomLogger.sendCustomLog(
      message,
      customStackTrace,
      additionalInfo,
      "error",
      "ISO"
    );
  }
}

export default CustomLogger;
