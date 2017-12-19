/**
 * Creating person object.
 */
var Person = {};
Object.defineProperty(Person, "name", {
    enumerable: true,
    writable: true,
    configurable: false,
    get: function() {
        console.log("GETTER : "+this.name);
        return this.name;
    },
    set: function(name) {
        console.log("SETTER : "+this.name);
        this.name = name;
    }
});

