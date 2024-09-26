// Normally, a polyfill would be implemented as part of the prototype of a global object.
/* Something like the below
if (!Function.prototype.call) {
  Function.prototype.call = function(index) {
    // Implementation goes here.
  };
} 
*/
// However, for this exercise, we'll define it with a different name to not confuse the global object.
// We can of course, also override it but let's not do that!

/**
 * A polyfill implementation of the Function.prototype.call method.
 *
 * @param {*} thisArg - The value of this provided for the call to the function.
 * @param {...*} args - The arguments for the call to the function.
 * @return {*} The result of calling the function with the provided this and arguments.
 */
export function myCall(thisArg, ...args) {
  // Implementation goes here
}
