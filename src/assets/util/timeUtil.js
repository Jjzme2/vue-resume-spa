class TimeUtil {
  /**
   * Get current time in a specified format, or the default format if none is provided.
   * @param {string} format - The format to return the time in. Default is "HH:MM:SS".
   * @returns {string} - The current time in the specified format.
   */
  static getCurrentTime(
    locale = "en-US",
    twelveHour = false,
    timeZone = "UTC",
    timeStyle = "medium"
  ) {
    return new Date().toLocaleTimeString(locale, {
      hour12: twelveHour,
      timeZone: timeZone,
      timeStyle: timeStyle,
    });
  }

  static getTimeOfDay(currentTime) {
    if (currentTime >= 5 && currentTime < 12) {
      return "morning";
    } else if (currentTime >= 12 && currentTime < 17) {
      return "afternoon";
    } else if (currentTime >= 17 && currentTime < 21) {
      return "evening";
    } else {
      return "night";
    }
  }
}

export default TimeUtil;
