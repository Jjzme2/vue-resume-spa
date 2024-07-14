class MappingUtil {
  /**
   * Extends and merges two objects, giving precedence to properties from the custom object.
   * @param {Object} baseObject - The base object.
   * @param {Object} customObject - The custom object with properties to merge.
   * @returns {Object} - A new object containing merged properties.
   */
  static extendAndMerge(baseObject, customObject) {
    return {
      ...baseObject,
      ...customObject,
    };
  }

  /**
   * Filters object properties based on a condition.
   * @param {Object} obj - The object to filter.
   * @param {function} condition - A function that defines the filtering condition.
   * @returns {Object} - A new object containing filtered properties.
   */
  static filterObject(obj, condition) {
    const filtered = {};
    for (const key in obj) {
      if (
        Object.prototype.hasOwnProperty.call(obj, key) &&
        condition(obj[key])
      ) {
        filtered[key] = obj[key];
      }
    }
    return filtered;
  }

  /**
   * Transforms object values using a mapping function.
   * @param {Object} obj - The object to transform.
   * @param {function} mapper - A function to apply to each value.
   * @returns {Object} - A new object with transformed values.
   */
  static mapObjectValues(obj, mapper) {
    const mapped = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        mapped[key] = mapper(obj[key]);
      }
    }
    return mapped;
  }

  /**
   * Renames object properties based on a provided mapping.
   * @param {Object} obj - The object to rename properties of.
   * @param {Object} propertyMap - A mapping of old property names to new names.
   * @returns {Object} - A new object with renamed properties.
   */
  static renameObjectProperties(obj, propertyMap) {
    const renamed = {};
    for (const key in obj) {
      if (
        Object.prototype.hasOwnProperty.call(obj, key) &&
        Object.prototype.hasOwnProperty.call(propertyMap, key)
      ) {
        renamed[propertyMap[key]] = obj[key];
      } else {
        renamed[key] = obj[key];
      }
    }
    return renamed;
  }
}

/*
  +---------------------------------------------------------+
  |                                                         |
  |                    Examples below                       |
  |                                                         |
  +---------------------------------------------------------+
*/

/*
// Example usages:

// 1. extendAndMerge
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = MappingUtil.extendAndMerge(obj1, obj2);
console.log('Merged Object:', mergedObject);

// Output: { a: 1, b: 3, c: 4 }

// 2. filterObject
const data = { apple: 5, banana: 10, orange: 3 };
const filteredData = MappingUtil.filterObject(data, (value) => value >= 5);
console.log('Filtered Data:', filteredData);

// Output: { banana: 10 }

// 3. mapObjectValues
const prices = { apple: 2, banana: 1.5, orange: 3 };
const discountedPrices = MappingUtil.mapObjectValues(prices, (price) => price * 0.9);
console.log('Discounted Prices:', discountedPrices);

// Output: { apple: 1.8, banana: 1.35, orange: 2.7 }

// 4. renameObjectProperties
const person = { firstName: 'John', lastName: 'Doe', age: 30 };
const renamedPerson = MappingUtil.renameObjectProperties(person, {
  firstName: 'first',
  lastName: 'last',
});
console.log('Renamed Person:', renamedPerson);

// Output: { first: 'John', last: 'Doe', age: 30 }
*/

export default MappingUtil;
