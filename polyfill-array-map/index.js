// Normally, a polyfill would be implemented as part of the prototype of a global object.
/* Something like the below
if (!Array.prototype.map) {
  Array.prototype.map = function(index) {
    // Implementation goes here.
  };
} 
*/
// However, for this exercise, we'll define it with a different name to not confuse the global object.
// We can of course, also override it but let's not do that!

/**
 * A polyfill implementation of the Array.prototype.map method.
 *
 * @param {Function} cb - A function that produces an element of the new array, taking three arguments:
 *   @param {*} currentValue - The current element being processed in the array.
 *   @param {number} [index] - The index of the current element being processed in the array.
 *   @param {Array} [array] - The array map was called upon.
 * @this {Array} - The array to map over.
 * @return {Array} A new array with each element being the result of the callback function.
 */
export function myMap(cb) {
  // Implementation goes here
}
