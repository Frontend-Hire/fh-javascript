// Normally, a polyfill would be implemented as part of the prototype of a global object.
/* Something like the below
if (!Array.prototype.at) {
  Array.prototype.at = function(index) {
    // Implementation goes here.
  };
} 
*/
// However, for this exercise, we'll define it with a different name to not confuse the global object.
// We can of course, also override it but let's not do that!

/**
 * Returns the array element at the specified index.
 *
 * @param {number} index - The index of the element to return.
 * @return {*} The element at the specified index, or undefined if the index is out of bounds.
 */
export function myAt(index) {}
