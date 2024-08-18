// Normally, a polyfill would be implemented as part of the prototype of a global object.
/* Something like the below
if (!Array.prototype.filter) {
  Array.prototype.filter = function(index) {
    // Implementation goes here.
  };
} 
*/
// However, for this exercise, we'll define it with a different name to not confuse the global object.
// We can of course, also override it but let's not do that!

/**
 * A polyfill implementation of the Array.prototype.filter method.
 *
 * @param {Function} callback - A function to test each element of the array that is coercible to boolean.
 * @return {Array} A new array with all elements that pass the test implemented by the provided function.
 */
export function myFilter(cb) {}
