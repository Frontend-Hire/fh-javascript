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

export function myAt(index) {}
