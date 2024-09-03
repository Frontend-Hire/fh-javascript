// Normally, a polyfill would be implemented as part of the prototype or the constructor of a global object.
// In this case, it is part of the Promise constructor.
/* Something like the below
if (!Promise.all) {
  Promise.all = function(index) {
    // Implementation goes here.
  };
} 
*/
// However, for this exercise, we'll define it with a different name to not confuse the global object.
// We can of course, also override it but let's not do that!

/**
 * A polyfill implementation of the Promise.all method.
 *
 * @param {Array<Promise<any>>} promises - An array of promises.
 * @return {Promise<Array<any>>} A promise that resolves when all promises in the input array have resolved, or rejects immediately upon any of the input promises rejecting.
 */
export function myAll(promises) {
  // Implementation goes here.
}
