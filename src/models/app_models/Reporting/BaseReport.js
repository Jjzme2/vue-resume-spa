import TimeUtil from "@/utils/timeUtil";
import StringConversion from "./../../../utils/stringUtils/stringConversion";

class BaseReport {
  constructor(data = {}) {
    this.name = "BaseReport";
    this.title = StringConversion.of(this.name).convertToSentenceCase().value();
    this.timestamp = TimeUtil.getCurrentTime();
    this.data = data;
  }
}

export default BaseReport;
