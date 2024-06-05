class StringValidation {
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
   * Check if a string contains a substring
   * @param {STRING} str - The string to check
   * @param {STRING} substring - The substring to check for
   * @returns - Whether the string contains the substring or not
   */
  static containsSubstring(str, substring) {
    return str.includes(substring);
  }
}

export default StringValidation;
