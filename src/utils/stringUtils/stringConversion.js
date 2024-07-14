import conversionHelper from "./conversionHelper.js";

class StringConversion {
  constructor(str) {
    if (typeof str !== "string") {
      console.error(JSON.stringify(this.str) + " is not a string");
      return;
    }

    if (str.length < 1) {
      console.error(
        `When using 'StringConversion' the string (${str}) must be a string containing at least one character.`
      );
    }

    this.str = str;
  }

  /**
   * Returns the value of the object.
   * @returns - The value of the given object (String)
   */
  value() {
    return this.str;
  }

  /**
   * Returns the original value of the object.
   * @returns - The original string passed in to the String Conversion Object.
   */
  originalValue() {
    return this.oldStr;
  }

  reset() {
    this.str = this.oldStr;
    return this;
  }

  /**
   * Create an instance of the String Conversion Class.
   * @param {*} str
   * @returns - An instance of the String Conversion Class.
   */
  static of(str) {
    return new StringConversion(str);
  }

  // Non Static Classes

  /**
   * Convert a string to a number or NaN
   * @returns - The converted number or NaN
   */
  convertToNumber() {
    this.str = Number(this.str);
    return this;
  }

  /**
   * Convert a string to a different case type
   * @param {STRING} caseType - The case type to convert the string to
   * @returns - The converted string
   */
  convertToCase(caseType) {
    caseType = caseType.toLowerCase();

    const acceptedCaseTypes = [
      "lower", // lowercase
      "upper", // UPPERCASE
      "title", // Title Case
      "sentence", // Sentence case
      "camel", // camelCase
      "pascal", // PascalCase
      "kebab", // kebab-case
      "snake", // snake_case
      "dot", // dot.case
    ];

    if (!acceptedCaseTypes.includes(caseType)) {
      console.warn(
        `Invalid case type provided: ${caseType}. Acceptable case types are: ${acceptedCaseTypes}`
      );
    }

    switch (caseType) {
      case "lower":
        this.str = this.str.toLowerCase();
        return this;

      case "upper":
        this.str = this.str.toUpperCase();
        return this;

      case "title":
        this.str = this.str.replace(/\b\w/g, (match) => match.toUpperCase());
        return this;

      case "sentence":
        this.str = this.str.charAt(0).toUpperCase() + this.str.slice(1);
        return this;

      case "camel":
        this.str = this.str.replace(/\W+(.)/g, (match, chr) =>
          chr.toUpperCase()
        );
        return this;

      case "pascal":
        this.str = this.str
          .replace(/\W+(.)/g, (match, chr) => chr.toUpperCase())
          .replace(/\W+/g, "");
        return this;

      case "kebab":
        this.str = this.str
          .replace(/([a-z\d])([A-Z])/g, "$1-$2")
          .replace(/\W+/g, "-")
          .toLowerCase();
        return this;

      case "snake":
        this.str = this.str
          .replace(/([a-z\d])([A-Z])/g, "$1_$2")
          .replace(/\W+/g, "_")
          .toLowerCase();
        return this;

      case "dot":
        this.str = this.str
          .replace(/([a-z\d])([A-Z])/g, "$1.$2")
          .replace(/\W+/g, ".")
          .toLowerCase();
        return this;

      default:
        return this;
    }
  }

  makePlural() {
    const irregulars = conversionHelper.getIrregulars();

    if (irregulars[this.str.toLowerCase()]) {
      this.str = irregulars[this.str.toLowerCase()];
    } else if (
      this.str.endsWith("s") ||
      this.str.endsWith("sh") ||
      this.str.endsWith("ch") ||
      this.str.endsWith("x") ||
      this.str.endsWith("z")
    ) {
      this.str = this.str + "es";
    } else if (this.str.endsWith("y") && !/[aeiou]y/.test(this.str)) {
      this.str = this.str.slice(0, -1) + "ies";
    } else if (this.str.endsWith("f")) {
      this.str = this.str.slice(0, -1) + "ves";
    } else if (this.str.endsWith("fe")) {
      this.str = this.str.slice(0, -2) + "ves";
    } else {
      this.str = this.str + "s";
    }
    return this;
  }

  makeSingular() {
    const irregulars = conversionHelper.getIrregulars();

    if (irregulars[this.str.toLowerCase()]) {
      this.str = irregulars[this.str.toLowerCase()];
    } else if (this.str.endsWith("es")) {
      this.str = this.str.slice(0, -2);
    } else if (this.str.endsWith("ies")) {
      this.str = this.str.slice(0, -3) + "y";
    } else if (this.str.endsWith("ves")) {
      this.str = this.str.slice(0, -3) + "f";
    } else if (this.str.endsWith("s")) {
      this.str = this.str.slice(0, -1);
    }
    return this;
  }
}

export default StringConversion;
