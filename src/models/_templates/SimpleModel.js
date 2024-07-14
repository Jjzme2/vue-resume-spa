class OBJECTNAME extends Error {
  constructor(parameter1, parameter2 = "", parameter3 = {}) {
    super(parameter1);
    this.name = "OBJECTNAME";
    this.parameter1 = parameter1;
    this.parameter2 = parameter2;
    this.parameter3 = parameter3;
  }
}

export default OBJECTNAME;
