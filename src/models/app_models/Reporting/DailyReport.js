import BaseReport from "./BaseReport";

class DailyReport extends BaseReport {
  constructor(data = {}) {
    super(data);
    this.name = "DailyReport";
  }
}

export default DailyReport;
