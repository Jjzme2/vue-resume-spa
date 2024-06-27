import BaseReport from "./BaseReport";

class SessionReport extends BaseReport {
  constructor(user, data = {}) {
    super(data);
    this.name = "SessionReport";
    this.user = user;
  }
}

export default SessionReport;
