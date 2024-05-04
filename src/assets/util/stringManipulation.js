class StringHelper {
  /**
   * Check if the value is a valid string type
   * @param {STRING} value - The value to check
   * @returns - Whether the value is a string or not
   */
  static isString(value) {
    return typeof value === "string";
  }

  /**
   * Check if the value is an empty string
   * @param {STRING} value - The value to check
   * @returns - Whether the value is an empty string or not
   */
  static isEmptyString(value) {
    return value === "";
  }

  /**
   * Repeat a string a specified number of times
   * @param {STRING} str - The string to repeat
   * @param {NUMBER} count - The number of times to repeat the string
   * @returns - The repeated string
   */
  static repeatString(str, count) {
    return str.repeat(count);
  }

  /**
   * Indent a string by a specified number of spaces
   * @param {STRING} str - The string to indent
   * @param {NUMBER} indent - The number of spaces to indent the string
   * @param {NUMBER} level - The level of indentation
   * @returns - The indented string
   */
  static indentString(str, indent = 2, level = 1) {
    return " ".repeat(indent * level) + str;
  }

  /**
   * Add indentation to a string
   * @param {NUMBER} indent - The number of spaces to indent the string
   * @param {NUMBER} level - The level of indentation
   * @returns - The indented string
   */
  static addIndent(indent = 2, level = 1) {
    return " ".repeat(indent * level);
  }

  /**
   * Convert a string to a number or NaN
   * @param {STRING} str - The string to convert
   * @returns - The converted number or NaN
   */
  static convertToNumber(str) {
    return Number(str);
  }

  /**
   * Check if a string contains a substring
   * @param {STRING} str - The string to check
   * @param {STRING} substring - The substring to check for
   * @returns - Whether the string contains the substring or not
   */
  static containsSubstring(str, substring) {
    return str.includes(substring);
  }

  /**
   * Stringifies the object in a human-readable format.
   * @param {object} obj - The object to stringify.
   * @param {number} [indent=2] - The number of spaces for indentation (default: 2).
   * @returns {string} - The human-readable string representation of the object.
   */
  static stringify(obj, indent = 2, level = 1) {
    let str = "";
    for (const [key, value] of Object.entries(obj)) {
      level += 1;
      str += `${StringHelper.indentString(key, indent, level)}: ${value}\n`;
    }
    return str;
  }

  /**
   * Truncate a string to a specified length
   * @param {STRING} str - The string to truncate
   * @param {NUMBER} length - The length to truncate the string to
   * @returns - The truncated string
   */
  static truncateString(str, length) {
    return str.length > length ? str.slice(0, length) + "..." : str;
  }

  /**
   * Remove all whitespace from a string
   * @param {STRING} str - The string to remove whitespace from
   * @returns - The string without whitespace
   */
  static removeWhitespace(str) {
    return str.replace(/\s/g, "");
  }

  /**
   * Generate a random UUID
   * @returns - A random UUID
   */
  static generateUUID() {
    // eslint-disable-next-line no-mixed-operators
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /**
   * Reverse a string
   * @param {STRING} str - The string to reverse
   * @returns - The reversed string
   */
  static reverseString(str) {
    return str.split("").reverse().join("");
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

  /**
   * Check if a string is a valid type based on a regex pattern
   * @param {STRING} type - The type of string to validate
   * @param {STRING} value - The string to validate
   * @returns - Whether the string is valid or not
   */
  static isValid(type, value) {
    if (!type) {
      console.warn("No type provided to isValid");
      return;
    }

    const acceptedTypes = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^\d{10}$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      username: /^[a-zA-Z0-9]+$/,
      name: /^[a-zA-Z]+$/,
      date: /^\d{4}-\d{2}-\d{2}$/,
      time: /^\d{2}:\d{2}$/,
      datetime: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/,
      "datetime-local": /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
    };

    const regex = acceptedTypes[type];

    if (!regex) {
      console.warn(`Invalid type provided: ${type}`);
      return false;
    }

    return regex.test(value);
  }

  /**
   * Encode a string to a different format
   * @param {STRING} encodedType - The type of encoding to use
   * @param {STRING} str - The string to encode
   * @returns - The encoded string
   */
  static encodeTo(encodedType, str) {
    const acceptedTypes = {
      base64: () => btoa(str),
      uri: () => encodeURIComponent(str),
      uriComponent: () => encodeURI(str),
      escape: () => escape(str),
    };

    if (!acceptedTypes[encodedType]) {
      console.warn(`Invalid encoded type provided: ${encodedType}`);
      return;
    }

    return acceptedTypes[encodedType]();
  }
}

// Export the class for usage in other modules
export default StringHelper;
