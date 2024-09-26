// Normally, a polyfill would be implemented as part of the prototype of a global object.
/* Something like the below
if (!Function.prototype.bind) {
  Function.prototype.bind = function(index) {
    // Implementation goes here.
  };
} 
*/
// However, for this exercise, we'll define it with a different name to not confuse the global object.
// We can of course, also override it but let's not do that!

/**
 * A polyfill implementation of the Function.prototype.bind method.
 *
 * @param {Object} thisArg - The value to be used as the this value of the target function when the bound function is called.
 * @param {...*} [arg1, arg2, ...] - Arguments to be prepended to arguments provided to the bound function when invoking the target function.
 * @return {Function} A new function that has the same function body as the original function, but has this set to the provided thisArg, and has the specified arguments prepended to any provided when called.
 */
export function myBind(thisArg, ...args) {
  // Implementation goes here
}
