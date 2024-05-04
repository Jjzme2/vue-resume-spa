class StringConversion {
  /**
   * Convert a string to a number or NaN
   * @param {STRING} str - The string to convert
   * @returns - The converted number or NaN
   */
  static convertToNumber(str) {
    return Number(str);
  }

  /**
   * Convert a string to a different case type
   * @param {STRING} str - The string to convert
   * @param {STRING} caseType - The case type to convert the string to
   * @returns - The converted string
   */
  static convertStringToCase(str, caseType) {
    if (!str || !caseType) {
      console.warn(
        `No string (${str}) or case type (${caseType}) provided to convertStringToCase`
      );
      return;
    }

    if (typeof str !== "string") {
      console.warn(JSON.stringify(str) + " is not a string");
      return;
    }

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
        return str.toLowerCase();
      case "upper":
        return str.toUpperCase();
      case "title":
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
      case "sentence":
        return str.charAt(0).toUpperCase() + str.slice(1);
      case "camel":
        return str.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
      case "pascal":
        return str
          .replace(/\W+(.)/g, (match, chr) => chr.toUpperCase())
          .replace(/\W+/g, "");
      case "kebab":
        return str
          .replace(/([a-z\d])([A-Z])/g, "$1-$2")
          .replace(/\W+/g, "-")
          .toLowerCase();
      case "snake":
        return str
          .replace(/([a-z\d])([A-Z])/g, "$1_$2")
          .replace(/\W+/g, "_")
          .toLowerCase();
      case "dot":
        return str
          .replace(/([a-z\d])([A-Z])/g, "$1.$2")
          .replace(/\W+/g, ".")
          .toLowerCase();
      default:
        return str;
    }
  }
}

export default StringConversion;
