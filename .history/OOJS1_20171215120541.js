function Person() {
}

Object.defineProperty(Person, "name", {
    enumerable: true,
    writable: true,
    configurable: false,
    get: function() {
        return this.name;
    },
    set: function(name) {
        this.name = name;
    }
});