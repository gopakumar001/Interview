/**
 * Creating person object.
 */
var Person = {};
Object.defineProperty(Person, "name", {
   get: function() {
       return this.name;
   },
   set: function(name) {
       this.name = name;
   }
});

