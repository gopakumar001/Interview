/**
 * Creating person object.
 */
var Person = {};
Object.defineProperty(Person, "name", {
    get: function() {
        console.log("GETTER : "+this.name);
        return this.name;
    },
    set: function(name) {
        console.log("SETTER : "+this.name);
        this.name = name;
    }
});

