// Normally, a polyfill would be implemented as part of the prototype of a global object.
/* Something like the below
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(index) {
    // Implementation goes here.
  };
} 
*/
// However, for this exercise, we'll define it with a different name to not confuse the global object.
// We can of course, also override it but let's not do that!

/**
 * A polyfill implementation of the Array.prototype.reduce method.
 *
 * @param {Function} cb - The callback function to execute on each element of the array (except the first element in the case where an initial value is provided).
 * @this {Array} - The array to reduce.
 * @return {*} The reduced value.
 */
export function myReduce(cb) {
  // Implementation goes here
}
