class CustomError extends Error {
  constructor(message, customStackTrace = "", additionalInfo = {}) {
    super(message);
    this.name = "CustomError";
    this.timestamp = new Date();
    this.ISOFormat = this.timestamp.toISOString();
    this.localeFormat = this.timestamp.toLocaleString();
    this.customStackTrace = customStackTrace;
    this.fullTrace = this.stack;
    this.additionalInfo = additionalInfo;
  }
}

export default CustomError;
