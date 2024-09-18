// Normally, a polyfill would be implemented as part of the prototype or the constructor of a global object.
// In this case, it is part of the Promise constructor.
/* Something like the below
if (!Number.isInteger) {
  Number.isInteger = function(value) {
    // Implementation goes here.
  };
} 
*/
// However, for this exercise, we'll define it with a different name to not confuse the global object.
// We can of course, also override it but let's not do that!

/**
 * Checks if the given value is an integer.
 *
 * @param {*} value - The value to be checked.
 * @return {boolean} true if the value is an integer, false otherwise.
 */
export function myIsInteger(value) {
  // Implementation goes here.
}
