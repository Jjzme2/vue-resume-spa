class TimeUtil {
  static getCurrentTime() {
    return new Date().getHours();
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
