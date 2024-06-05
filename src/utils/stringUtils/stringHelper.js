import StringManipulation from "./stringManipulation";

class StringHelper {
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
      str += `${StringManipulation.indentString(
        key,
        indent,
        level
      )}: ${value}\n`;
    }
    return str;
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
