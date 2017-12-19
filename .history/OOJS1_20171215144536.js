/**
 * Mammel class
 */
function Mammal(name) {
    this.name = name;
}
Mammal.prototype = {
    toString : function() {
        console.log("Mammel : "+this.name);
    }
};


/**
 * Cat Class
 */
function Cat() {}
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;