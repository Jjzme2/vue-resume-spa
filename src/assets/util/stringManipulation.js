class StringHelper {
  static generateUUID() {
    // eslint-disable-next-line no-mixed-operators
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  static reverseString(str) {
    return str.split("").reverse().join("");
  }

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
      "lower",
      "upper",
      "title",
      "sentence",
      "camel",
      "pascal",
      "kebab",
      "snake",
      "dot",
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
