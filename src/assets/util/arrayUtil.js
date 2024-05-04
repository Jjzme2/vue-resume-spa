class arrayHelper {
  /**
   * Check if an array is an array
   * @param {Array} array - This is the array that you want to check
   * @returns {Boolean} - Whether the value is an array or not
   */
  static isArray(array) {
    return Array.isArray(array);
  }

  /**
   * Remove an element from a given array
   * @param {Array} array - This is the array that you want to remove the element from
   * @param {*} element - This is the element that you want to remove from the array
   * @returns {Array} - This is the array with the element removed
   */
  static removeElement(array, element) {
    return array.filter((e) => e !== element);
  }

  /**
   * Remove duplicates from an array
   * @param {Array} array - This is the array that you want to remove duplicates from
   * @returns {Array} - This is the array with duplicates removed
   */
  static removeDuplicates(array) {
    return [...new Set(array)];
  }

  /**
   * Shuffle an array
   * @param {Array} array - This is the array that you want to shuffle
   * @returns {Array} - This is the shuffled array
   */
  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  /**
   * Merge two arrays
   * @param {Array} array1 - This is the first array that you want to merge
   * @param {Array} array2 - This is the second array that you want to merge
   * @returns {Array} - This is the merged array
   */
  static mergeArrays(array1, array2) {
    return [...array1, ...array2];
  }

  /**
   * Sort an array in ascending or descending order
   * @param {Array} array - This is the array that you want to sort
   * @param {Boolean} ascending - This is the order that you want to sort the array in
   * @returns {Array} - This is the sorted array
   */
  static sortArray(array, ascending = true) {
    return array.sort((a, b) => (ascending ? a - b : b - a));
  }
}

export default arrayHelper;
