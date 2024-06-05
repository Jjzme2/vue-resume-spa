class StringManipulation {
  // Repeats a string a certain number of times
  static repeatString(str, count) {
    return str.repeat(count);
  }

  // Adds indentation to a string with a specified number of spaces
  static indentString(str, indent = 2, level = 1) {
    return " ".repeat(indent * level) + str;
  }

  // Shortens a string to a specified length
  static truncateString(str, length) {
    return str.length > length ? str.slice(0, length) + "..." : str;
  }

  // Removes all spaces from a string
  static removeWhitespace(str) {
    return str.replace(/\s/g, "");
  }

  // Reverses a string
  static reverseString(str) {
    return str.split("").reverse().join("");
  }
}

export default StringManipulation;
